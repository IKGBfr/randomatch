'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Mail } from 'lucide-react';
import ContentLayout from '@/components/shared/ContentLayout';

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 32px 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
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

const InfoBox = styled.div`
  background: #EFF6FF;
  border-left: 4px solid #3B82F6;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 0 4px 4px 0;
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #1E40AF;
  margin: 0;
  
  strong {
    font-weight: 600;
  }
`;

const ContactBox = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 8px;
`;

const ContactLabel = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const ContactEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
`;

const SmallText = styled.p`
  font-size: 0.75rem;
  color: #6B7280;
  margin: 8px 0 0 0;
`;

const AddressBlock = styled.div`
  padding-left: 16px;
  border-left: 2px solid #E5E7EB;
  margin-top: 8px;
`;

const StyledLink = styled.a`
  color: #FE3C72;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #E5326A;
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

export default function MentionsLegalesPage() {
  return (
    <ContentLayout>
      <Title>Mentions Légales</Title>
      
      {/* Éditeur */}
      <Section>
        <SectionTitle>1. Éditeur du site</SectionTitle>
        <InfoBox>
          <InfoText>
            <strong>⚠️ Site en phase de pré-lancement</strong><br />
            La structure juridique est actuellement en cours de création.
          </InfoText>
        </InfoBox>
        
        <Paragraph><strong>Nom du site :</strong> RandoMatch</Paragraph>
        <Paragraph>
          <strong>URL :</strong>{' '}
          <StyledLink href="https://www.randomatch.fr" target="_blank" rel="noopener">
            www.randomatch.fr
          </StyledLink>
        </Paragraph>
        <Paragraph><strong>Statut :</strong> Projet entrepreneurial en cours de création</Paragraph>
        
        <ContactBox>
          <ContactLabel>Contact :</ContactLabel>
          <ContactEmail>
            <Mail style={{ width: 16, height: 16 }} />
            <span>contact[at]randomatch[dot]fr</span>
          </ContactEmail>
          <SmallText>
            * Remplacer [at] par @ et [dot] par . (protection anti-spam)
          </SmallText>
          <SmallText>
            Les coordonnées complètes de l'éditeur sont disponibles sur simple demande à cette adresse, conformément à l'article 6-III de la LCEN.
          </SmallText>
        </ContactBox>
      </Section>

      {/* Directeur de publication */}
      <Section>
        <SectionTitle>2. Directeur de la publication</SectionTitle>
        <Paragraph>Le directeur de la publication est le responsable du projet RandoMatch.</Paragraph>
        <Paragraph>
          Coordonnées disponibles sur demande à :{' '}
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
            contact[at]randomatch[dot]fr
          </span>
        </Paragraph>
      </Section>

      {/* Hébergement */}
      <Section>
        <SectionTitle>3. Hébergement</SectionTitle>
        <Paragraph><strong>Hébergeur du site :</strong></Paragraph>
        <AddressBlock>
          <Paragraph>Vercel Inc.</Paragraph>
          <Paragraph>440 N Barranca Ave #4133</Paragraph>
          <Paragraph>Covina, CA 91723, États-Unis</Paragraph>
          <Paragraph>
            Site :{' '}
            <StyledLink href="https://vercel.com" target="_blank" rel="noopener">
              vercel.com
            </StyledLink>
          </Paragraph>
        </AddressBlock>
      </Section>

      {/* Propriété intellectuelle */}
      <Section>
        <SectionTitle>4. Propriété intellectuelle</SectionTitle>
        <Paragraph>
          L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété exclusive de RandoMatch, sauf mention contraire.
        </Paragraph>
        <Paragraph>
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord express de RandoMatch.
        </Paragraph>
      </Section>

      {/* Données personnelles */}
      <Section>
        <SectionTitle>5. Protection des données personnelles</SectionTitle>
        <Paragraph>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits sur vos données personnelles.
        </Paragraph>
        <Paragraph>
          Pour plus d'informations, consultez notre{' '}
          <InternalLink href="/legal/privacy">Politique de Confidentialité</InternalLink>.
        </Paragraph>
      </Section>

      {/* Cookies */}
      <Section>
        <SectionTitle>6. Cookies</SectionTitle>
        <Paragraph>
          Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.
        </Paragraph>
        <Paragraph>
          Pour en savoir plus, consultez notre{' '}
          <InternalLink href="/legal/cookies">Politique de Cookies</InternalLink>.
        </Paragraph>
      </Section>

      {/* Loi applicable */}
      <Section>
        <SectionTitle>7. Loi applicable</SectionTitle>
        <Paragraph>
          Les présentes mentions légales sont régies par la loi française. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
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
