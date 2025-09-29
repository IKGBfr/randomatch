'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a3a52 0%, #2d5f7f 25%, #4a8fb9 50%, #6ba6cd 75%, #8fc4e0 100%);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  color: white;
  padding: 40px 20px;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(20, 30, 48, 0.85);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 20px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
  }
  
  h2 {
    font-size: 1.5rem;
    margin: 30px 0 15px;
    color: #6ba6cd;
  }
  
  p, li {
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  ul {
    padding-left: 20px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    
    h1 {
      font-size: 2rem;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #6ba6cd;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default function LegalPage() {
  return (
    <Container>
      <Content>
        <BackLink href="/">← Retour</BackLink>
        
        <h1>Mentions Légales & RGPD</h1>
        
        <h2>1. Éditeur du site</h2>
        <p>
          RandoMatch<br/>
          Site de rencontres pour randonneurs<br/>

          Email : <span style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>rf.hctamodnar@tcatnoc</span>
        </p>
        
        <h2>2. Hébergement</h2>
        <p>
          Vercel Inc.<br/>
          340 S Lemon Ave #4133<br/>
          Walnut, CA 91789<br/>
          United States
        </p>
        
        <h2>3. Protection des données (RGPD)</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), nous vous informons que :
        </p>
        <ul>
          <li><strong>Base légale :</strong> Consentement (inscription volontaire à la beta)</li>
          <li><strong>Finalité :</strong> Création de compte beta et envoi d&apos;informations sur le lancement de RandoMatch</li>
          <li><strong>Données collectées :</strong> prénom, email, département, genre</li>
          <li><strong>Stockage :</strong> Brevo (SendinBlue) - conforme RGPD, serveurs en UE</li>
          <li><strong>Partage :</strong> Aucune donnée n&apos;est partagée avec des tiers sans votre consentement</li>
          <li><strong>Transfert hors UE :</strong> Aucun transfert de données hors Union Européenne sans garanties appropriées</li>
        </ul>
        
        <h2>4. Cookies</h2>
        <p>
          Notre site utilise uniquement des cookies techniques nécessaires au fonctionnement du site. 
          Aucun cookie publicitaire, de tracking ou analytique n&apos;est utilisé.
        </p>
        
        <h2>5. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification :</strong> Corriger vos informations</li>
          <li><strong>Droit à l&apos;effacement :</strong> Supprimer votre compte et vos données</li>
          <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
          <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
          <li><strong>Droit de retirer votre consentement :</strong> À tout moment via le lien de désinscription</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à : contact@randomatch.fr
        </p>
        <p>
          <strong>Réclamation :</strong> Vous pouvez introduire une réclamation auprès de la CNIL 
          (Commission Nationale de l&apos;Informatique et des Libertés) - www.cnil.fr
        </p>
        
        <h2>6. Durée de conservation</h2>
        <p>
          <strong>Phase beta :</strong> Vos données sont conservées jusqu&apos;au lancement officiel de l&apos;application<br/>
          <strong>Après lancement :</strong> Conservation pendant la durée de votre inscription active<br/>
          <strong>Suppression :</strong> 3 ans après votre dernière connexion ou immédiatement sur demande
        </p>
        
        <h2>7. Sécurité</h2>
        <p>
          Nous mettons en œuvre les mesures de sécurité suivantes :
        </p>
        <ul>
          <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
          <li>Stockage sécurisé via Brevo (certifié ISO 27001)</li>
          <li>Accès limité aux données personnelles</li>
          <li>Pas de stockage de données sensibles sur nos serveurs</li>
        </ul>
        
        <h2>8. Contact DPO</h2>
        <p>
          Pour toute question concernant vos données personnelles ou l&apos;exercice de vos droits :<br/>
          Email : contact@randomatch.fr<br/>
          Délai de réponse : 30 jours maximum
        </p>
        
        <h2>9. Modification de la politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité. 
          Toute modification sera notifiée par email aux utilisateurs inscrits.
        </p>
        
        <p style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.8 }}>
          Dernière mise à jour : Septembre 2024<br/>
          Version : 1.0 (Beta)
        </p>
      </Content>
    </Container>
  );
}