'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(165deg, #FFFFFF 0%, #FFF8FA 50%, #FFF0F5 100%);
  padding: 0;
  
  @media (min-width: 769px) {
    padding: 80px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContentCard = styled.div`
  background: #FFFFFF;
  padding: 32px 24px;
  min-height: 100vh;
  
  @media (min-width: 769px) {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    padding: 64px;
    min-height: auto;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  font-size: 0.9375rem;
  color: #666666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #000000;
  }
`;

interface ContentLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function ContentLayout({ children, maxWidth = '800px' }: ContentLayoutProps) {
  return (
    <PageContainer>
      <ContentWrapper style={{ maxWidth }}>
        <ContentCard>
          {children}
          <BackLink href="/">
            ← Retour à l'accueil
          </BackLink>
        </ContentCard>
      </ContentWrapper>
    </PageContainer>
  );
}
