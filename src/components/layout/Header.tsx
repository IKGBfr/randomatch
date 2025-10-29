'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  box-shadow: ${props => props.scrolled ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none'};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 64px;
  
  @media (min-width: 640px) {
    padding: 0 24px;
  }
  
  @media (min-width: 768px) {
    height: 80px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #FE3C72, #FF6B9D);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.25);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(254, 60, 114, 0.35);
  }
`;

const HeartIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const LogoText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  letter-spacing: -0.01em;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DesktopNav = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #333333;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FE3C72;
    transition: width 0.2s ease;
  }
  
  &:hover {
    color: #FE3C72;
    
    &::after {
      width: 100%;
    }
  }
  
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background: #FE3C72;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(254, 60, 114, 0.25);
  transition: all 0.2s ease;
  margin-left: 16px;
  
  &:hover {
    background: #E5326A;
    box-shadow: 0 4px 12px rgba(254, 60, 114, 0.35);
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #333333;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #F5F5F5;
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 9998;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuDrawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  background: #FFFFFF;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 1px solid #E5E5E5;
  min-height: 80px;
`;

const DrawerTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000000;
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #F5F5F5;
  border: none;
  border-radius: 50%;
  color: #333333;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #E5E5E5;
    transform: rotate(90deg);
  }
`;

const MobileMenuContent = styled.div`
  flex: 1;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 18px 20px;
  color: #333333;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #FE3C72;
    background: #FFF5F7;
    transform: translateX(4px);
  }
  
  &:active {
    transform: translateX(2px);
  }
`;

const MobileCTAContainer = styled.div`
  padding: 32px;
  border-top: 1px solid #E5E5E5;
  background: linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%);
`;

const MobileCTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px 24px;
  background: linear-gradient(135deg, #FE3C72, #FF5485);
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(254, 60, 114, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(254, 60, 114, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check scroll position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <HeaderContainer scrolled={mounted ? scrolled : false}>
        <Nav>
          {/* Logo */}
          <LogoLink href="/">
            <LogoIcon>
              <HeartIcon>🤍</HeartIcon>
            </LogoIcon>
            <LogoText>RandoMatch</LogoText>
          </LogoLink>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            
            <CTAButton href="/beta">
              Pré-inscription
            </CTAButton>
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X style={{ width: 24, height: 24 }} />
            ) : (
              <Menu style={{ width: 24, height: 24 }} />
            )}
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      {/* Mobile Menu Overlay - EN DEHORS du Header */}
      <MobileMenuOverlay 
        isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - EN DEHORS du Header */}
      <MobileMenuDrawer isOpen={mobileMenuOpen}>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <CloseButton
            type="button"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X style={{ width: 24, height: 24 }} />
          </CloseButton>
        </DrawerHeader>
        
        <MobileMenuContent>
          {navigation.map((item) => (
            <MobileNavLink
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </MobileNavLink>
          ))}
        </MobileMenuContent>
        
        <MobileCTAContainer>
          <MobileCTAButton
            href="/beta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pré-inscription
          </MobileCTAButton>
        </MobileCTAContainer>
      </MobileMenuDrawer>
    </>
  );
}
