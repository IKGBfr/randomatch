// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

// Initialize Brevo API
const apiInstance = new SibApiV3Sdk.ContactsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey, 
  process.env.BREVO_API_KEY as string
);

const emailApiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
emailApiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

export async function POST(req: NextRequest) {
  try {
    const { firstName, email, department, gender } = await req.json();
    console.log('📥 Received data from form:', { firstName, email, department, gender });

    // Validation
    if (!firstName || !email || !department || !gender) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Create contact in Brevo
    const contact = new SibApiV3Sdk.CreateContact();
    contact.email = email;
    contact.attributes = {
      PRENOM: firstName,
      DEPARTEMENT: department,
      GENRE: gender === 'H' ? 'homme' : 'femme'
    };
    console.log('📤 Sending to Brevo attributes:', contact.attributes);
    console.log('📋 List ID:', process.env.BREVO_LIST_ID);
    contact.listIds = [parseInt(process.env.BREVO_LIST_ID as string)];
    contact.updateEnabled = true;

    console.log('🚀 Full contact object:', JSON.stringify(contact, null, 2));
    await apiInstance.createContact(contact);

    // Send welcome email
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME,
      email: process.env.BREVO_SENDER_EMAIL
    };
    sendSmtpEmail.to = [{
      email: email,
      name: firstName
    }];
    sendSmtpEmail.subject = `Tu es sur la liste d'attente RandoMatch ! 🥾`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
          }
          .header { 
            background: linear-gradient(135deg, #4a7044, #6b8e23); 
            color: white; 
            padding: 40px 30px; 
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content { 
            padding: 40px 30px;
            background: #ffffff;
          }
          .content h2 {
            color: #4a7044;
            margin-bottom: 20px;
          }
          .promo-box {
            background: #f0f7f0;
            border-left: 4px solid #4a7044;
            padding: 20px;
            margin: 25px 0;
            border-radius: 5px;
          }
          .footer { 
            background: #f8f9fa;
            padding: 25px;
            text-align: center; 
            color: #6c757d; 
            font-size: 13px;
            border-top: 1px solid #e9ecef;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🥾 💕 RandoMatch</h1>
          </div>
          <div class="content">
            <h2>Salut ${firstName} !</h2>
            
            <p>Tu es bien inscrit${gender === 'F' ? 'e' : ''} sur la liste d'attente de RandoMatch.</p>
            
            <p>Tu seras parmi les premier${gender === 'F' ? 'ère' : ''}s averti${gender === 'F' ? 'e' : ''}s dès que l'application sera disponible.</p>
            
            <div class="promo-box">
              <strong>📅 Date de lancement prévue :</strong><br>
              Dimanche 26 octobre 2025<br><br>
              Je travaille dur pour que tout soit prêt à cette date !
            </div>
            
            <p>En tant que membre de la liste d'attente, tu bénéficieras d'un accès prioritaire.</p>
            
            <p>J'ai hâte de t'aider à trouver ${gender === 'F' ? 'ton randonneur idéal' : 'ta randonneuse idéale'} !</p>
            
            <p>À très bientôt,<br>
            <strong>Anthony</strong><br>
            Développeur de RandoMatch</p>
          </div>
          
          <div class="footer">
            <p>© 2025 RandoMatch</p>
            <p>Tu reçois cet email car tu t'es inscrit(e) sur randomatch.fr</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await emailApiInstance.sendTransacEmail(sendSmtpEmail);

    console.log('✅ Contact created successfully for:', email);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie ! Vérifie ta boîte mail.' 
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('❌ Brevo API Error:', error);
    
    // Check if email already exists
    if (error && typeof error === 'object' && 'response' in error) {
      const apiError = error as { response?: { status?: number }; status?: number };
      if (apiError.response?.status === 409 || apiError.status === 409) {
        return NextResponse.json(
          { error: 'Cet email est déjà inscrit' },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription. Réessaye plus tard.' },
      { status: 500 }
    );
  }
}