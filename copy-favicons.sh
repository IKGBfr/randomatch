#!/bin/bash

# Script pour copier les favicons du dossier /favicon vers la racine de /public
# pour une meilleure compatibilité avec tous les navigateurs

echo "📦 Copie des favicons..."

# Copier les fichiers essentiels à la racine
cp public/favicon/favicon.ico public/favicon.ico
cp public/favicon/apple-touch-icon.png public/apple-touch-icon.png
cp public/favicon/site.webmanifest public/site.webmanifest

echo "✅ Favicons copiés avec succès !"
echo ""
echo "Les fichiers suivants ont été copiés à la racine de /public :"
echo "  - favicon.ico"
echo "  - apple-touch-icon.png"
echo "  - site.webmanifest"
