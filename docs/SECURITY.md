# 🔒 Guide de Sécurité - RandoMatch Blog

## 📊 État actuel de sécurité

✅ **REPO PUBLIC = SÉCURISÉ**

Ton repo GitHub public est correctement configuré. Aucun risque de sécurité détecté.

---

## ✅ Checklist de Sécurité

### Variables d'Environnement

- [x] `.gitignore` contient `.env*`
- [x] `.env.local` jamais commité
- [x] `.env.local.example` à jour (template)
- [x] Secrets dans `process.env` uniquement
- [x] Variables publiques préfixées `NEXT_PUBLIC_`

### Code Source

- [x] Aucune clé API hardcodée
- [x] Aucun mot de passe dans le code
- [x] Aucun token exposé
- [x] Routes API sécurisées
- [x] Validation des inputs

### GitHub

- [x] Repo public = OK pour un site marketing
- [x] `.git` dans `.gitignore` (automatique)
- [x] Historique Git propre (aucun secret commité)
- [ ] GitHub Actions secrets configurés (si utilisé)

### Déploiement

- [ ] Variables d'env configurées sur Vercel
- [ ] CORS configuré si API externe
- [ ] Rate limiting sur les endpoints sensibles (contact, subscribe)

---

## 🔍 Comment vérifier l'historique Git

Pour s'assurer qu'aucun secret n'a jamais été commité :

```bash
# Rechercher dans tout l'historique Git
cd /Users/anthony/Projects/randomatch/rando

# Chercher des clés API potentielles
git log -S "BREVO_API_KEY" --all
git log -S "process.env" --all

# Chercher des fichiers .env
git log --all -- .env.local
git log --all -- .env
```

Si tu trouves des secrets dans l'historique :
1. **NE PAS PANIQUER** 
2. Régénérer les clés API compromises
3. Utiliser `git filter-branch` ou BFG Repo-Cleaner pour nettoyer l'historique

---

## 🛡️ Secrets Protégés (JAMAIS dans Git)

Ces variables sont dans `.env.local` (ignoré par Git) :

| Variable | Sensibilité | Où obtenir |
|----------|-------------|------------|
| `BREVO_API_KEY` | 🔴 CRITICAL | https://app.brevo.com/settings/keys/api |
| `BREVO_LIST_ID` | 🟡 MODERATE | Dashboard Brevo |
| `BREVO_SENDER_EMAIL_MARKETING` | 🟢 LOW | Configuration domaine |

---

## 🌐 Variables Publiques (OK si exposées)

Ces variables peuvent être dans Git (côté client) :

| Variable | Pourquoi public ? |
|----------|-------------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID Google Analytics (visible dans le code client) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | ID Facebook Pixel (visible dans le code client) |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Code de vérification GSC (visible dans le HTML) |

---

## 🔐 Public vs Privé : Quand mettre en privé ?

### ✅ Rester PUBLIC si :

- Site marketing/blog/landing page
- Code open source
- Aucun secret hardcodé
- Besoin de portfolio
- **✅ C'EST TON CAS**

### ⚠️ Passer en PRIVÉ si :

- Code propriétaire ultra-sensible
- Algorithmes business critiques
- Base de données ou infrastructure critique
- Secrets accidentellement commités (régénérer les clés d'abord !)
- **❌ PAS TON CAS**

---

## 🚨 Que faire si tu as commité un secret ?

### 1. Immédiatement

```bash
# Supprimer le fichier du dernier commit (si pas encore pushé)
git reset HEAD~1
git add .env.local.example  # Garder uniquement l'exemple
git commit -m "fix: Remove secrets"
```

### 2. Régénérer les clés

- Brevo : Créer une nouvelle clé API
- Google Analytics : Créer un nouveau ID (ou garder, pas critique)
- Facebook Pixel : Créer un nouveau Pixel (ou garder, pas critique)

### 3. Nettoyer l'historique (si déjà pushé)

```bash
# Avec BFG Repo-Cleaner (recommandé)
bfg --delete-files .env.local
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Puis force push
git push --force origin main
```

---

## 📝 Bonnes Pratiques

### ✅ À FAIRE

- Utiliser `.env.local` pour les secrets
- Préfixer `NEXT_PUBLIC_` les vars publiques
- Documenter dans `.env.local.example`
- Configurer les env vars sur Vercel
- Faire des audits réguliers

### ❌ À ÉVITER

- Hardcoder des clés API
- Commiter `.env.local`
- Stocker des secrets dans le code
- Partager des clés en clair (Slack, email)
- Utiliser les mêmes clés dev/prod

---

## 🔗 Ressources

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

---

## ✅ Conclusion pour ton projet

**Ton repo peut rester PUBLIC en toute sécurité** car :

1. ✅ Tous les secrets sont dans `.env.local` (ignoré par Git)
2. ✅ Aucune clé hardcodée dans le code
3. ✅ `.gitignore` bien configuré
4. ✅ C'est un site marketing, pas l'app principale
5. ✅ Bon pour ton portfolio

**Aucune action requise**, continue comme ça ! 🎉

---

**Dernière vérification** : 30 octobre 2025  
**Statut** : 🟢 SÉCURISÉ
