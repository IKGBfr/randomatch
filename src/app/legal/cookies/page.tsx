'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Cookie, BarChart3, Settings } from 'lucide-react';
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

const Intro = styled.p`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.75;
  margin-bottom: 32px;
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

const SubTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 16px 0 12px 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.75;
  margin: 0 0 12px 0;
`;

const CookieCard = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const DetailBlock = styled.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.p`
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`;

const DetailText = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  margin: 0;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 24px;
  margin: 4px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
`;

const CodeBlock = styled.code`
  background: #F3F4F6;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
`;

const InfoBox = styled.div<{ color?: string }>`
  background: ${props => props.color === 'green' ? '#F0FDF4' : '#FEF3C7'};
  border-left: 4px solid ${props => props.color === 'green' ? '#10B981' : '#F59E0B'};
  padding: 12px;
  border-radius: 0 4px 4px 0;
  margin-top: 12px;
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: ${props => props.color === 'green' ? '#065F46' : '#92400E'};
  margin: 0;
`;

const LinksGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const ExternalLink = styled.a`
  color: #FE3C72;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #E5326A;
  }
  
  &::before {
    content: '→ ';
  }
`;

const InternalLink = styled(Link)`
  color: #FE3C72;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #E5326A;
  }
  
  &::before {
    content: '→ ';
  }
`;

const WarningBox = styled.div`
  background: #FEF3C7;
  border-left: 4px solid #F59E0B;
  padding: 16px;
  border-radius: 0 4px 4px 0;
  margin-bottom: 16px;
