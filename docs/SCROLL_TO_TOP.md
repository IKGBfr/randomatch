# 🔝 ScrollToTop - Documentation

## Problème résolu

**Avant** : En cliquant sur un lien (article de blog, navigation), la nouvelle page s'affichait à la position de scroll précédente au lieu du haut de la page.

**Maintenant** : Chaque changement de page scroll automatiquement vers le haut instantanément.

---

## 🎯 Implémentation

### Fichier créé

**`src/components/ScrollToTop.tsx`**
- Composant Client React
- Utilise `usePathname()` de Next.js pour détecter les changements de route
- Force le scroll en haut via `window.scrollTo()`

### Intégration

**`src/app/layout.tsx`**
```tsx
<Header />
<ScrollToTop />  {/* ← Ajouté ici */}
<main>
  {children}
</main>
```

---

## ⚙️ Options de configuration

Tu peux changer le comportement en modifiant la constante `SCROLL_BEHAVIOR` dans le composant :

### 1. **Instant** (par défaut - recommandé)
```tsx
const SCROLL_BEHAVIOR: ScrollBehavior = 'instant';
```
- ✅ Scroll immédiat vers le haut
- ✅ Aucune animation visible
- ✅ Performance optimale
- **Utilise :** Expérience utilisateur standard

### 2. **Smooth** (animation fluide)
```tsx
const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';
```
- ✅ Animation de scroll douce
- ⚠️ Peut être visible/dérangeante
- ⚠️ Performance légèrement impactée
- **Utilise :** Si tu veux un effet visuel

### 3. **Delayed** (avec petit délai)
```tsx
const SCROLL_BEHAVIOR: ScrollBehavior = 'delayed';
```
- ✅ Délai de 50ms avant le scroll
- ✅ Laisse la page se charger avant scroll
- ⚠️ Peut causer un "flash" visible
- **Utilise :** Si tu as des problèmes de timing

---

## 🧪 Test

Pour vérifier que ça fonctionne :

1. Va sur `/blog`
2. Scroll en bas de la page
3. Clique sur un article
4. **Résultat attendu** : Tu arrives en haut de la page article instantanément

Teste aussi :
- Catégories → Articles
- Page d'accueil → Contact
- N'importe quelle navigation interne

---

## 🔧 Cas particuliers

### Ancres HTML (#section)
Si tu veux que les liens avec ancres (`href="/page#section"`) fonctionnent normalement :

```tsx
useEffect(() => {
  // Ne pas scroller si l'URL contient une ancre
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}, [pathname]);
```

### Désactiver sur certaines pages
```tsx
useEffect(() => {
  // Ne pas scroller sur les pages de documentation
  if (pathname.startsWith('/docs')) {
    return;
  }
  
  window.scrollTo(0, 0);
}, [pathname]);
```

---

## 📊 Compatibilité

- ✅ Next.js 13+ (App Router)
- ✅ Tous les navigateurs modernes
- ✅ Mobile & Desktop
- ✅ Pas d'impact sur les performances
- ✅ Pas de dépendances externes

---

## ❓ Troubleshooting

### Le scroll ne fonctionne pas
1. Vérifie que `ScrollToTop` est bien importé dans `layout.tsx`
2. Vérifie qu'il est placé **avant** `{children}`
3. Vérifie que tes liens utilisent bien `<Link>` de Next.js

### Le scroll est trop brutal
Change le comportement en `'smooth'` :
```tsx
const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';
```

### Conflit avec des ancres
Utilise la version avec condition sur `window.location.hash`

---

## 🚀 Améliorations futures (optionnelles)

### Scroll vers un élément spécifique
```tsx
// Scroller vers le premier h1 au lieu du top
const firstHeading = document.querySelector('h1');
firstHeading?.scrollIntoView({ behavior: 'instant' });
```

### Mémoriser la position sur "retour"
```tsx
// Restaurer la position quand l'utilisateur utilise le bouton "retour"
// (Next.js le fait déjà par défaut avec App Router)
```

### Animation fade-in lors du scroll
```tsx
// Combiner avec Framer Motion pour une animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

---

## ✅ Checklist

- [x] Composant `ScrollToTop` créé
- [x] Intégré dans le layout root
- [x] Testé sur plusieurs pages
- [x] Fonctionne avec les articles de blog
- [x] Pas d'impact sur les performances
- [x] Comportement configurable

---

**Dernière mise à jour** : 30 octobre 2025
**Version** : 1.0
**Auteur** : Claude (Flutter Master)
