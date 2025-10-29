import Link from 'next/link';
import { Mountain, Users, Heart, Target } from 'lucide-react';

export const metadata = {
  title: 'À propos',
  description: 'Découvrez RandoMatch, l\'application de rencontres pour passionnés de randonnée',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos de RandoMatch</h1>
            <p className="text-xl text-gray-600">
              L'application de rencontres dédiée aux passionnés de randonnée
            </p>
          </div>

          {/* Mission */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Notre mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              RandoMatch connecte des célibataires qui partagent une passion commune pour la randonnée et les activités outdoor. 
              Notre objectif est simple : faciliter les rencontres authentiques autour d'une activité saine et enrichissante.
            </p>
          </section>

          {/* Le problème */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Le constat</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                Les applications de rencontres généralistes ne permettent pas de filtrer efficacement par centres d'intérêt réels. 
                Pour les randonneurs, trouver un partenaire qui partage cette passion est difficile. RandoMatch résout ce problème 
                en créant une communauté dédiée aux amoureux de la montagne et des sentiers.
              </p>
            </div>
          </section>

          {/* Notre approche */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Notre approche</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Ciblage précis
                </h3>
                <p className="text-gray-700">
                  Tous les membres partagent la passion de la randonnée, ce qui facilite les échanges et augmente les affinités.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  Rencontres authentiques
                </h3>
                <p className="text-gray-700">
                  Fini les profils génériques. Ici, chaque utilisateur peut afficher son niveau de randonnée et ses préférences.
                </p>
              </div>
            </div>
          </section>

          {/* Fonctionnalités clés */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fonctionnalités principales</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</span>
                <span className="text-gray-700">Matching basé sur la localisation et les affinités outdoor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</span>
                <span className="text-gray-700">Filtres par département, niveau de randonnée et distance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</span>
                <span className="text-gray-700">Messagerie intégrée pour échanger avant de se rencontrer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</span>
                <span className="text-gray-700">Profils détaillés avec photos et centres d'intérêt</span>
              </li>
            </ul>
          </section>

          {/* Zone géographique */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zone de couverture</h2>
            <p className="text-gray-700">
              RandoMatch est actuellement disponible en France métropolitaine. Le lancement se concentre sur les régions 
              avec une forte communauté de randonneurs, avant une expansion nationale.
            </p>
          </section>

          {/* Statut actuel */}
          <section className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Phase de pré-lancement</h2>
              <p className="text-gray-700 mb-4">
                RandoMatch est actuellement en développement final. Nous construisons une communauté de pré-inscrits 
                qui seront les premiers à accéder à l'application lors du lancement officiel.
              </p>
              <Link 
                href="/beta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Rejoindre la bêta
              </Link>
            </div>
          </section>

          {/* Valeurs */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Nos valeurs</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Authenticité</h3>
                <p className="text-gray-700">Des profils réels, des passions communes, des rencontres sincères.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Respect</h3>
                <p className="text-gray-700">Un environnement sain et bienveillant pour tous les membres.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Simplicité</h3>
                <p className="text-gray-700">Une application intuitive, sans fonctionnalités superflues.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nous contacter</h2>
            <p className="text-gray-700 mb-4">
              Des questions sur le projet ? Une suggestion ? N'hésitez pas à nous écrire.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Formulaire de contact →
            </Link>
          </section>

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
