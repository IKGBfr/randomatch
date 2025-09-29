// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

// Initialize Brevo API
const apiInstance = new brevo.ContactsApi();
apiInstance.setApiKey(
  brevo.ContactsApiApiKeys.apiKey, 
  process.env.BREVO_API_KEY as string
);

const emailApiInstance = new brevo.TransactionalEmailsApi();
emailApiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

export async function POST(req: NextRequest) {
  try {
    const { firstName, email, department, gender } = await req.json();

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
    const contact = new brevo.CreateContact();
    contact.email = email;
    contact.attributes = {
      PRENOM: firstName,
      DEPARTEMENT: department,
      GENRE: gender
    };
    contact.listIds = [parseInt(process.env.BREVO_LIST_ID as string)];
    contact.updateEnabled = true;

    await apiInstance.createContact(contact);

    // Send welcome email
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME,
      email: process.env.BREVO_SENDER_EMAIL
    };
    sendSmtpEmail.to = [{
      email: email,
      name: firstName
    }];
    sendSmtpEmail.subject = `Bienvenue sur RandoMatch ${firstName} ! 🥾`;
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
          .content h3 {
            color: #4a7044;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          .content ul {
            margin: 15px 0;
            padding-left: 20px;
          }
          .content li {
            margin: 10px 0;
          }
          .promo-box {
            background: #f0f7f0;
            border-left: 4px solid #4a7044;
            padding: 20px;
            margin: 25px 0;
            border-radius: 5px;
          }
          .promo-box strong {
            color: #4a7044;
          }
          .button-container {
            text-align: center;
            margin: 35px 0;
          }
          .button { 
            display: inline-block; 
            padding: 14px 35px; 
            background: linear-gradient(135deg, #4a7044, #6b8e23); 
            color: white; 
            text-decoration: none; 
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
          }
          .footer { 
            background: #f8f9fa;
            padding: 25px;
            text-align: center; 
            color: #6c757d; 
            font-size: 13px;
            border-top: 1px solid #e9ecef;
          }
          .footer p {
            margin: 5px 0;
          }
          .social {
            margin: 20px 0;
          }
          .social a {
            color: #4a7044;
            text-decoration: none;
            margin: 0 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🥾 Bienvenue sur RandoMatch !</h1>
          </div>
          <div class="content">
            <h2>Salut ${firstName} ! 👋</h2>
            
            <p>Félicitations ! Tu viens de rejoindre la plus grande communauté de randonneurs célibataires en France.</p>
            
            <div class="promo-box">
              <strong>🎁 Offre spéciale 100 premiers inscrits :</strong><br>
              Tu bénéficies de <strong>3 MOIS GRATUITS</strong> sur notre abonnement premium !<br>
              Code promo automatiquement appliqué à ton compte.
            </div>
            
            <h3>✨ Prochaines étapes :</h3>
            <ul>
              <li><strong>Complète ton profil</strong> : Ajoute tes photos et décris tes randonnées préférées</li>
              <li><strong>Explore les profils</strong> : Découvre des randonneurs dans le ${department}</li>
              <li><strong>Rejoins un groupe</strong> : Des sorties sont organisées chaque week-end</li>
              <li><strong>Lance des conversations</strong> : Le premier message est toujours gratuit</li>
            </ul>
            
            <div class="button-container">
              <a href="https://randomatch.fr/complete-profile?token=${Buffer.from(email).toString('base64')}" class="button">
                Compléter mon profil →
              </a>
            </div>
            
            <p><strong>Quelques conseils pour bien démarrer :</strong></p>
            <ul>
              <li>📸 Les profils avec photo reçoivent 10x plus de matchs</li>
              <li>🗺️ Mentionne tes sentiers favoris dans ta bio</li>
              <li>🎒 Indique ton niveau (débutant, intermédiaire, expert)</li>
              <li>💬 Sois authentique dans tes conversations</li>
            </ul>
            
            <p>Des questions ? Réponds simplement à cet email, notre équipe est là pour t'aider !</p>
            
            <p>À très vite sur les sentiers ! 🏔️</p>
            
            <p><strong>L'équipe RandoMatch</strong></p>
          </div>
          
          <div class="footer">
            <div class="social">
              <a href="https://facebook.com/randomatch">Facebook</a>
              <a href="https://instagram.com/randomatch">Instagram</a>
              <a href="https://twitter.com/randomatch">Twitter</a>
            </div>
            <p>© 2024 RandoMatch - Tous droits réservés</p>
            <p>Tu reçois cet email car tu t'es inscrit sur randomatch.fr avec l'adresse ${email}</p>
            <p><a href="https://randomatch.fr/unsubscribe?email=${Buffer.from(email).toString('base64')}" style="color: #6c757d;">Se désinscrire</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    await emailApiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie ! Vérifie ta boîte mail.' 
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Brevo API Error:', error);
    
    // Check if email already exists
    if (
      (error && typeof error === 'object' && 'response' in error && 
       error.response && typeof error.response === 'object' && 'status' in error.response &&
       error.response.status === 409) ||
      (error && typeof error === 'object' && 'status' in error && error.status === 409)
    ) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription. Réessaye plus tard.' },
      { status: 500 }
    );
  }
}