`;

const WarningText = styled.p`
  font-size: 0.875rem;
  color: #92400E;
  margin: 0;
  
  strong {
    font-weight: 600;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #F3F4F6;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: background 0.2s ease;
  
  &:hover {
    background: #E5E7EB;
  }
`;

const ResourceBox = styled.div`
  background: #F9FAFB;
  border-radius: 8px;
  padding: 24px;
`;

const ResourceTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
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

export default function CookiesPage() {
  return (
    <ContentLayout>
      <Header>
        <Cookie style={{ width: 40, height: 40, color: '#FE3C72' }} />
        <Title>Politique de Cookies</Title>
      </Header>
      
      <Intro>
        Le site RandoMatch utilise des cookies pour améliorer votre expérience et analyser le trafic.
      </Intro>

      {/* Qu'est-ce qu'un cookie */}
      <Section>
        <SectionTitle>1. Qu'est-ce qu'un cookie ?</SectionTitle>
        <Paragraph>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
        </Paragraph>
        <Paragraph>
          Les cookies permettent de reconnaître votre navigateur et de mémoriser certaines informations.
        </Paragraph>
      </Section>

      {/* Cookies utilisés */}
      <Section>
        <SectionTitle>2. Cookies utilisés sur le site</SectionTitle>
        
        {/* Google Analytics */}
        <CookieCard>
          <CardHeader>
            <BarChart3 style={{ width: 20, height: 20, color: '#3B82F6' }} />
            <CardTitle>Google Analytics (GA4)</CardTitle>
          </CardHeader>
          
          <DetailBlock>
            <DetailLabel>Finalité :</DetailLabel>
            <DetailText>Mesure d'audience et analyses statistiques du trafic</DetailText>
          </DetailBlock>
          
          <DetailBlock>
            <DetailLabel>Données collectées :</DetailLabel>
            <List>
              <ListItem>Pages visitées</ListItem>
              <ListItem>Durée de visite</ListItem>
              <ListItem>Provenance géographique</ListItem>
              <ListItem>Type d'appareil et navigateur</ListItem>
              <ListItem>Interactions sur le site</ListItem>
            </List>
          </DetailBlock>
          
          <DetailBlock>
            <DetailLabel>Cookies déposés :</DetailLabel>
            <List>
              <ListItem><CodeBlock>_ga</CodeBlock> - Identifiant unique (2 ans)</ListItem>
              <ListItem><CodeBlock>_ga_*</CodeBlock> - État de la session (2 ans)</ListItem>
              <ListItem><CodeBlock>_gid</CodeBlock> - Identifiant session (24h)</ListItem>
            </List>
          </DetailBlock>
          
          <DetailBlock>
            <DetailLabel>Durée de conservation :</DetailLabel>
            <DetailText>26 mois maximum</DetailText>
          </DetailBlock>

          <DetailBlock>
            <DetailLabel>Base légale :</DetailLabel>
            <DetailText>Intérêt légitime (analyse de performance)</DetailText>
          </DetailBlock>
        </CookieCard>

        {/* Cookies essentiels */}
        <CookieCard>
          <CardHeader>
            <Settings style={{ width: 20, height: 20, color: '#10B981' }} />
            <CardTitle>Cookies essentiels</CardTitle>
          </CardHeader>
          
          <DetailBlock>
            <DetailLabel>Finalité :</DetailLabel>
            <DetailText>Fonctionnement technique du site</DetailText>
          </DetailBlock>
          
          <DetailBlock>
            <DetailLabel>Exemples :</DetailLabel>
            <List>
              <ListItem>Gestion de session</ListItem>
              <ListItem>Préférences de langue</ListItem>
              <ListItem>Consentement aux cookies</ListItem>
            </List>
          </DetailBlock>
          
          <InfoBox color="green">
            <InfoText color="green">
              ℹ️ Ces cookies ne nécessitent pas de consentement car ils sont strictement nécessaires au fonctionnement du site.
            </InfoText>
          </InfoBox>
        </CookieCard>
      </Section>

      {/* Gestion des cookies */}
      <Section>
        <SectionTitle>3. Gérer vos cookies</SectionTitle>
        
        <SubTitle>Via votre navigateur</SubTitle>
        <Paragraph>
          Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies :
        </Paragraph>
        
        <LinksGrid>
          <ExternalLink 
            href="https://support.google.com/chrome/answer/95647" 
            target="_blank" 
            rel="noopener"
          >
            Google Chrome
          </ExternalLink>
          <ExternalLink 
            href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" 
            target="_blank" 
            rel="noopener"
          >
            Mozilla Firefox
          </ExternalLink>
          <ExternalLink 
            href="https://support.apple.com/fr-fr/HT201265" 
            target="_blank" 
            rel="noopener"
          >
            Safari (macOS/iOS)
          </ExternalLink>
          <ExternalLink 
            href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
            target="_blank" 
            rel="noopener"
          >
            Microsoft Edge
          </ExternalLink>
        </LinksGrid>

        <WarningBox>
          <WarningText>
            ⚠️ <strong>Attention :</strong> Le blocage de certains cookies peut affecter le fonctionnement du site.
          </WarningText>
        </WarningBox>

        <SubTitle>Désactiver Google Analytics</SubTitle>
        <Paragraph>
          Vous pouvez installer le module complémentaire de navigateur pour la désactivation de Google Analytics :
        </Paragraph>
        <Button 
          href="https://tools.google.com/dlpage/gaoptout" 
          target="_blank" 
          rel="noopener"
        >
          Télécharger le module
        </Button>
      </Section>

      {/* Consentement */}
      <Section>
        <SectionTitle>4. Votre consentement</SectionTitle>
        <Paragraph>
          Lors de votre première visite, une bannière d'information s'affiche pour vous informer de l'utilisation des cookies.
        </Paragraph>
        <Paragraph>
          En poursuivant votre navigation, vous acceptez l'utilisation des cookies d'analyse (Google Analytics).
        </Paragraph>
      </Section>

      {/* Modifications */}
      <Section>
        <SectionTitle>5. Modifications</SectionTitle>
        <Paragraph>
          Cette politique peut être modifiée à tout moment. Les modifications prendront effet dès leur publication.
        </Paragraph>
      </Section>

      {/* Contact */}
      <Section>
        <SectionTitle>6. Contact</SectionTitle>
        <Paragraph>
          Pour toute question sur les cookies :
        </Paragraph>
        <Paragraph>
          Email :{' '}
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
            contact[at]randomatch[dot]fr
          </span>
        </Paragraph>
      </Section>

      {/* Liens utiles */}
      <Section>
        <ResourceBox>
          <ResourceTitle>Liens utiles</ResourceTitle>
          <LinksGrid>
            <ExternalLink 
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" 
              target="_blank" 
              rel="noopener"
            >
              CNIL : Comprendre les cookies
            </ExternalLink>
            <InternalLink href="/legal/privacy">
              Politique de Confidentialité
            </InternalLink>
            <InternalLink href="/legal/terms">
              Conditions Générales d'Utilisation
            </InternalLink>
          </LinksGrid>
        </ResourceBox>
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
