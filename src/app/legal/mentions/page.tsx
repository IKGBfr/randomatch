import Link from 'next/link';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Mentions Légales',
  description: 'Informations légales du site RandoMatch',
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-900">
                  <strong>⚠️ Site en phase de pré-lancement</strong><br />
                  La structure juridique est actuellement en cours de création.
                </p>
              </div>
              
              <p className="text-gray-700"><strong>Nom du site :</strong> RandoMatch</p>
              <p className="text-gray-700"><strong>URL :</strong> <a href="https://www.randomatch.fr" className="text-green-600 hover:text-green-700">www.randomatch.fr</a></p>
              <p className="text-gray-700"><strong>Statut :</strong> Projet entrepreneurial en cours de création</p>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2"><strong>Contact :</strong></p>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Remplacer [at] par @ et [dot] par . (protection anti-spam)
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Les coordonnées complètes de l'éditeur sont disponibles sur simple demande à cette adresse, conformément à l'article 6-III de la LCEN.
                </p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Directeur de la publication</h2>
              <p className="text-gray-700">Le directeur de la publication est le responsable du projet RandoMatch.</p>
              <p className="text-gray-700">Coordonnées disponibles sur demande à : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span></p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hébergement</h2>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Hébergeur du site :</strong></p>
                <div className="pl-4 border-l-2 border-gray-300">
                  <p className="text-gray-700">Vercel Inc.</p>
                  <p className="text-gray-700">440 N Barranca Ave #4133</p>
                  <p className="text-gray-700">Covina, CA 91723, États-Unis</p>
                  <p className="text-gray-700">Site : <a href="https://vercel.com" className="text-green-600 hover:text-green-700" target="_blank" rel="noopener">vercel.com</a></p>
                </div>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété exclusive de RandoMatch, sauf mention contraire.
              </p>
              <p className="text-gray-700 mt-2">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord express de RandoMatch.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Protection des données personnelles</h2>
              <p className="text-gray-700">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits sur vos données personnelles.
              </p>
              <p className="text-gray-700 mt-2">
                Pour plus d'informations, consultez notre{' '}
                <Link href="/legal/privacy" className="text-green-600 hover:text-green-700 font-semibold">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700">
                Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.
              </p>
              <p className="text-gray-700 mt-2">
                Pour en savoir plus, consultez notre{' '}
                <Link href="/legal/cookies" className="text-green-600 hover:text-green-700 font-semibold">
                  Politique de Cookies
                </Link>.
              </p>
            </section>

            {/* Loi applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Loi applicable</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par la loi française. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Dernière mise à jour */}
            <section className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Dernière mise à jour :</strong> 29 octobre 2025
              </p>
            </section>

          </div>

          {/* Retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
