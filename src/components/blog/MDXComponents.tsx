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

// Composant React pur pour forcer le style - ultra simple
export const CTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        background: 'linear-gradient(135deg, #FE3C72, #FF5485)',
        color: 'white',
        padding: '0.75rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 8px rgba(254, 60, 114, 0.25)',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      }}
    >
      {children}
    </a>
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
