import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RandoMatch - Rencontres pour Randonneurs",
  description: "L'app de rencontres pour passionnés de randonnée. Trouve ton partenaire idéal pour explorer les sentiers.",
  keywords: "rencontre, randonnée, dating, outdoor, montagne, nature, célibataires",
  authors: [{ name: "RandoMatch" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RandoMatch - L'amour commence sur les sentiers",
    description: "Rejoins la communauté de randonneurs célibataires",
    url: "https://randomatch.fr",
    siteName: "RandoMatch",
    images: [
      {
        url: "https://randomatch.fr/og-image.jpg",
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
    images: ["https://randomatch.fr/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}