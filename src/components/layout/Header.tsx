'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo & Title */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
            <Mountain className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-montserrat font-bold text-xl md:text-2xl bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            RandoMatch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-green-700 font-medium text-sm lg:text-base transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
            </Link>
          ))}
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="/beta"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Pré-inscription
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/beta"
                className="block px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl shadow-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pré-inscription
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
