import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog RandoMatch - Actualités & Coulisses du Projet",
  description: "Découvre les actualités, les coulisses du développement et la vision derrière RandoMatch, l'app de rencontres pour passionnés de randonnée. Articles sur le projet, conseils et histoire.",
  keywords: "blog randomatch, actualités randonnée, rencontre randonneurs, coulisses projet, développement app, startup outdoor, vision projet",
  
  openGraph: {
    title: "Blog RandoMatch - Actualités & Coulisses",
    description: "Toutes les actualités et coulisses du développement de RandoMatch",
    url: "https://www.randomatch.fr/blog",
    siteName: "RandoMatch",
    images: [
      {
        url: "https://www.randomatch.fr/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog RandoMatch",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Blog RandoMatch - Actualités & Coulisses",
    description: "Toutes les actualités et coulisses du développement de RandoMatch",
    images: ["https://www.randomatch.fr/og-blog.jpg"],
  },

  alternates: {
    canonical: "https://www.randomatch.fr/blog",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog RandoMatch",
            "description": "Actualités, coulisses et vision du projet RandoMatch",
            "url": "https://www.randomatch.fr/blog",
            "isPartOf": {
              "@type": "WebSite",
              "name": "RandoMatch",
              "url": "https://www.randomatch.fr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RandoMatch",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.randomatch.fr/logo.png"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
