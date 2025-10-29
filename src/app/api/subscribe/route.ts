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
    sendSmtpEmail.subject = `Bienvenue sur RandoMatch ! 🩷`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
            padding: 40px 30px;
            background: #ffffff;
          }
          .content h2 {
            color: #FE3C72;
            margin-bottom: 20px;
            font-size: 24px;
          }
          .content p {
            margin-bottom: 15px;
            color: #555;
            font-size: 15px;
          }
          .promo-box {
            background: linear-gradient(135deg, rgba(254,60,114,0.1), rgba(255,84,133,0.1));
            border-left: 4px solid #FE3C72;
            padding: 25px;
            margin: 30px 0;
            border-radius: 8px;
          }
          .promo-box strong {
            color: #FE3C72;
            font-size: 17px;
            display: block;
            margin-bottom: 10px;
          }
          .promo-box p {
            margin: 10px 0;
            line-height: 1.7;
          }
          .benefits {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
          }
          .benefits h3 {
            color: #FE3C72;
            font-size: 18px;
            margin-bottom: 15px;
          }
          .benefit-item {
            padding: 8px 0;
            font-size: 15px;
            color: #555;
          }
          .benefit-item::before {
            content: "✓ ";
            color: #FE3C72;
            font-weight: bold;
            margin-right: 8px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #FE3C72, #FF5485);
            color: white;
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: transform 0.2s;
          }
          .footer { 
            background: #2d3748;
            padding: 30px;
            text-align: center; 
            color: #a0aec0; 
            font-size: 13px;
          }
          .footer p {
            margin: 8px 0;
          }
          .footer a {
            color: #FE3C72;
            text-decoration: none;
          }
          .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e2e8f0, transparent);
            margin: 25px 0;
          }
          @media only screen and (max-width: 600px) {
            .container {
              margin: 0;
              border-radius: 0;
            }
            .header, .content {
              padding: 30px 20px;
            }
            .header h1 {
              font-size: 26px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>RandoMatch 🩷</h1>
            <p>La première app de rencontres pour randonneurs</p>
          </div>
          
          <div class="content">
            <h2>Salut ${firstName} ! 👋</h2>
            
            <p>Tu es bien inscrit${gender === 'F' ? 'e' : ''} sur la liste d'attente de <strong>RandoMatch</strong>.</p>
            
            <p>Félicitations ! Tu fais maintenant partie d'une communauté de passionnés qui, comme toi, rêvent de rencontrer ${gender === 'F' ? 'leur partenaire de rando idéal' : 'leur partenaire de rando idéale'} 🥾💕</p>

            <div class="promo-box">
              <strong>🚀 Lancement imminent</strong>
              <p>RandoMatch arrive <strong>très bientôt</strong>Je peaufine les derniers détails pour vous offrir la meilleure expérience dès le premier jour.</p>
              <p style="margin-bottom: 0;">Tu seras parmi les <strong>tout premiers alertés</strong> dès que l'app sera disponible 🔔</p>
            </div>

            <div class="benefits">
              <h3>🎁 Tes avantages en tant que membre prioritaire :</h3>
              <div class="benefit-item">Accès prioritaire au lancement de l'application</div>
              <div class="benefit-item">Possibilité de créer ton profil avant tout le monde</div>
              <div class="benefit-item">Plus de chances de rencontrer rapidement des profils compatibles</div>
              <div class="benefit-item">Participation à la communauté dès le début</div>
            </div>

            <div class="divider"></div>

            <p><strong>En attendant, parle de RandoMatch autour de toi !</strong> 🗣️<br>
            Plus nous serons nombreux au lancement, plus tu auras de chances de trouver ${gender === 'F' ? 'ton partenaire idéal' : 'ta partenaire idéale'}.</p>

            <p style="margin-top: 30px;">J'ai hâte de t'aider à rencontrer des personnes extraordinaires qui partagent ta passion pour la randonnée !</p>
            
            <p style="margin-top: 25px;">À très bientôt sur les sentiers,<br>
            <strong>Anthony</strong><br>
            <span style="color: #888; font-size: 14px;">Fondateur de RandoMatch</span></p>
          </div>
          
          <div class="footer">
            <p><strong>RandoMatch</strong> • L'amour se trouve sur les sentiers 🏔️</p>
            <p style="margin-top: 15px;">Tu reçois cet email car tu t'es inscrit(e) sur <a href="https://randomatch.fr">randomatch.fr</a></p>
            <p style="margin-top: 15px; font-size: 12px;">© 2025 RandoMatch. Tous droits réservés.</p>
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
