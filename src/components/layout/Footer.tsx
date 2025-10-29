'use client';

import Link from 'next/link';
import { Mountain, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 shadow-lg">
                <Mountain className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                RandoMatch
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              L'app de rencontres pour passionnés de randonnée. Trouve ton partenaire idéal pour explorer les sentiers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-green-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm hover:text-green-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/mentions" className="text-sm hover:text-green-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm hover:text-green-400 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm hover:text-green-400 transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-sm hover:text-green-400 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h3 className="font-semibold text-white mb-4">Pré-lancement</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/beta"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all"
                >
                  <Heart className="w-4 h-4" />
                  Rejoindre la bêta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} RandoMatch. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>pour les randonneurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
