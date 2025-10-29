import Link from 'next/link';
import { Shield, Mail, Database, Eye, Lock, Trash2 } from 'lucide-react';

export const metadata = {
  title: 'Politique de Confidentialité',
  description: 'Protection des données personnelles - RandoMatch',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Politique de Confidentialité</h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <p className="text-gray-700 text-lg">
                RandoMatch s'engage à protéger votre vie privée et vos données personnelles conformément au RGPD et à la loi Informatique et Libertés.
              </p>
            </section>

            {/* Responsable */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                1. Responsable du traitement
              </h2>
              <p className="text-gray-700">RandoMatch - Projet en phase de pré-lancement</p>
              <p className="text-gray-700">Contact DPO : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span></p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6" />
                2. Données collectées
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Formulaire de pré-inscription (/beta)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Prénom</li>
                <li>Adresse email</li>
                <li>Département</li>
                <li>Genre</li>
                <li>Date de naissance (calcul de l'âge)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">Données techniques</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Adresse IP</li>
                <li>Données de navigation (Google Analytics)</li>
                <li>Cookies (Google Analytics)</li>
              </ul>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalités du traitement</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Gestion des pré-inscriptions à la bêta</li>
                <li>Communication sur le lancement de l'application</li>
                <li>Analyses statistiques du trafic (Google Analytics)</li>
                <li>Amélioration de nos services</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Consentement</strong> pour l'inscription à la bêta</li>
                <li><strong>Intérêt légitime</strong> pour les analyses statistiques</li>
              </ul>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Destinataires des données</h2>
              <p className="text-gray-700">Vos données sont accessibles uniquement par :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>L'équipe RandoMatch (accès strictement limité)</li>
                <li>Nos sous-traitants :
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Supabase (base de données - hébergement UE/US)</li>
                    <li>Brevo (envoi emails - hébergement UE)</li>
                    <li>Google Analytics (analyses - hébergement US)</li>
                    <li>Vercel (hébergement site - US)</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Durée conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Durée de conservation</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Pré-inscriptions :</strong> jusqu'au lancement + 3 mois</li>
                <li><strong>Analytics :</strong> 26 mois (Google Analytics)</li>
                <li><strong>Logs techniques :</strong> 12 mois</li>
              </ul>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                7. Vos droits RGPD
              </h2>
              <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              
              <div className="grid gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-800"><Eye className="inline w-4 h-4 mr-2" />Droit d'accès</p>
                  <p className="text-sm text-gray-600">Obtenir une copie de vos données</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Droit de rectification</p>
                  <p className="text-sm text-gray-600">Corriger vos données inexactes</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-800"><Trash2 className="inline w-4 h-4 mr-2" />Droit à l'effacement</p>
                  <p className="text-sm text-gray-600">Supprimer vos données (« droit à l'oubli »)</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-gray-800">Droit d'opposition</p>
                  <p className="text-sm text-gray-600">S'opposer au traitement de vos données</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800">Droit à la portabilité</p>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="font-semibold text-gray-800">Droit de limitation</p>
                  <p className="text-sm text-gray-600">Limiter le traitement de vos données</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Comment exercer vos droits ?</p>
                <p className="text-gray-700">Envoyez un email à : <span className="font-mono text-sm">contact[at]randomatch[dot]fr</span></p>
                <p className="text-sm text-gray-600 mt-2">Réponse sous 1 mois maximum</p>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Sécurité des données</h2>
              <p className="text-gray-700">Mesures de sécurité mises en place :</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Chiffrement HTTPS (SSL/TLS)</li>
                <li>Bases de données sécurisées (Supabase)</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes régulières</li>
                <li>Mises à jour de sécurité</li>
              </ul>
            </section>

            {/* Transferts hors UE */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Transferts hors UE</h2>
              <p className="text-gray-700">
                Certains sous-traitants sont situés hors de l'UE (USA). Ces transferts sont encadrés par :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clauses contractuelles types de la Commission européenne</li>
                <li>Garanties appropriées (Privacy Shield successeur)</li>
              </ul>
            </section>

            {/* Réclamation CNIL */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Réclamation</h2>
              <p className="text-gray-700">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL :
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-800">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                <p className="text-gray-700">3 Place de Fontenoy</p>
                <p className="text-gray-700">TSA 80715</p>
                <p className="text-gray-700">75334 Paris Cedex 07</p>
                <p className="text-gray-700">Site : <a href="https://www.cnil.fr" className="text-green-600 hover:text-green-700" target="_blank" rel="noopener">cnil.fr</a></p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une mise à jour de la date.
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
