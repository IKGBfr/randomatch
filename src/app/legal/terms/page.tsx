import Link from 'next/link';
import { FileText, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Conditions Générales d\'Utilisation',
  description: 'CGU du site RandoMatch',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Conditions Générales d'Utilisation</h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-900">
                <AlertTriangle className="inline w-4 h-4 mr-2" />
                <strong>Version Pré-lancement :</strong> Ces CGU s'appliquent au site web et au formulaire de pré-inscription. Des CGU spécifiques seront applicables lors du lancement de l'application.
              </p>
            </div>

            {/* Préambule */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Préambule</h2>
              <p className="text-gray-700">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web <strong>www.randomatch.fr</strong> et de son formulaire de pré-inscription.
              </p>
              <p className="text-gray-700 mt-2">
                En accédant au site et/ou en vous inscrivant à la bêta, vous acceptez sans réserve les présentes CGU.
              </p>
            </section>

            {/* Définitions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Définitions</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>« Site »</strong> : Le site web www.randomatch.fr</li>
                <li><strong>« Utilisateur »</strong> : Toute personne accédant au Site</li>
                <li><strong>« Pré-inscription »</strong> : Formulaire d'inscription à la bêta de l'application</li>
                <li><strong>« Éditeur »</strong> : RandoMatch, responsable du Site</li>
              </ul>
            </section>

            {/* Accès au site */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Accès au Site</h2>
              <p className="text-gray-700">
                Le Site est accessible gratuitement à toute personne disposant d'un accès à Internet. Les frais de connexion sont à la charge de l'Utilisateur.
              </p>
              <p className="text-gray-700 mt-2">
                L'Éditeur se réserve le droit de suspendre, modifier ou interrompre l'accès au Site à tout moment sans préavis.
              </p>
            </section>

            {/* Pré-inscription */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pré-inscription à la bêta</h2>
              <p className="text-gray-700"><strong>3.1 Conditions</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Avoir au minimum 18 ans</li>
                <li>Résider en France</li>
                <li>Fournir des informations exactes et à jour</li>
                <li>Accepter la Politique de Confidentialité</li>
              </ul>

              <p className="text-gray-700 mt-4"><strong>3.2 Validation</strong></p>
              <p className="text-gray-700">
                La pré-inscription ne garantit pas l'accès à la bêta. Les Utilisateurs seront contactés par email selon la disponibilité et les critères de sélection.
              </p>

              <p className="text-gray-700 mt-4"><strong>3.3 Désinscription</strong></p>
              <p className="text-gray-700">
                Vous pouvez vous désinscrire à tout moment en envoyant un email à : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span>
              </p>
            </section>

            {/* Obligations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Obligations de l'Utilisateur</h2>
              <p className="text-gray-700">L'Utilisateur s'engage à :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ne pas utiliser le Site à des fins illégales</li>
                <li>Fournir des informations exactes lors de l'inscription</li>
                <li>Ne pas tenter d'accéder à des zones protégées du Site</li>
                <li>Ne pas perturber le fonctionnement du Site</li>
                <li>Respecter les droits de propriété intellectuelle</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                Le Site et tous ses éléments (textes, images, logos, design, structure) sont protégés par le droit d'auteur et sont la propriété exclusive de RandoMatch.
              </p>
              <p className="text-gray-700 mt-2">
                Toute reproduction, représentation, modification ou exploitation sans autorisation est interdite et constitue une contrefaçon.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Données personnelles</h2>
              <p className="text-gray-700">
                Le traitement de vos données personnelles est régi par notre{' '}
                <Link href="/legal/privacy" className="text-green-600 hover:text-green-700 font-semibold">
                  Politique de Confidentialité
                </Link>
                {' '}conforme au RGPD.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
              <p className="text-gray-700"><strong>7.1 Disponibilité</strong></p>
              <p className="text-gray-700">
                L'Éditeur ne garantit pas la disponibilité continue du Site et ne pourra être tenu responsable en cas d'interruption.
              </p>

              <p className="text-gray-700 mt-4"><strong>7.2 Contenu</strong></p>
              <p className="text-gray-700">
                L'Éditeur s'efforce de fournir des informations exactes mais ne peut garantir l'exhaustivité ou l'exactitude absolue du contenu.
              </p>

              <p className="text-gray-700 mt-4"><strong>7.3 Liens externes</strong></p>
              <p className="text-gray-700">
                Le Site peut contenir des liens vers des sites tiers. L'Éditeur n'est pas responsable du contenu de ces sites.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-700">
                Le Site utilise des cookies. Pour plus d'informations, consultez notre{' '}
                <Link href="/legal/cookies" className="text-green-600 hover:text-green-700 font-semibold">
                  Politique de Cookies
                </Link>.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modifications des CGU</h2>
              <p className="text-gray-700">
                L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur publication sur le Site.
              </p>
              <p className="text-gray-700 mt-2">
                Il est conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Droit applicable et juridiction</h2>
              <p className="text-gray-700">
                Les présentes CGU sont régies par le droit français.
              </p>
              <p className="text-gray-700 mt-2">
                En cas de litige, et après échec d'une tentative de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact</h2>
              <p className="text-gray-700">
                Pour toute question relative aux présentes CGU :
              </p>
              <p className="text-gray-700 mt-2">
                Email : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span>
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
