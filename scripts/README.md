# 🖼️ Script d'Optimisation des Images Blog

## 📦 Installation

Installe Sharp (bibliothèque d'optimisation d'images) :

```bash
cd /Users/anthony/Projects/randomatch/rando
npm install --save-dev sharp
```

## 🚀 Utilisation

Lance le script d'optimisation :

```bash
node scripts/optimize-blog-images.js
```

## ✨ Ce que fait le script

1. **Compresse les JPG**
   - Qualité 85% (optimal pour le web)
   - Supprime les métadonnées EXIF
   - Utilise mozjpeg pour une meilleure compression

2. **Génère des versions WebP**
   - Qualité 80%
   - Format moderne plus léger (20-30% plus petit)
   - Next.js les servira automatiquement aux navigateurs compatibles

3. **Optimise les dimensions**
   - Redimensionne si > 1200x1200px
   - Garde les proportions originales
   - Parfait pour Open Graph (1200x630px recommandé)

## 📊 Résultat attendu

```
🚀 Optimisation des images du blog

📸 Traitement: pourquoi-randomatch-existe-hero.jpg
   Original: 156.45 KB | 1920x1080px
   ✓ JPG optimisé: 120.32 KB | 1200x675px | -23.1%
   ✓ WebP créé: 95.67 KB | 1200x675px | -38.9%

📸 Traitement: top-10-randonnees-celibataires-france-2025.jpg
   Original: 141.08 KB | 1920x1080px
   ✓ JPG optimisé: 108.54 KB | 1200x675px | -23.0%
   ✓ WebP créé: 89.23 KB | 1200x675px | -36.7%

═══════════════════════════════════════
✓ Optimisation terminée !

📊 Statistiques:
   Images traitées: 2
   Taille originale totale: 297.53 KB
   JPG optimisés: 228.86 KB (-68.67 KB | -23.1%)
   WebP générés: 184.90 KB (-112.63 KB | -37.9%)
```

## 🎯 Intégration Next.js

Next.js utilise automatiquement les WebP si disponibles. Tes images sont déjà optimales avec :

```tsx
import Image from 'next/image';

<Image
  src="/blog/top-10-randonnees-celibataires-france-2025.jpg"
  alt="..."
  width={1200}
  height={630}
/>
```

Next.js servira automatiquement :
- **WebP** pour Chrome, Edge, Firefox
- **JPG optimisé** pour Safari < 14

## 📁 Fichiers générés

```
public/blog/
├── pourquoi-randomatch-existe-hero.jpg (optimisé)
├── pourquoi-randomatch-existe-hero.webp (nouveau)
├── top-10-randonnees-celibataires-france-2025.jpg (optimisé)
└── top-10-randonnees-celibataires-france-2025.webp (nouveau)
```

## 🔄 Automatiser pour le futur

Ajoute dans `package.json` :

```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-blog-images.js",
    "prebuild": "npm run optimize:images"
  }
}
```

Puis simplement :
```bash
npm run optimize:images
```

Ou automatiquement avant chaque build !

## 🛡️ Sécurité

Le script :
- ✅ Crée des fichiers temporaires (.tmp)
- ✅ Ne supprime jamais les originaux sans backup
- ✅ Garde toujours un fichier JPG en fallback
- ✅ Vérifie que Sharp est installé avant de lancer

## 🎨 SEO & Performance

Après optimisation, tes images seront :
- ✅ **Légères** : -30 à 40% de poids
- ✅ **Rapides** : Chargement instantané
- ✅ **Modernes** : WebP pour navigateurs récents
- ✅ **Compatibles** : JPG pour anciens navigateurs
- ✅ **SEO-friendly** : Taille optimale pour Open Graph
