import { NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';
import { contactSchema } from '@/lib/validations/contact';
import { rateLimit, sanitizeText } from '@/lib/utils/security';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    // 1. Rate limiting par IP
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
    const rateLimitResult = rateLimit(ip);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Réessayez dans 1 heure.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Validation avec Zod
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map(e => e.message).join(', ');
      return NextResponse.json(
        { error: errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = validationResult.data;

    // 3. Honeypot check
    if (website) {
      console.warn('Honeypot triggered:', { ip, email });
      // Retourner succès pour ne pas alerter le bot
      return NextResponse.json({ success: true });
    }

    // 4. Sanitization
    const sanitizedName = sanitizeText(name);
    const sanitizedSubject = sanitizeText(subject);
    const sanitizedMessage = sanitizeText(message);

    // 5. Configuration Brevo
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY || ''
    );

    // 6. Envoi email
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: 'contact@randomatch.fr', name: 'RandoMatch Support' }];
    sendSmtpEmail.sender = { email: 'contact@mail.randomatch.fr', name: 'Site RandoMatch' };
    sendSmtpEmail.replyTo = { email, name: sanitizedName };
    sendSmtpEmail.subject = `[Contact] ${sanitizedSubject}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">Nouveau message de contact</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>De :</strong> ${sanitizedName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${sanitizedSubject}</p>
          <p><strong>IP :</strong> ${ip}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #059669; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Message :</h3>
          <p style="white-space: pre-wrap; color: #4b5563;">${sanitizedMessage}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        
        <p style="color: #6b7280; font-size: 14px;">
          Envoyé depuis le formulaire de contact de www.randomatch.fr
        </p>
      </div>
    `;

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
