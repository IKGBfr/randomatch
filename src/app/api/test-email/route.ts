// app/api/test-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function GET(req: NextRequest) {
  try {
    // Initialize API
    const emailApiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    emailApiInstance.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY as string
    );

    // Get test email from query params
    const searchParams = req.nextUrl.searchParams;
    const testEmail = searchParams.get('email') || 'dodocyclo.fr@gmail.com';

    console.log('🧪 Testing email to:', testEmail);

    // Send test email
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME_MARKETING || 'RandoMatch',
      email: process.env.BREVO_SENDER_EMAIL_MARKETING || 'contact@mail.randomatch.fr'
    };
    sendSmtpEmail.to = [{
      email: testEmail,
      name: 'Test User'
    }];
    sendSmtpEmail.replyTo = {
      email: 'contact@randomatch.fr',
      name: 'RandoMatch'
    };
    sendSmtpEmail.subject = `🧪 Test Email - ${new Date().toLocaleTimeString('fr-FR')}`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { 
            font-family: Arial, sans-serif; 
            padding: 40px;
            background: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .success {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
          }
          .info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            font-size: 14px;
            line-height: 1.6;
          }
          .timestamp {
            color: #666;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success">
            ✅ <strong>Email de test reçu avec succès !</strong>
          </div>
          
          <h2>Diagnostic de délivrabilité</h2>
          
          <div class="info">
            <p><strong>Expéditeur:</strong> ${process.env.BREVO_SENDER_NAME_MARKETING} &lt;${process.env.BREVO_SENDER_EMAIL_MARKETING}&gt;</p>
            <p><strong>Destinataire:</strong> ${testEmail}</p>
            <p><strong>Date/Heure:</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>

          <h3>✅ Points de vérification :</h3>
          <ul>
            <li>✉️ L'email est bien arrivé dans ta boîte de réception</li>
            <li>🚫 Vérifie qu'il n'est PAS dans les spams</li>
            <li>📧 L'expéditeur devrait être: contact@mail.randomatch.fr</li>
            <li>⏱️ Temps de réception : quelques secondes</li>
          </ul>

          <h3>🔍 Si cet email est dans les spams :</h3>
          <ol>
            <li>Marque-le comme "Pas un spam"</li>
            <li>Ajoute contact@mail.randomatch.fr à tes contacts</li>
            <li>Vérifie la configuration DNS (SPF/DKIM/DMARC)</li>
          </ol>

          <div class="timestamp">
            Test envoyé le ${new Date().toLocaleString('fr-FR', { 
              dateStyle: 'full', 
              timeStyle: 'long' 
            })}
          </div>
        </div>
      </body>
      </html>
    `;

    const result = await emailApiInstance.sendTransacEmail(sendSmtpEmail);

    console.log('✅ Email sent successfully:', result);

    return NextResponse.json({
      success: true,
      message: `Email de test envoyé à ${testEmail}`,
      data: {
        messageId: result.messageId,
        sender: `${process.env.BREVO_SENDER_NAME_MARKETING} <${process.env.BREVO_SENDER_EMAIL_MARKETING}>`,
        recipient: testEmail,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: unknown) {
    console.error('❌ Test email failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }, { status: 500 });
  }
}
