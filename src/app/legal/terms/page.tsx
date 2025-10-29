'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { FileText, AlertTriangle } from 'lucide-react';
import ContentLayout from '@/components/shared/ContentLayout';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AlertBox = styled.div`
  background: #EFF6FF;
  border-left: 4px solid #3B82F6;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 0 4px 4px 0;
`;

const AlertText = styled.p`
  font-size: 0.875rem;
  color: #1E40AF;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  
  strong {
    font-weight: 600;
  }
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
`;

const SubTitle = styled.p`
  font-weight: 600;
  color: #1a1a1a;
  margin: 16px 0 8px 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.75;
  margin: 0 0 12px 0;
  
  strong {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  
  strong {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const InternalLink = styled(Link)`
  color: #FE3C72;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #E5326A;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #E5E7EB;
  padding-top: 24px;
  margin-top: 32px;
`;

const UpdateDate = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0;
  
  strong {
    font-weight: 600;
  }
`;

export default function TermsPage() {
  return (
    <ContentLayout>
      <Header>
        <FileText style={{ width: 40, height: 40, color: '#FE3C72' }} />
        <Title>Conditions Générales d'Utilisation</Title>
      </Header>
      
      <AlertBox>
        <AlertText>
          <AlertTriangle style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong>Version Pré-lancement :</strong> Ces CGU s'appliquent au site web et au formulaire de pré-inscription. Des CGU spécifiques seront applicables lors du lancement de l'application.
          </span>
        </AlertText>
      </AlertBox>

      {/* Préambule */}
      <Section>
        <SectionTitle>Préambule</SectionTitle>
        <Paragraph>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web <strong>www.randomatch.fr</strong> et de son formulaire de pré-inscription.
        </Paragraph>
        <Paragraph>
          En accédant au site et/ou en vous inscrivant à la bêta, vous acceptez sans réserve les présentes CGU.
        </Paragraph>
      </Section>

      {/* Définitions */}
      <Section>
        <SectionTitle>1. Définitions</SectionTitle>
        <List>
          <ListItem><strong>« Site »</strong> : Le site web www.randomatch.fr</ListItem>
          <ListItem><strong>« Utilisateur »</strong> : Toute personne accédant au Site</ListItem>
          <ListItem><strong>« Pré-inscription »</strong> : Formulaire d'inscription à la bêta de l'application</ListItem>
          <ListItem><strong>« Éditeur »</strong> : RandoMatch, responsable du Site</ListItem>
        </List>
      </Section>

      {/* Accès au site */}
      <Section>
        <SectionTitle>2. Accès au Site</SectionTitle>
        <Paragraph>
          Le Site est accessible gratuitement à toute personne disposant d'un accès à Internet. Les frais de connexion sont à la charge de l'Utilisateur.
        </Paragraph>
        <Paragraph>
          L'Éditeur se réserve le droit de suspendre, modifier ou interrompre l'accès au Site à tout moment sans préavis.
        </Paragraph>
      </Section>

      {/* Pré-inscription */}
      <Section>
        <SectionTitle>3. Pré-inscription à la bêta</SectionTitle>
        
        <SubTitle>3.1 Conditions</SubTitle>
        <List>
          <ListItem>Avoir au minimum 18 ans</ListItem>
          <ListItem>Résider en France</ListItem>
          <ListItem>Fournir des informations exactes et à jour</ListItem>
          <ListItem>Accepter la Politique de Confidentialité</ListItem>
        </List>

        <SubTitle>3.2 Validation</SubTitle>
        <Paragraph>
          La pré-inscription ne garantit pas l'accès à la bêta. Les Utilisateurs seront contactés par email selon la disponibilité et les critères de sélection.
        </Paragraph>

        <SubTitle>3.3 Désinscription</SubTitle>
        <Paragraph>
          Vous pouvez vous désinscrire à tout moment en envoyant un email à :{' '}
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
            contact[at]randomatch[dot]fr
          </span>
        </Paragraph>
      </Section>

      {/* Obligations */}
      <Section>
        <SectionTitle>4. Obligations de l'Utilisateur</SectionTitle>
        <Paragraph>L'Utilisateur s'engage à :</Paragraph>
        <List>
          <ListItem>Ne pas utiliser le Site à des fins illégales</ListItem>
          <ListItem>Fournir des informations exactes lors de l'inscription</ListItem>
          <ListItem>Ne pas tenter d'accéder à des zones protégées du Site</ListItem>
          <ListItem>Ne pas perturber le fonctionnement du Site</ListItem>
          <ListItem>Respecter les droits de propriété intellectuelle</ListItem>
        </List>
      </Section>

      {/* Propriété intellectuelle */}
      <Section>
        <SectionTitle>5. Propriété intellectuelle</SectionTitle>
        <Paragraph>
          Le Site et tous ses éléments (textes, images, logos, design, structure) sont protégés par le droit d'auteur et sont la propriété exclusive de RandoMatch.
        </Paragraph>
        <Paragraph>
          Toute reproduction, représentation, modification ou exploitation sans autorisation est interdite et constitue une contrefaçon.
        </Paragraph>
      </Section>

      {/* Données personnelles */}
      <Section>
        <SectionTitle>6. Données personnelles</SectionTitle>
        <Paragraph>
          Le traitement de vos données personnelles est régi par notre{' '}
          <InternalLink href="/legal/privacy">Politique de Confidentialité</InternalLink>
          {' '}conforme au RGPD.
        </Paragraph>
      </Section>

      {/* Responsabilité */}
      <Section>
        <SectionTitle>7. Limitation de responsabilité</SectionTitle>
        
        <SubTitle>7.1 Disponibilité</SubTitle>
        <Paragraph>
          L'Éditeur ne garantit pas la disponibilité continue du Site et ne pourra être tenu responsable en cas d'interruption.
        </Paragraph>

        <SubTitle>7.2 Contenu</SubTitle>
        <Paragraph>
          L'Éditeur s'efforce de fournir des informations exactes mais ne peut garantir l'exhaustivité ou l'exactitude absolue du contenu.
        </Paragraph>

        <SubTitle>7.3 Liens externes</SubTitle>
        <Paragraph>
          Le Site peut contenir des liens vers des sites tiers. L'Éditeur n'est pas responsable du contenu de ces sites.
        </Paragraph>
      </Section>

      {/* Cookies */}
      <Section>
        <SectionTitle>8. Cookies</SectionTitle>
        <Paragraph>
          Le Site utilise des cookies. Pour plus d'informations, consultez notre{' '}
          <InternalLink href="/legal/cookies">Politique de Cookies</InternalLink>.
        </Paragraph>
      </Section>

      {/* Modifications */}
      <Section>
        <SectionTitle>9. Modifications des CGU</SectionTitle>
        <Paragraph>
          L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur publication sur le Site.
        </Paragraph>
        <Paragraph>
          Il est conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
        </Paragraph>
      </Section>

      {/* Droit applicable */}
      <Section>
        <SectionTitle>10. Droit applicable et juridiction</SectionTitle>
        <Paragraph>
          Les présentes CGU sont régies par le droit français.
        </Paragraph>
        <Paragraph>
          En cas de litige, et après échec d'une tentative de résolution amiable, les tribunaux français seront seuls compétents.
        </Paragraph>
      </Section>

      {/* Contact */}
      <Section>
        <SectionTitle>11. Contact</SectionTitle>
        <Paragraph>
          Pour toute question relative aux présentes CGU :
        </Paragraph>
        <Paragraph>
          Email :{' '}
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
            contact[at]randomatch[dot]fr
          </span>
        </Paragraph>
      </Section>

      {/* Dernière mise à jour */}
      <Divider>
        <UpdateDate>
          <strong>Dernière mise à jour :</strong> 29 octobre 2025
        </UpdateDate>
      </Divider>
    </ContentLayout>
  );
}
