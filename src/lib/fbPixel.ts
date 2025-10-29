// Utilitaires pour tracker les événements Facebook Pixel

export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};

// Événements prédéfinis
export const fbEvents = {
  // Contact
  contact: () => trackEvent('Contact'),
  
  // Lead (pré-inscription)
  lead: () => trackEvent('Lead'),
  
  // Inscription complète
  completeRegistration: () => trackEvent('CompleteRegistration'),
  
  // Abonnement
  subscribe: (value?: number) => trackEvent('Subscribe', { 
    value: value || 0, 
    currency: 'EUR' 
  }),
  
  // Début d'essai
  startTrial: () => trackEvent('StartTrial'),
  
  // Page vue (automatique)
  pageView: () => trackEvent('PageView'),
  
  // Recherche
  search: (searchTerm: string) => trackEvent('Search', { 
    search_string: searchTerm 
  }),
  
  // Contenu vu
  viewContent: (contentName?: string) => trackEvent('ViewContent', { 
    content_name: contentName 
  }),
};
