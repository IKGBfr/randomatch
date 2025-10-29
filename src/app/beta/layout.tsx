import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription Bêta - RandoMatch",
  description: "Rejoins des célibataires pour des randonnées en France. Sois parmi les premiers avertis du lancement de RandoMatch dans ta région !",
  keywords: "randonnée, rencontres, célibataires, outdoor, inscription bêta, pré-lancement",
  
  openGraph: {
    title: "RandoMatch - Trouve ton partenaire de randonnée !",
    description: "L'app de rencontres dédiée aux passionnés de randonnée arrive bientôt. Inscris-toi pour être averti en priorité !",
    url: "https://www.randomatch.fr/beta",
    siteName: "RandoMatch",
    images: [
      {
        url: "https://www.randomatch.fr/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RandoMatch - Inscription Bêta",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "RandoMatch - Trouve ton partenaire de randonnée !",
    description: "Inscris-toi pour être parmi les premiers à rejoindre RandoMatch",
    images: ["https://www.randomatch.fr/og-default.jpg"],
    creator: "@randomatch",
  },

  alternates: {
    canonical: "https://www.randomatch.fr/beta",
  },
};

export default function BetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
