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

    // ⚠️ TEMPORARY: Block Gmail for 48h (rate limit recovery)
    const isGmail = email.toLowerCase().includes('@gmail.com');
    if (isGmail) {
      console.log('⚠️ Gmail blocked temporarily - skipping welcome email for:', email);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Inscription réussie ! Tu recevras ton email de bienvenue dans 48h.' 
        },
        { status: 200 }
      );
    }

    // Send welcome email (MARKETING)
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME_MARKETING || 'RandoMatch',
      email: process.env.BREVO_SENDER_EMAIL_MARKETING || 'contact@mail.randomatch.fr'
    };
    sendSmtpEmail.to = [{
      email: email,
      name: firstName
    }];
    sendSmtpEmail.replyTo = {
      email: 'contact@randomatch.fr',
      name: 'RandoMatch'
    };
    sendSmtpEmail.subject = `Bienvenue sur RandoMatch ! 🩷`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <title>Bienvenue sur RandoMatch 🩷</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #fafafa;
            padding: 20px;
          }
          
          .container { 
            max-width: 560px; 
            margin: 0 auto; 
            background: white;
            border-radius: 16px;
            overflow: hidden;
          }
          
          .header { 
            background: linear-gradient(135deg, #FE3C72, #FF5485); 
            color: white; 
            padding: 40px 30px; 
            text-align: center;
          }
          
          .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
          }
          
          .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.95;
          }
          
          .content { 
            padding: 50px 40px;
          }
          
          .greeting {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 24px;
          }
          
          .message {
            font-size: 16px;
            line-height: 1.8;
            color: #4a4a4a;
            margin-bottom: 20px;
          }
          
          .highlight-box {
            background: linear-gradient(135deg, #FFF5F7 0%, #FFE8ED 100%);
            border-radius: 12px;
            padding: 32px;
            margin: 40px 0;
            text-align: center;
          }
          
          .highlight-box .emoji {
            font-size: 40px;
            margin-bottom: 16px;
          }
          
          .highlight-box h3 {
            font-size: 20px;
            font-weight: 600;
            color: #FE3C72;
            margin-bottom: 12px;
          }
          
          .highlight-box p {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
            margin: 0;
          }
          
          .social-box {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 32px;
            margin: 40px 0;
            text-align: center;
          }
          
          .social-box h3 {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 16px;
          }
          
          .social-box p {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
            margin-bottom: 24px;
          }
          
          .fb-button {
            display: inline-block;
            background: #1877F2;
            color: white !important;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 15px;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          
          .fb-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(24, 119, 242, 0.3);
          }
          
          .signature {
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #f0f0f0;
            color: #666;
            font-size: 15px;
          }
          
          .signature strong {
            color: #1a1a1a;
            display: block;
            margin-top: 12px;
            font-size: 16px;
          }
          
          .footer { 
            background: #f8f8f8;
            padding: 30px 40px;
            text-align: center; 
            color: #999; 
            font-size: 13px;
            line-height: 1.8;
          }
          
          .footer a {
            color: #FE3C72;
            text-decoration: none;
          }
          
          @media only screen and (max-width: 600px) {
            body {
              padding: 0;
            }
            .container {
              border-radius: 0;
            }
            .header {
              padding: 30px 20px;
            }
            .header h1 {
              font-size: 26px;
            }
            .content {
              padding: 32px 24px;
            }
            .greeting {
              font-size: 22px;
            }
            .highlight-box, .social-box {
              padding: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>RandoMatch 🤍</h1>
            <p>La première app de rencontres pour randonneurs</p>
          </div>
          
          <div class="content">
            <div class="greeting">Salut ${firstName} ! 👋</div>
            
            <p class="message">
              Bienvenue sur la liste d'attente ! Tu fais maintenant partie d'une communauté de passionnés qui rêvent de rencontrer ${gender === 'F' ? 'leur partenaire idéal' : 'leur partenaire idéale'} sur les sentiers.
            </p>

            <div class="highlight-box">
              <div class="emoji">🚀</div>
              <h3>Lancement imminent</h3>
              <p>Tu seras parmi les tout premiers alertés dès que l'app sera disponible. En attendant, n'hésite pas à partager RandoMatch autour de toi !</p>
            </div>

            <div class="social-box">
              <h3>📱 Rejoins-nous sur Facebook</h3>
              <p>Suis notre page pour ne rien rater du lancement et partage RandoMatch avec tes amis randonneurs !</p>
              <a href="https://www.facebook.com/randomatch/" class="fb-button">👍 Suivre @RandoMatch</a>
            </div>

            <p class="message">
              Plus nous serons nombreux au lancement, plus tu auras de chances de faire de belles rencontres.
            </p>

            <div class="signature">
              À très bientôt sur les sentiers 🏔️
              <strong>Anthony</strong>
              <span style="color: #999; font-size: 13px; display: block; margin-top: 4px;">Fondateur de RandoMatch</span>
            </div>
          </div>
          
          <div class="footer">
            <p>Tu reçois cet email car tu t'es inscrit(e) sur <a href="https://randomatch.fr">randomatch.fr</a></p>
            <p style="margin-top: 12px;">© 2025 RandoMatch • L'amour se trouve sur les sentiers</p>
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
