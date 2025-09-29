'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a3a52 0%, #2d5f7f 25%, #4a8fb9 50%, #6ba6cd 75%, #8fc4e0 100%);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  color: white;
  padding: 20px;
  text-align: center;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.95;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BetaButton = styled(Link)`
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, #4a7044, #6b8e23);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 6px 30px rgba(75, 112, 68, 0.4);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 40px rgba(75, 112, 68, 0.6);
  }
`;

const ComingSoon = styled.p`
  position: absolute;
  bottom: 30px;
  font-size: 0.9rem;
  opacity: 0.7;
`;

export default function HomePage() {
  return (
    <Container>
      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🥾 💕</div>
      <Logo>RandoMatch</Logo>
      <Tagline>L'amour commence sur les sentiers</Tagline>
      <BetaButton href="/beta">
        Accès Beta
      </BetaButton>
      <ComingSoon>Lancement officiel bientôt</ComingSoon>
    </Container>
  );
}