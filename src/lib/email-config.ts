// lib/email-config.ts
/**
 * Configuration centralisée des emails RandoMatch
 * 
 * ARCHITECTURE:
 * - randomatch.fr → Resend → notifications@randomatch.fr (TRANSACTIONNEL CRITIQUE via Supabase Auth)
 * - mail.randomatch.fr → Brevo → contact@mail.randomatch.fr (MARKETING via API Brevo)
 */

export const EMAIL_CONFIG = {
  // RESEND (via Supabase Auth) - NE PAS UTILISER DANS LE CODE
  // Configuration dans Supabase Dashboard → Settings → Auth → SMTP
  transactional: {
    provider: 'Resend',
    domain: 'randomatch.fr',
    from: 'notifications@randomatch.fr',
    name: 'RandoMatch',
    usage: [
      'Signup / Email verification',
      'Password reset',
      'Magic links',
      'Account security'
    ]
  },

  // BREVO (API) - UTILISER POUR MARKETING
  marketing: {
    provider: 'Brevo',
    domain: 'mail.randomatch.fr',
    from: process.env.BREVO_SENDER_EMAIL_MARKETING || 'contact@mail.randomatch.fr',
    name: process.env.BREVO_SENDER_NAME_MARKETING || 'RandoMatch',
    usage: [
      'Newsletters',
      'Campagnes marketing',
      'Annonces produit',
      'Inscriptions pré-launch'
    ]
  }
} as const;

/**
 * Retourne la configuration email pour un type donné
 */
export function getEmailConfig(type: 'transactional' | 'marketing') {
  return EMAIL_CONFIG[type];
}

/**
 * Vérifie si un email est prêt pour la production
 */
export function isEmailConfigValid(type: 'transactional' | 'marketing'): boolean {
  const config = EMAIL_CONFIG[type];
  
  if (type === 'marketing') {
    return !!(
      process.env.BREVO_API_KEY &&
      process.env.BREVO_SENDER_EMAIL_MARKETING &&
      process.env.BREVO_SENDER_NAME_MARKETING
    );
  }
  
  // Transactional est géré par Supabase
  return true;
}
