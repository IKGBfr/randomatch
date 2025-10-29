'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

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
  padding: 120px 40px 60px 40px;
  position: relative;
  overflow: hidden;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: 768px) {
    padding: 70px 20px 30px 20px;
    min-height: 100vh;
    justify-content: flex-start;
  }
`;

const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  text-align: right;
  
  @media (max-width: 1024px) {
    text-align: center;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 20px 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.75rem;
    margin-bottom: 16px;
  }
`;

const Tagline = styled.p`
  font-size: 1.75rem;
  font-weight: 400;
  color: #666666;
  margin: 0 0 40px 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 32px;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const BetaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 56px;
  background: linear-gradient(135deg, #FE3C72, #FF5485);
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 14px;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  box-shadow: 0 8px 24px rgba(254, 60, 114, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(254, 60, 114, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 18px 48px;
    font-size: 1.125rem;
  }
`;

const ComingSoon = styled.p`
  font-size: 1rem;
  color: #999999;
  font-weight: 500;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const MockupContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  flex-shrink: 0;
  z-index: 2;
  
  /* Effet de lévitation */
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @media (max-width: 1024px) {
    max-width: 520px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const MockupImage = styled(Image)`
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.15));
`;

/* Éléments décoratifs */
const DecorativeBlob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  z-index: 1;
  animation: blobFloat 20s ease-in-out infinite;
  
  @keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
`;

const Blob1 = styled(DecorativeBlob)`
  width: 300px;
  height: 300px;
  background: #FE3C72;
  top: 10%;
  left: -100px;
`;

const Blob2 = styled(DecorativeBlob)`
  width: 250px;
  height: 250px;
  background: #FF6B9D;
  bottom: 10%;
  right: -80px;
  animation-delay: -5s;
`;

export default function HomePage() {
  return (
    <Container>
      <Blob1 />
      <Blob2 />
      
      <HeroSection>
        <TextContent>
          <Title>RandoMatch</Title>
          <Tagline>L&apos;amour commence sur les sentiers</Tagline>
          <CTAGroup>
            <BetaButton href="/beta">
              Accès Beta
            </BetaButton>
            <ComingSoon>Lancement officiel bientôt</ComingSoon>
          </CTAGroup>
        </TextContent>
        
        <MockupContainer>
          <MockupImage
            src="/mockup1.png"
            alt="RandoMatch App Preview"
            width={400}
            height={815}
            priority
          />
        </MockupContainer>
      </HeroSection>
    </Container>
  );
}
