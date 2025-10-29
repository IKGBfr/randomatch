export const analyticsConfig = {
  // Google Analytics 4 - Remplace par ton ID GA4
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  
  // Google Search Console - Remplace par ton code de vérification
  googleSearchConsoleCode: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || '',
  
  // Meta tags par défaut
  seo: {
    siteUrl: 'https://randomatch.fr',
    siteName: 'RandoMatch',
    defaultTitle: 'RandoMatch - Rencontres entre randonneurs célibataires',
    defaultDescription: 'Trouvez l\'amour sur les sentiers ! RandoMatch est la première plateforme de rencontres dédiée aux randonneurs célibataires en France.',
    twitterHandle: '@randomatch',
    ogImage: '/og-image.jpg', // Crée cette image 1200x630px
  },
};
