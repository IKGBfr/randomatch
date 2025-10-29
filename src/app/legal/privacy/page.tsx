'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Shield, Mail, Database, Eye, Lock, Trash2 } from 'lucide-react';
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

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubHeader = styled.h3`
  font-size: 1.25rem;
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

const List = styled.ul`
  list-style: disc;
  padding-left: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NestedList = styled.ul`
  list-style: circle;
  padding-left: 24px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
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

const RightCard = styled.div<{ borderColor: string }>`
  border-left: 4px solid ${props => props.borderColor};
  padding-left: 16px;
  margin-bottom: 16px;
`;

const RightTitle = styled.p`
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightDescription = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0;
`;

const InfoBox = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: 8px;
`;

const InfoTitle = styled.p`
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #374151;
  margin: 0 0 4px 0;
  
  &:last-child {
    margin: 0;
  }
`;

const SmallText = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 8px 0 0 0;
`;

const AddressBox = styled.div`
  margin-top: 12px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 8px;
`;

const AddressLine = styled.p`
  font-size: 1rem;
  color: #374151;
  margin: 0;
  
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }
`;

const StyledLink = styled.a`
  color: #FE3C72;
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

export default function PrivacyPage() {
  return (
    <ContentLayout>
      <Header>
        <Shield style={{ width: 40, height: 40, color: '#FE3C72' }} />
        <Title>Politique de Confidentialité</Title>
      </Header>
      
      <Intro>
        RandoMatch s'engage à protéger votre vie privée et vos données personnelles conformément au RGPD et à la loi Informatique et Libertés.
      </Intro>

      {/* Responsable */}
      <Section>
        <SectionHeader>
          <Mail style={{ width: 24, height: 24 }} />
          1. Responsable du traitement
        </SectionHeader>
        <Paragraph>RandoMatch - Projet en phase de pré-lancement</Paragraph>
        <Paragraph>
          Contact DPO :{' '}
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
            contact[at]randomatch[dot]fr
          </span>
        </Paragraph>
      </Section>

      {/* Données collectées */}
      <Section>
        <SectionHeader>
          <Database style={{ width: 24, height: 24 }} />
          2. Données collectées
        </SectionHeader>
        
        <SubHeader>Formulaire de pré-inscription (/beta)</SubHeader>
        <List>
          <ListItem>Prénom</ListItem>
          <ListItem>Adresse email</ListItem>
          <ListItem>Département</ListItem>
          <ListItem>Genre</ListItem>
          <ListItem>Date de naissance (calcul de l'âge)</ListItem>
        </List>

        <SubHeader>Données techniques</SubHeader>
        <List>
          <ListItem>Adresse IP</ListItem>
          <ListItem>Données de navigation (Google Analytics)</ListItem>
          <ListItem>Cookies (Google Analytics)</ListItem>
        </List>
      </Section>

      {/* Finalités */}
      <Section>
        <SectionHeader>3. Finalités du traitement</SectionHeader>
        <List>
          <ListItem>Gestion des pré-inscriptions à la bêta</ListItem>
          <ListItem>Communication sur le lancement de l'application</ListItem>
          <ListItem>Analyses statistiques du trafic (Google Analytics)</ListItem>
          <ListItem>Amélioration de nos services</ListItem>
        </List>
      </Section>

      {/* Base légale */}
      <Section>
        <SectionHeader>4. Base légale</SectionHeader>
        <List>
          <ListItem><strong>Consentement</strong> pour l'inscription à la bêta</ListItem>
          <ListItem><strong>Intérêt légitime</strong> pour les analyses statistiques</ListItem>
        </List>
      </Section>

      {/* Destinataires */}
      <Section>
        <SectionHeader>5. Destinataires des données</SectionHeader>
        <Paragraph>Vos données sont accessibles uniquement par :</Paragraph>
        <List>
          <ListItem>L'équipe RandoMatch (accès strictement limité)</ListItem>
          <ListItem>
            Nos sous-traitants :
            <NestedList>
              <ListItem>Supabase (base de données - hébergement UE/US)</ListItem>
              <ListItem>Brevo (envoi emails - hébergement UE)</ListItem>
              <ListItem>Google Analytics (analyses - hébergement US)</ListItem>
              <ListItem>Vercel (hébergement site - US)</ListItem>
            </NestedList>
          </ListItem>
        </List>
      </Section>

      {/* Durée conservation */}
      <Section>
        <SectionHeader>6. Durée de conservation</SectionHeader>
        <List>
          <ListItem><strong>Pré-inscriptions :</strong> jusqu'au lancement + 3 mois</ListItem>
          <ListItem><strong>Analytics :</strong> 26 mois (Google Analytics)</ListItem>
          <ListItem><strong>Logs techniques :</strong> 12 mois</ListItem>
        </List>
      </Section>

      {/* Vos droits */}
      <Section>
        <SectionHeader>
          <Lock style={{ width: 24, height: 24 }} />
          7. Vos droits RGPD
        </SectionHeader>
        <Paragraph style={{ marginBottom: '16px' }}>
          Conformément au RGPD, vous disposez des droits suivants :
        </Paragraph>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <RightCard borderColor="#10B981">
            <RightTitle>
              <Eye style={{ width: 16, height: 16 }} />
              Droit d'accès
            </RightTitle>
            <RightDescription>Obtenir une copie de vos données</RightDescription>
          </RightCard>
          
          <RightCard borderColor="#3B82F6">
            <RightTitle>Droit de rectification</RightTitle>
            <RightDescription>Corriger vos données inexactes</RightDescription>
          </RightCard>
          
          <RightCard borderColor="#EF4444">
            <RightTitle>
              <Trash2 style={{ width: 16, height: 16 }} />
              Droit à l'effacement
            </RightTitle>
            <RightDescription>Supprimer vos données (« droit à l'oubli »)</RightDescription>
          </RightCard>
          
          <RightCard borderColor="#F59E0B">
            <RightTitle>Droit d'opposition</RightTitle>
            <RightDescription>S'opposer au traitement de vos données</RightDescription>
          </RightCard>
          
          <RightCard borderColor="#8B5CF6">
            <RightTitle>Droit à la portabilité</RightTitle>
            <RightDescription>Récupérer vos données dans un format lisible</RightDescription>
          </RightCard>
          
          <RightCard borderColor="#6B7280">
            <RightTitle>Droit de limitation</RightTitle>
            <RightDescription>Limiter le traitement de vos données</RightDescription>
          </RightCard>
        </div>

        <InfoBox>
          <InfoTitle>Comment exercer vos droits ?</InfoTitle>
          <InfoText>
            Envoyez un email à :{' '}
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}>
              contact[at]randomatch[dot]fr
            </span>
          </InfoText>
          <SmallText>Réponse sous 1 mois maximum</SmallText>
        </InfoBox>
      </Section>

      {/* Sécurité */}
      <Section>
        <SectionHeader>8. Sécurité des données</SectionHeader>
        <Paragraph>Mesures de sécurité mises en place :</Paragraph>
        <List>
          <ListItem>Chiffrement HTTPS (SSL/TLS)</ListItem>
          <ListItem>Bases de données sécurisées (Supabase)</ListItem>
          <ListItem>Accès restreint aux données</ListItem>
          <ListItem>Sauvegardes régulières</ListItem>
          <ListItem>Mises à jour de sécurité</ListItem>
        </List>
      </Section>

      {/* Transferts hors UE */}
      <Section>
        <SectionHeader>9. Transferts hors UE</SectionHeader>
        <Paragraph>
          Certains sous-traitants sont situés hors de l'UE (USA). Ces transferts sont encadrés par :
        </Paragraph>
        <List>
          <ListItem>Clauses contractuelles types de la Commission européenne</ListItem>
          <ListItem>Garanties appropriées (Privacy Shield successeur)</ListItem>
        </List>
      </Section>

      {/* Réclamation CNIL */}
      <Section>
        <SectionHeader>10. Réclamation</SectionHeader>
        <Paragraph>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL :
        </Paragraph>
        <AddressBox>
          <AddressLine><strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></AddressLine>
          <AddressLine>3 Place de Fontenoy</AddressLine>
          <AddressLine>TSA 80715</AddressLine>
          <AddressLine>75334 Paris Cedex 07</AddressLine>
          <AddressLine>
            Site :{' '}
            <StyledLink href="https://www.cnil.fr" target="_blank" rel="noopener">
              cnil.fr
            </StyledLink>
          </AddressLine>
        </AddressBox>
      </Section>

      {/* Modifications */}
      <Section>
        <SectionHeader>11. Modifications</SectionHeader>
        <Paragraph>
          Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une mise à jour de la date.
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
