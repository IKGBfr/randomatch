import type { Metadata } from "next";

// Descriptions uniques par catégorie pour SEO
const categoryDescriptions: Record<string, { title: string; description: string; intro: string }> = {
  'actualites': {
    title: 'Actualités RandoMatch',
    description: 'Toutes les actualités et nouveautés de RandoMatch : nouvelles fonctionnalités, milestones du projet, annonces importantes et évolution de la plateforme de rencontres pour randonneurs.',
    intro: 'Suis l\'évolution de RandoMatch en temps réel : nouveautés, fonctionnalités, milestones et actualités du projet.'
  },
  'guides': {
    title: 'Guides RandoMatch',
    description: 'Guides pratiques pour mieux utiliser RandoMatch : conseils pour créer le profil parfait, optimiser ses chances de match, bien démarrer une conversation avec des randonneurs.',
    intro: 'Des guides complets pour tirer le meilleur parti de RandoMatch et multiplier tes chances de rencontres.'
  },
  'coulisses': {
    title: 'Coulisses du Projet RandoMatch',
    description: 'Découvre les coulisses du développement de RandoMatch : choix techniques, défis rencontrés, vision du créateur, apprentissages et transparence totale sur le projet.',
    intro: 'Plonge dans les coulisses du développement : transparence totale sur la création de RandoMatch.'
  },
  'temoignages': {
    title: 'Témoignages RandoMatch',
    description: 'Histoires vraies des utilisateurs RandoMatch : témoignages de rencontres réussies, couples formés grâce à l\'app, histoires de randonnées à deux et success stories.',
    intro: 'Les plus belles histoires de rencontres nées sur RandoMatch : témoignages authentiques de nos utilisateurs.'
  }
};

function unslugifyCategory(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const categoryInfo = categoryDescriptions[categorySlug] || {
    title: unslugifyCategory(categorySlug),
    description: `Tous les articles de la catégorie ${unslugifyCategory(categorySlug)} sur le blog RandoMatch`,
    intro: `Articles de la catégorie ${unslugifyCategory(categorySlug)}`
  };

  return {
    title: `${categoryInfo.title} - Blog RandoMatch`,
    description: categoryInfo.description,
    keywords: `${categorySlug} randomatch, blog ${categorySlug}, articles ${categorySlug}, rencontre randonneurs`,
    
    openGraph: {
      title: `${categoryInfo.title} - Blog RandoMatch`,
      description: categoryInfo.description,
      url: `https://www.randomatch.fr/blog/${categorySlug}`,
      siteName: "RandoMatch",
      images: [
        {
          url: "https://www.randomatch.fr/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: categoryInfo.title,
        }
      ],
      locale: "fr_FR",
      type: "website",
    },
    
    twitter: {
      card: "summary_large_image",
      title: `${categoryInfo.title} - Blog RandoMatch`,
      description: categoryInfo.description,
      images: ["https://www.randomatch.fr/og-blog.jpg"],
    },

    alternates: {
      canonical: `https://www.randomatch.fr/blog/${categorySlug}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  return children;
}
