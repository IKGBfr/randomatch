# 📧 Guide de Configuration des Emails - RandoMatch

## 🎯 Architecture à 2 Domaines

### 1️⃣ **randomatch.fr** (Domaine principal - TRANSACTIONNEL)
- **Provider:** Resend (via Supabase Auth SMTP)
- **Email:** notifications@randomatch.fr
- **Usage:** Emails d'authentification CRITIQUES
  - Signup / Email verification
  - Password reset
  - Magic links
  - Account security
- **Configuration:** Supabase Dashboard → Settings → Auth → SMTP
- **❌ NE JAMAIS UTILISER POUR MARKETING**

### 2️⃣ **mail.randomatch.fr** (Sous-domaine - MARKETING)
- **Provider:** Brevo (API transactionnelle + Campagnes)
- **Email:** contact@mail.randomatch.fr
- **Usage:** Campagnes marketing et newsletters
  - Newsletter hebdomadaire
  - Campagnes promotionnelles
  - Annonces produit
  - Inscriptions pré-launch (formulaire site web)
- **Configuration:** Code Next.js + Brevo Dashboard
- **✅ OK SI SPAM (ne pollue pas le domaine principal)**

---

## 📋 Checklist de Configuration

### ✅ DNS Configuré (Vercel)

#### Domaine principal (randomatch.fr)
- [x] SPF: `v=spf1 include:spf.brevo.com include:amazonses.com include:spf.improvmx.com ~all`
- [x] DKIM Resend: `resend._domainkey`
- [x] DMARC: `_dmarc` → **CHANGER `p=quarantine` EN `p=none`** ⚠️

#### Sous-domaine (mail.randomatch.fr)
- [ ] SPF: `v=spf1 include:spf.brevo.com ~all`
- [ ] DKIM1: `brevo1._domainkey.mail`
- [ ] DKIM2: `brevo2._domainkey.mail`
- [ ] DMARC: `_dmarc.mail` → `p=none`

### ✅ Providers Configurés

#### Resend (Supabase Auth)
- [ ] Vérifier dans Supabase → Settings → Auth → SMTP
- [ ] Sender: notifications@randomatch.fr
- [ ] SMTP configuré avec clé API Resend
- [ ] ❌ NE PAS MODIFIER

#### Brevo
- [ ] Domaine `mail.randomatch.fr` ajouté
- [ ] Authentification DNS vérifiée (3 ✅ verts)
- [ ] Sender: contact@mail.randomatch.fr

### ✅ Code Configuré

#### Next.js (.env.local)
```bash
BREVO_API_KEY=xkeysib-xxx...
BREVO_SENDER_EMAIL_MARKETING=contact@mail.randomatch.fr
BREVO_SENDER_NAME_MARKETING=RandoMatch
```

#### Usage dans le code
```typescript
// Pour MARKETING (newsletters, campagnes)
import { getEmailConfig } from '@/lib/email-config';

const config = getEmailConfig('marketing');
sendSmtpEmail.sender = {
  name: config.name,
  email: config.from
};
```

---

## 🚨 Règles Critiques

### ❌ NE JAMAIS FAIRE
1. Envoyer des campagnes depuis `notifications@randomatch.fr`
2. Utiliser Brevo pour les emails d'authentification
3. Envoyer 1000+ emails d'un coup sans warming-up
4. Changer la config Supabase Auth SMTP (Resend)

### ✅ TOUJOURS FAIRE
1. Marketing → `contact@mail.randomatch.fr` (Brevo)
2. Auth → `notifications@randomatch.fr` (Resend via Supabase)
3. Warming-up progressif pour nouvelles campagnes
4. Surveiller la réputation (Brevo + Google Postmaster)

---

## 📊 Plan de Warming-up

### Semaine 1-2 (maintenant)
- ❌ STOP campagnes marketing
- ✅ Seulement emails transactionnels naturels

### Semaine 3-4
- ✅ 50 emails/jour max
- ✅ Segmenter : utilisateurs engagés d'abord

### Mois 2
- ✅ 100-200 emails/jour
- ✅ Augmentation progressive

---

## 🔧 Dépannage

### Emails en spam ?
1. Vérifier DMARC = `p=none` (pas `p=quarantine`)
2. Vérifier authentification Brevo (3 ✅ verts)
3. Attendre 24-48h après changement DNS
4. Tester avec mail-tester.com

### Réputation dégradée ?
1. STOP toutes campagnes 7 jours
2. Contacter support Brevo
3. Vérifier Google Postmaster Tools
4. Recommencer warming-up progressif

---

## 📞 Support

- **Brevo Support:** support@brevo.com
- **Resend Support:** support@resend.com
- **Supabase Support:** support@supabase.io

---

**Dernière mise à jour:** 30 octobre 2025
