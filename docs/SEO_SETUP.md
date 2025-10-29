# 🚀 Guide SEO & Analytics - RandoMatch Blog

## ✅ Optimisations SEO Implémentées

### 1. Meta Tags & OpenGraph
- ✅ Title, description, keywords dynamiques par article
- ✅ OpenGraph pour Facebook, LinkedIn
- ✅ Twitter Cards pour Twitter/X
- ✅ Canonical URLs
- ✅ Robots meta tags
- ✅ Authors & publisher tags

### 2. Schema.org (JSON-LD)
- ✅ BlogPosting schema pour chaque article
- ✅ Person schema pour les auteurs
- ✅ Organization schema pour RandoMatch
- ✅ Keywords & articleSection

### 3. Sitemap & Robots
- ✅ Sitemap.xml dynamique (articles, catégories, auteurs)
- ✅ Robots.txt configuré

### 4. Performance & Images
- ✅ Images optimisées (Next.js Image)
- ✅ Ratio 16:9 pour OpenGraph
- ✅ Alt text & image captions
- ✅ Priority loading pour hero images

### 5. Structure & Accessibilité
- ✅ Semantic HTML (article, header, nav, time)
- ✅ Breadcrumbs (fil d'Ariane)
- ✅ Polices Google (Montserrat & Inter)
- ✅ Responsive design

---

## 📊 Configuration Google Analytics (GA4)

### Étape 1 : Créer un compte GA4

1. Va sur [Google Analytics](https://analytics.google.com)
2. Clique sur "Administrer" (⚙️ en bas à gauche)
3. Clique sur "+ Créer une propriété"
4. Nom de la propriété : "RandoMatch"
5. Fuseau horaire : "France"
6. Devise : "Euro (EUR)"
7. Continue et configure le flux de données :
   - Type : Web
   - URL : `https://randomatch.fr`
   - Nom du flux : "RandoMatch Website"
8. **Copie ton ID de mesure** (format : `G-XXXXXXXXXX`)

### Étape 2 : Configurer dans ton projet

1. Crée un fichier `.env.local` à la racine :
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. C'est tout ! Le code est déjà intégré dans `layout.tsx`

### Étape 3 : Vérifier l'installation

1. Lance ton site en production ou en dev
2. Va sur GA4 > Rapports > Temps réel
3. Visite ton site
4. Tu devrais voir ta visite en temps réel ✅

---

## 🔍 Configuration Google Search Console (GSC)

### Étape 1 : Ajouter ta propriété

1. Va sur [Google Search Console](https://search.google.com/search-console)
2. Clique sur "+ Ajouter une propriété"
3. Choisis "Préfixe d'URL"
4. Entre : `https://randomatch.fr`
5. Clique sur "Continuer"

### Étape 2 : Vérifier la propriété

**Méthode 1 : Balise HTML (Recommandée - déjà configurée)**
1. GSC te donnera une balise meta comme :
   ```html
   <meta name="google-site-verification" content="abc123xyz" />
   ```
2. Copie **uniquement** le code (ex: `abc123xyz`)
3. Ajoute-le dans ton `.env.local` :
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz
```
4. Redémarre ton serveur
5. Retourne sur GSC et clique sur "Vérifier"

**Méthode 2 : Fichier sitemap.xml (Automatique)**
1. Le sitemap est déjà généré : `https://randomatch.fr/sitemap.xml`
2. Dans GSC, va dans "Sitemaps" (menu gauche)
3. Entre : `sitemap.xml`
4. Clique sur "Envoyer"

### Étape 3 : Configuration initiale

1. **Inspection d'URL** : Teste une URL pour voir si elle est indexée
2. **Couverture** : Vérifie que toutes les pages sont découvertes
3. **Performances** : Analyse les recherches Google (apparaît après quelques jours)

---

## 🎯 Checklist SEO Post-Lancement

### Immédiat (Jour 1)
- [ ] Vérifie que GA4 track les visites
- [ ] Soumets le sitemap à GSC
- [ ] Teste 3-4 URLs dans l'inspection d'URL
- [ ] Vérifie que robots.txt est accessible : `/robots.txt`
- [ ] Vérifie que sitemap.xml est accessible : `/sitemap.xml`

### Première semaine
- [ ] Demande l'indexation des articles principaux dans GSC
- [ ] Partage 2-3 articles sur réseaux sociaux (teste les cartes OG)
- [ ] Vérifie les performances sur mobile (Google PageSpeed)
- [ ] Configure les objectifs dans GA4 (clics CTA, scroll)

### Premier mois
- [ ] Analyse les mots-clés performants (GSC)
- [ ] Identifie les pages avec fort taux de rebond (GA4)
- [ ] Crée 2-3 articles optimisés sur mots-clés à fort potentiel
- [ ] Vérifie les erreurs d'exploration (GSC)
- [ ] Analyse la vitesse de chargement (Core Web Vitals)

---

## 📝 Création d'Articles Optimisés SEO

### Template MDX avec tous les champs SEO

\`\`\`mdx
---
title: "Titre optimisé avec mots-clés (50-60 caractères)"
slug: "url-optimisee-lisible"
description: "Description engageante avec mots-clés (150-160 caractères)"
date: "2024-10-29"
author: "Anthony"
category: "Actualités"
keywords: "mot-clé 1, mot-clé 2, mot-clé 3, randonnée, célibataires"
image: "https://images.unsplash.com/photo-xyz"
imageAlt: "Description image avec mots-clés"
imageCaption: "Légende courte et descriptive"
---

## Premier sous-titre (H2) avec mots-clés

Paragraphe avec **mots en gras** pour l'emphase...
\`\`\`

### Best Practices
- ✅ Titre : 50-60 caractères, avec mot-clé principal
- ✅ Description : 150-160 caractères, appel à l'action
- ✅ Keywords : 5-10 mots-clés pertinents
- ✅ Slug : court, lisible, avec tirets
- ✅ Image : 1200x675px, format optimisé (WebP)
- ✅ Structure : H1 (titre) > H2 (sections) > H3 (sous-sections)
- ✅ Liens : 2-3 liens internes vers autres articles

---

## 🔗 URLs Importantes

- Blog : `https://randomatch.fr/blog`
- Sitemap : `https://randomatch.fr/sitemap.xml`
- Robots : `https://randomatch.fr/robots.txt`
- Articles : `https://randomatch.fr/blog/[categorie]/[slug]`

---

## 📞 Support

Si tu as des questions sur la configuration, n'hésite pas !

**Liens utiles :**
- [GA4 Documentation](https://support.google.com/analytics/)
- [GSC Documentation](https://support.google.com/webmasters/)
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
