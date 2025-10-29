'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Mountain, Users, Heart, Target } from 'lucide-react';
import ContentLayout from '@/components/shared/ContentLayout';

const Header = styled.div`
  text-center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666666;
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px 0;
`;

const Paragraph = styled.p`
  font-size: 1.0625rem;
  color: #374151;
  line-height: 1.75;
  margin: 0;
`;

const InfoBox = styled.div`
  background: #EFF6FF;
  border-left: 4px solid #3B82F6;
  padding: 24px;
  border-radius: 0 8px 8px 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #F9FAFB;
  padding: 24px;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const CheckIcon = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #FE3C72;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ListText = styled.span`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
`;

const ValueItem = styled.div`
  border-left: 4px solid #FE3C72;
  padding-left: 16px;
`;

const ValueTitle = styled.h3`
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`;

const ValueText = styled.p`
  font-size: 1rem;
  color: #374151;
  margin: 0;
`;

const HighlightBox = styled.div`
  background: #FFF5F7;
  border: 1px solid #FFCDD8;
  border-radius: 8px;
  padding: 24px;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #FE3C72, #FF5485);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.25);
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #E5326A, #FE3C72);
    box-shadow: 0 6px 16px rgba(254, 60, 114, 0.35);
    transform: translateY(-1px);
  }
`;

const ContactLink = styled(Link)`
  color: #FE3C72;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  
  &:hover {
    color: #E5326A;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #E5E7EB;
  padding-top: 32px;
  margin-top: 48px;
`;

export default function AboutPage() {
  return (
    <ContentLayout maxWidth="1024px">
      {/* Header */}
      <Header>
        <Title>À propos de RandoMatch</Title>
        <Subtitle>L'application de rencontres dédiée aux passionnés de randonnée</Subtitle>
      </Header>

      {/* Mission */}
      <Section>
        <SectionHeader>
          <Target style={{ width: 32, height: 32, color: '#FE3C72' }} />
          <SectionTitle>Notre mission</SectionTitle>
        </SectionHeader>
        <Paragraph>
          RandoMatch connecte des célibataires qui partagent une passion commune pour la randonnée et les activités outdoor. 
          Notre objectif est simple : faciliter les rencontres authentiques autour d'une activité saine et enrichissante.
        </Paragraph>
      </Section>

      {/* Le problème */}
      <Section>
        <SectionSubtitle>Le constat</SectionSubtitle>
        <InfoBox>
          <Paragraph>
            Les applications de rencontres généralistes ne permettent pas de filtrer efficacement par centres d'intérêt réels. 
            Pour les randonneurs, trouver un partenaire qui partage cette passion est difficile. RandoMatch résout ce problème 
            en créant une communauté dédiée aux amoureux de la montagne et des sentiers.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* Notre approche */}
      <Section>
        <SectionHeader>
          <Mountain style={{ width: 32, height: 32, color: '#FE3C72' }} />
          <SectionTitle>Notre approche</SectionTitle>
        </SectionHeader>
        <GridContainer>
          <Card>
            <CardTitle>
              <Users style={{ width: 20, height: 20, color: '#FE3C72' }} />
              Ciblage précis
            </CardTitle>
            <CardText>
              Tous les membres partagent la passion de la randonnée, ce qui facilite les échanges et augmente les affinités.
            </CardText>
          </Card>
          <Card>
            <CardTitle>
              <Heart style={{ width: 20, height: 20, color: '#FE3C72' }} />
              Rencontres authentiques
            </CardTitle>
            <CardText>
              Fini les profils génériques. Ici, chaque utilisateur peut afficher son niveau de randonnée et ses préférences.
            </CardText>
          </Card>
        </GridContainer>
      </Section>

      {/* Fonctionnalités clés */}
      <Section>
        <SectionSubtitle>Fonctionnalités principales</SectionSubtitle>
        <List>
          <ListItem>
            <CheckIcon>✓</CheckIcon>
            <ListText>Matching basé sur la localisation et les affinités outdoor</ListText>
          </ListItem>
          <ListItem>
            <CheckIcon>✓</CheckIcon>
            <ListText>Filtres par département, niveau de randonnée et distance</ListText>
          </ListItem>
          <ListItem>
            <CheckIcon>✓</CheckIcon>
            <ListText>Messagerie intégrée pour échanger avant de se rencontrer</ListText>
          </ListItem>
          <ListItem>
            <CheckIcon>✓</CheckIcon>
            <ListText>Profils détaillés avec photos et centres d'intérêt</ListText>
          </ListItem>
        </List>
      </Section>

      {/* Zone géographique */}
      <Section>
        <SectionSubtitle>Zone de couverture</SectionSubtitle>
        <Paragraph>
          RandoMatch est actuellement disponible en France métropolitaine. Le lancement se concentre sur les régions 
          avec une forte communauté de randonneurs, avant une expansion nationale.
        </Paragraph>
      </Section>

      {/* Statut actuel */}
      <Section>
        <HighlightBox>
          <SectionSubtitle>Phase de pré-lancement</SectionSubtitle>
          <Paragraph style={{ marginBottom: '16px' }}>
            RandoMatch est actuellement en développement final. Nous construisons une communauté de pré-inscrits 
            qui seront les premiers à accéder à l'application lors du lancement officiel.
          </Paragraph>
          <CTAButton href="/beta">
            Rejoindre la bêta
          </CTAButton>
        </HighlightBox>
      </Section>

      {/* Valeurs */}
      <Section>
        <SectionSubtitle>Nos valeurs</SectionSubtitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ValueItem>
            <ValueTitle>Authenticité</ValueTitle>
            <ValueText>Des profils réels, des passions communes, des rencontres sincères.</ValueText>
          </ValueItem>
          <ValueItem>
            <ValueTitle>Respect</ValueTitle>
            <ValueText>Un environnement sain et bienveillant pour tous les membres.</ValueText>
          </ValueItem>
          <ValueItem>
            <ValueTitle>Simplicité</ValueTitle>
            <ValueText>Une application intuitive, sans fonctionnalités superflues.</ValueText>
          </ValueItem>
        </div>
      </Section>

      {/* Contact */}
      <Divider>
        <SectionSubtitle>Nous contacter</SectionSubtitle>
        <Paragraph style={{ marginBottom: '16px' }}>
          Des questions sur le projet ? Une suggestion ? N'hésitez pas à nous écrire.
        </Paragraph>
        <ContactLink href="/contact">
          Formulaire de contact →
        </ContactLink>
      </Divider>
    </ContentLayout>
  );
}
