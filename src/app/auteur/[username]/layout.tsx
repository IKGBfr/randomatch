import type { Metadata } from "next";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const username = resolvedParams.username;
  const authorName = username.charAt(0).toUpperCase() + username.slice(1);

  return {
    title: `${authorName} - Auteur Blog RandoMatch`,
    description: `Découvre tous les articles écrits par ${authorName}, créateur de RandoMatch. Passionné de nature, de voyage à vélo, de randonnée et de montagne, il partage les coulisses du projet, sa vision et ses apprentissages sur la création d'une app de rencontres pour amoureux de la nature.`,
    keywords: `${authorName}, auteur randomatch, créateur randomatch, articles ${authorName}, blog ${authorName}`,
    
    openGraph: {
      title: `${authorName} - Auteur Blog RandoMatch`,
      description: `Tous les articles de ${authorName} sur le blog RandoMatch`,
      url: `https://www.randomatch.fr/auteur/${username}`,
      siteName: "RandoMatch",
      images: [
        {
          url: "https://www.randomatch.fr/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: `${authorName} - RandoMatch`,
        }
      ],
      locale: "fr_FR",
      type: "profile",
    },
    
    twitter: {
      card: "summary_large_image",
      title: `${authorName} - Auteur Blog RandoMatch`,
      description: `Tous les articles de ${authorName} sur le blog RandoMatch`,
      images: ["https://www.randomatch.fr/og-blog.jpg"],
    },

    alternates: {
      canonical: `https://www.randomatch.fr/auteur/${username}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AuthorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
