'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, 
    #FFFFFF 0%, 
    #FFF8F9 20%, 
    #FFF0F3 40%, 
    #FFE5EB 60%, 
    #FFF0F3 80%, 
    #FFFFFF 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 25s ease infinite;
  padding: 40px 20px;
  text-align: center;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const LogoIcon = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #FE3C72, #FF6B9D);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px auto;
  box-shadow: 0 8px 24px rgba(254, 60, 114, 0.25);
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    border-radius: 24px;
    margin-bottom: 24px;
  }
`;

const HeartIcon = styled.div`
  font-size: 56px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
  margin: 0 0 48px 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }
`;

const BetaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 48px;
  background: #FE3C72;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.2s ease;
  letter-spacing: -0.01em;
  
  &:hover {
    background: #E5326A;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 16px 40px;
    font-size: 1rem;
  }
`;

const ComingSoon = styled.p`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: #999999;
  font-weight: 500;
  
  @media (max-width: 768px) {
    bottom: 30px;
    font-size: 0.8125rem;
  }
`;

export default function HomePage() {
  return (
    <Container>
      <ContentWrapper>
        <LogoIcon>
          <HeartIcon>🤍</HeartIcon>
        </LogoIcon>
        <Logo>RandoMatch</Logo>
        <Tagline>L&apos;amour commence sur les sentiers</Tagline>
        <BetaButton href="/beta">
          Accès Beta
        </BetaButton>
      </ContentWrapper>
      <ComingSoon>Lancement officiel bientôt</ComingSoon>
    </Container>
  );
}
