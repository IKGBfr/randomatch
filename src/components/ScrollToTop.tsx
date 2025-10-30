'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Composant qui force le scroll vers le haut à chaque changement de route.
 * 
 * Options disponibles :
 * - INSTANT : Scroll instantané (par défaut)
 * - SMOOTH : Animation fluide
 * - DELAYED : Avec petit délai pour les transitions
 */

type ScrollBehavior = 'instant' | 'smooth' | 'delayed';

const SCROLL_BEHAVIOR: ScrollBehavior = 'instant'; // Change ici si besoin

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    switch (SCROLL_BEHAVIOR) {
      case 'smooth':
        // Animation fluide (peut être visible)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
        
      case 'delayed':
        // Délai de 50ms pour laisser la page se charger
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
        break;
        
      case 'instant':
      default:
        // Immédiat (recommandé)
        window.scrollTo(0, 0);
        break;
    }
  }, [pathname]);

  return null;
}
