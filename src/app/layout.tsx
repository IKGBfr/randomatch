import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.randomatch.fr'),
  title: {
    default: "RandoMatch - Rencontres pour Randonneurs",
    template: "%s | RandoMatch",
  },
  description: "L'app de rencontres pour passionnés de randonnée. Trouve ton partenaire idéal pour explorer les sentiers.",
  keywords: "rencontre, randonnée, dating, outdoor, montagne, nature, célibataires, hiking, trekking",
  authors: [{ name: "RandoMatch" }],
  creator: "RandoMatch",
  publisher: "RandoMatch",
  
  // Vérification Google Search Console
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Fallback racine pour tous les navigateurs
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
    ],
  },
  
  openGraph: {
    title: "RandoMatch - L'amour commence sur les sentiers",
    description: "Rejoins la communauté de randonneurs célibataires",
    url: "https://www.randomatch.fr",
    siteName: "RandoMatch",
    images: [
      {
        url: "https://www.randomatch.fr/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RandoMatch - Rencontres pour Randonneurs",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "RandoMatch - Rencontres pour Randonneurs",
    description: "Trouve ton partenaire de randonnée idéal",
    images: ["https://www.randomatch.fr/og-default.jpg"],
    creator: "@randomatch",
  },

  alternates: {
    canonical: "https://www.randomatch.fr",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        {FB_PIXEL_ID && <FacebookPixel pixelId={FB_PIXEL_ID} />}
        <Header />
        <main className="pt-16 md:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
