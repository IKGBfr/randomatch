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
        <title>Bienvenue sur RandoMatch</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background-color: #f5f7fa;
            padding: 40px 20px;
          }
          
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }
          
          .header { 
            background: white;
            padding: 40px 40px 30px;
            text-align: center;
            border-bottom: 1px solid #e8eef5;
          }
          
          .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            position: relative;
            display: inline-block;
          }
          
          .logo-emoji {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            line-height: 1;
          }
          
          .header h1 {
            font-size: 28px;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }
          
          .header p {
            font-size: 15px;
            color: #64748b;
            margin-top: 8px;
          }
          
          .content { 
            padding: 50px 40px;
          }
          
          .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 24px;
          }
          
          .message {
            font-size: 16px;
            line-height: 1.7;
            color: #475569;
            margin-bottom: 24px;
          }
          
          .highlight-card {
            background: linear-gradient(135deg, #fff5f7 0%, #fef2f4 100%);
            border-left: 3px solid #FF6B9D;
            border-radius: 8px;
            padding: 28px;
            margin: 40px 0;
          }
          
          .highlight-card h3 {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
          }
          
          .highlight-card p {
            font-size: 15px;
            color: #64748b;
            line-height: 1.6;
            margin: 0;
          }
          
          .cta-section {
            text-align: center;
            margin: 40px 0;
            padding: 32px;
            background: #f8fafc;
            border-radius: 8px;
          }
          
          .cta-section h3 {
            font-size: 17px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
          }
          
          .cta-section p {
            font-size: 15px;
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          
          .btn-primary {
            display: inline-block;
            background: #1877F2;
            color: white !important;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.2s;
          }
          
          .btn-primary:hover {
            background: #166fe5;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(24, 119, 242, 0.25);
          }
          
          .signature {
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #e8eef5;
            font-size: 15px;
            color: #64748b;
          }
          
          .signature strong {
            display: block;
            color: #1a1a1a;
            font-weight: 600;
            margin-top: 12px;
            font-size: 16px;
          }
          
          .signature .title {
            color: #94a3b8;
            font-size: 14px;
            margin-top: 4px;
          }
          
          .footer { 
            background: #f8fafc;
            padding: 32px 40px;
            text-align: center; 
            color: #94a3b8; 
            font-size: 13px;
            line-height: 1.8;
            border-top: 1px solid #e8eef5;
          }
          
          .footer a {
            color: #FF6B9D;
            text-decoration: none;
            font-weight: 500;
          }
          
          @media only screen and (max-width: 600px) {
            body {
              padding: 0;
            }
            .email-container {
              box-shadow: none;
            }
            .header, .content, .footer {
              padding-left: 24px;
              padding-right: 24px;
            }
            .greeting {
              font-size: 18px;
            }
            .highlight-card {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="22" fill="url(#gradient)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF5C8D"/>
                    <stop offset="100%" style="stop-color:#FF8FAB"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="logo-emoji">🤍</div>
            </div>
            <h1>RandoMatch</h1>
            <p>L'app de rencontres pour randonneurs</p>
          </div>
          
          <div class="content">
            <div class="greeting">Salut ${firstName} 👋</div>
            
            <p class="message">
              Bienvenue sur la liste d'attente ! Tu fais maintenant partie d'une communauté de passionnés 
              qui rêvent de rencontrer ${gender === 'F' ? 'leur partenaire idéal' : 'leur partenaire idéale'} sur les sentiers.
            </p>

            <div class="highlight-card">
              <h3>🚀 Lancement imminent</h3>
              <p>
                Tu seras parmi les tout premiers alertés dès que l'app sera disponible. 
                En attendant, n'hésite pas à partager RandoMatch autour de toi.
              </p>
            </div>

            <div class="cta-section">
              <h3>Rejoins-nous sur Facebook</h3>
              <p>Suis notre page pour ne rien rater du lancement et partage RandoMatch avec tes amis randonneurs.</p>
              <a href="https://www.facebook.com/randomatch/" class="btn-primary">Suivre @RandoMatch</a>
            </div>

            <p class="message">
              Plus nous serons nombreux au lancement, plus tu auras de chances de faire de belles rencontres.
            </p>

            <div class="signature">
              À très bientôt sur les sentiers 🏔️
              <strong>Anthony</strong>
              <div class="title">Fondateur de RandoMatch</div>
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
