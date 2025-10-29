'use client';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Heart, Facebook, Instagram } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: #1A1A1A;
  color: #D1D5DB;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 16px;
  
  @media (min-width: 640px) {
    padding: 48px 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 48px 32px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MobileNavigationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    display: contents;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 767px) {
    grid-column: 1 / -1;
  }
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  
  &:hover .icon {
    box-shadow: 0 6px 16px rgba(254, 60, 114, 0.35);
  }
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FE3C72, #FF6B9D);
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.25);
  transition: all 0.2s ease;
  font-size: 20px;
  line-height: 1;
`;

const BrandText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #FFFFFF;
`;

const BrandDescription = styled.p`
  font-size: 0.875rem;
  color: #9CA3AF;
  line-height: 1.5;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavTitle = styled.h3`
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: #D1D5DB;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC4899;
  }
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 767px) {
    grid-column: 1 / -1;
    align-items: center;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FE3C72, #FF5485);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #E5326A, #E5326A);
  }
`;

const FooterBottom = styled.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid #374151;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #9CA3AF;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: #9CA3AF;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC4899;
  }
`;

const MadeWithLove = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #9CA3AF;
`;

const HeartIcon = styled(Heart)`
  width: 16px;
  height: 16px;
  color: #EF4444;
  fill: #EF4444;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Brand */}
          <BrandSection>
            <BrandLink href="/">
              <LogoIcon className="icon">
                🤍
              </LogoIcon>
              <BrandText>RandoMatch</BrandText>
            </BrandLink>
            <BrandDescription>
              L'app de rencontres pour passionnés de randonnée. Trouve ton partenaire idéal pour explorer les sentiers.
            </BrandDescription>
          </BrandSection>

          {/* Navigation - 2 columns on mobile */}
          <MobileNavigationGrid>
            {/* Navigation */}
            <NavSection>
              <NavTitle>Navigation</NavTitle>
              <NavList>
                <li>
                  <NavLink href="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink href="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink href="/a-propos">À propos</NavLink>
                </li>
                <li>
                  <NavLink href="/contact">Contact</NavLink>
                </li>
              </NavList>
            </NavSection>

            {/* Legal */}
            <NavSection>
              <NavTitle>Légal</NavTitle>
              <NavList>
                <li>
                  <NavLink href="/legal/mentions">Mentions légales</NavLink>
                </li>
                <li>
                  <NavLink href="/legal/privacy">Confidentialité</NavLink>
                </li>
                <li>
                  <NavLink href="/legal/terms">CGU</NavLink>
                </li>
                <li>
                  <NavLink href="/legal/cookies">Cookies</NavLink>
                </li>
              </NavList>
            </NavSection>
          </MobileNavigationGrid>

          {/* CTA - Centered on mobile */}
          <CTASection>
            <NavTitle>Pré-lancement</NavTitle>
            <CTAButton href="/beta">
              <Heart style={{ width: 16, height: 16 }} />
              Rejoindre la bêta
            </CTAButton>
          </CTASection>
        </FooterGrid>

        {/* Bottom */}
        <FooterBottom>
          <Copyright>
            © {currentYear} RandoMatch. Tous droits réservés.
          </Copyright>
          
          {/* Social Links */}
          <SocialLinks>
            <SocialLink
              href="https://www.facebook.com/randomatch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook style={{ width: 20, height: 20 }} />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/randomatch.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram style={{ width: 20, height: 20 }} />
            </SocialLink>
          </SocialLinks>
          
          <MadeWithLove>
            <span>Fait avec</span>
            <HeartIcon />
            <span>pour les randonneurs</span>
          </MadeWithLove>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}
