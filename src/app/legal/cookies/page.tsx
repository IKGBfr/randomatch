import Link from 'next/link';
import { Cookie, BarChart3, Settings } from 'lucide-react';

export const metadata = {
  title: 'Politique de Cookies',
  description: 'Gestion des cookies - RandoMatch',
};

export default function CookiesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Politique de Cookies</h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <p className="text-gray-700 text-lg">
                Le site RandoMatch utilise des cookies pour améliorer votre expérience et analyser le trafic.
              </p>
            </section>

            {/* Qu'est-ce qu'un cookie */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
              </p>
              <p className="text-gray-700 mt-2">
                Les cookies permettent de reconnaître votre navigateur et de mémoriser certaines informations.
              </p>
            </section>

            {/* Cookies utilisés */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cookies utilisés sur le site</h2>
              
              {/* Google Analytics */}
              <div className="border border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Google Analytics (GA4)</h3>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-800">Finalité :</p>
                    <p>Mesure d'audience et analyses statistiques du trafic</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800">Données collectées :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Pages visitées</li>
                      <li>Durée de visite</li>
                      <li>Provenance géographique</li>
                      <li>Type d'appareil et navigateur</li>
                      <li>Interactions sur le site</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800">Cookies déposés :</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">_ga</code> - Identifiant unique (2 ans)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">_ga_*</code> - État de la session (2 ans)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">_gid</code> - Identifiant session (24h)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800">Durée de conservation :</p>
                    <p>26 mois maximum</p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">Base légale :</p>
                    <p>Intérêt légitime (analyse de performance)</p>
                  </div>
                </div>
              </div>

              {/* Cookies essentiels */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Cookies essentiels</h3>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-800">Finalité :</p>
                    <p>Fonctionnement technique du site</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800">Exemples :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Gestion de session</li>
                      <li>Préférences de langue</li>
                      <li>Consentement aux cookies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-3">
                    <p className="text-sm text-green-900">
                      ℹ️ Ces cookies ne nécessitent pas de consentement car ils sont strictement nécessaires au fonctionnement du site.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gestion des cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Gérer vos cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Via votre navigateur</h3>
                  <p className="text-gray-700 mb-3">
                    Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies :
                  </p>
                  
                  <div className="grid gap-2 text-sm">
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      → Google Chrome
                    </a>
                    <a 
                      href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" 
                      target="_blank" 
                      rel="noopener"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      → Mozilla Firefox
                    </a>
                    <a 
                      href="https://support.apple.com/fr-fr/HT201265" 
                      target="_blank" 
                      rel="noopener"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      → Safari (macOS/iOS)
                    </a>
                    <a 
                      href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      → Microsoft Edge
                    </a>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-sm text-yellow-900">
                    ⚠️ <strong>Attention :</strong> Le blocage de certains cookies peut affecter le fonctionnement du site.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Désactiver Google Analytics</h3>
                  <p className="text-gray-700 mb-2">
                    Vous pouvez installer le module complémentaire de navigateur pour la désactivation de Google Analytics :
                  </p>
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                  >
                    Télécharger le module
                  </a>
                </div>
              </div>
            </section>

            {/* Consentement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Votre consentement</h2>
              <p className="text-gray-700">
                Lors de votre première visite, une bannière d'information s'affiche pour vous informer de l'utilisation des cookies.
              </p>
              <p className="text-gray-700 mt-2">
                En poursuivant votre navigation, vous acceptez l'utilisation des cookies d'analyse (Google Analytics).
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Modifications</h2>
              <p className="text-gray-700">
                Cette politique peut être modifiée à tout moment. Les modifications prendront effet dès leur publication.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact</h2>
              <p className="text-gray-700">
                Pour toute question sur les cookies :
              </p>
              <p className="text-gray-700 mt-2">
                Email : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span>
              </p>
            </section>

            {/* Liens utiles */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Liens utiles</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <a 
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" 
                    target="_blank" 
                    rel="noopener"
                    className="text-green-600 hover:text-green-700 hover:underline"
                  >
                    → CNIL : Comprendre les cookies
                  </a>
                </p>
                <p>
                  <Link 
                    href="/legal/privacy"
                    className="text-green-600 hover:text-green-700 hover:underline"
                  >
                    → Politique de Confidentialité
                  </Link>
                </p>
                <p>
                  <Link 
                    href="/legal/terms"
                    className="text-green-600 hover:text-green-700 hover:underline"
                  >
                    → Conditions Générales d'Utilisation
                  </Link>
                </p>
              </div>
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
