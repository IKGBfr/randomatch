# Favicons RandoMatch

Ce dossier contient tous les fichiers favicon pour RandoMatch.

## Fichiers inclus

- `favicon.ico` - Favicon standard (toutes tailles)
- `favicon-16x16.png` - Favicon 16x16px
- `favicon-32x32.png` - Favicon 32x32px
- `apple-touch-icon.png` - Icône pour iOS/Apple (180x180px)
- `android-chrome-192x192.png` - Icône Android 192x192px
- `android-chrome-512x512.png` - Icône Android 512x512px
- `site.webmanifest` - Manifest pour PWA

## Configuration

Les favicons sont configurés dans `src/app/layout.tsx` avec la metadata Next.js.

## Installation

Pour une compatibilité maximale, exécute le script à la racine :

```bash
chmod +x copy-favicons.sh
./copy-favicons.sh
```

Cela copiera les fichiers essentiels à la racine de `/public` pour les navigateurs qui cherchent automatiquement à cet emplacement.

## Thème

- Theme color: `#FE3C72` (rose RandoMatch)
- Background color: `#ffffff` (blanc)
