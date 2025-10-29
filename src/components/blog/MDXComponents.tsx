'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

export const CTABox = styled.div`
  background: linear-gradient(135deg, #FFF0F3 0%, #FFE0E8 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem auto;
  text-align: center;
  border: 1px solid #FFCCD9;
  max-width: 600px;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2rem auto;
  }
`;

export const CTATitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #D12A5E;
  margin: 0 0 1.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Styled component avec priorité CSS maximale
const StyledCTAButton = styled.a`
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: linear-gradient(135deg, #FE3C72, #FF5485) !important;
  color: #FFFFFF !important;
  padding: 1rem 2.5rem !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.3) !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
  line-height: 1 !important;
  min-height: 48px !important;
  cursor: pointer !important;
  
  /* Force la couleur blanche sur TOUS les enfants */
  & * {
    color: #FFFFFF !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1 !important;
  }
  
  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(254, 60, 114, 0.4) !important;
    color: #FFFFFF !important;
    
    & * {
      color: #FFFFFF !important;
    }
  }
  
  &:active {
    transform: translateY(0) !important;
  }
`;

export const CTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <StyledCTAButton href={href}>
      {children}
    </StyledCTAButton>
  );
};

export const CTASubtext = styled.p`
  font-size: 0.875rem;
  color: #D12A5E;
  margin: 1rem 0 0 0;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
