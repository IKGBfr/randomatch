#!/usr/bin/env node

/**
 * Script d'optimisation des images du blog
 * 
 * Utilise Sharp pour :
 * - Compresser les JPG (qualité 85%)
 * - Générer des versions WebP (qualité 80%)
 * - Optimiser les dimensions (max 1200x630 pour OG)
 * - Supprimer les métadonnées EXIF
 * 
 * Usage: node scripts/optimize-blog-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BLOG_IMAGES_DIR = path.join(__dirname, '../public/blog');
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 1200;
const JPG_QUALITY = 85;
const WEBP_QUALITY = 80;

// Couleurs pour la console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

async function getImageInfo(filePath) {
  const stats = fs.statSync(filePath);
  const metadata = await sharp(filePath).metadata();
  return {
    size: stats.size,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format
  };
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

async function optimizeImage(filePath) {
  const filename = path.basename(filePath);
  const ext = path.extname(filename);
  const nameWithoutExt = filename.replace(ext, '');
  
  console.log(`\n${colors.blue}📸 Traitement: ${filename}${colors.reset}`);
  
  // Info image originale
  const originalInfo = await getImageInfo(filePath);
  console.log(`   Original: ${formatBytes(originalInfo.size)} | ${originalInfo.width}x${originalInfo.height}px`);
  
  const image = sharp(filePath);
  
  // Redimensionner si nécessaire
  let needsResize = false;
  if (originalInfo.width > MAX_WIDTH || originalInfo.height > MAX_HEIGHT) {
    needsResize = true;
    image.resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: 'inside',
      withoutEnlargement: true
    });
  }
  
  // 1. Optimiser le JPG
  const optimizedJpgPath = path.join(BLOG_IMAGES_DIR, `${nameWithoutExt}.jpg`);
  await image
    .clone()
    .jpeg({
      quality: JPG_QUALITY,
      mozjpeg: true, // Utilise mozjpeg pour une meilleure compression
      chromaSubsampling: '4:4:4' // Meilleure qualité couleur
    })
    .toFile(optimizedJpgPath + '.tmp');
  
  // Remplacer l'original
  fs.renameSync(optimizedJpgPath + '.tmp', optimizedJpgPath);
  const optimizedInfo = await getImageInfo(optimizedJpgPath);
  const jpgSavings = originalInfo.size - optimizedInfo.size;
  const jpgSavingsPercent = ((jpgSavings / originalInfo.size) * 100).toFixed(1);
  
  console.log(`   ${colors.green}✓ JPG optimisé: ${formatBytes(optimizedInfo.size)} | ${optimizedInfo.width}x${optimizedInfo.height}px | -${jpgSavingsPercent}%${colors.reset}`);
  
  // 2. Générer version WebP
  const webpPath = path.join(BLOG_IMAGES_DIR, `${nameWithoutExt}.webp`);
  await image
    .clone()
    .webp({
      quality: WEBP_QUALITY,
      effort: 6 // Meilleure compression (0-6, 6 = le plus lent mais meilleur)
    })
    .toFile(webpPath);
  
  const webpInfo = await getImageInfo(webpPath);
  const webpSavings = originalInfo.size - webpInfo.size;
  const webpSavingsPercent = ((webpSavings / originalInfo.size) * 100).toFixed(1);
  
  console.log(`   ${colors.green}✓ WebP créé: ${formatBytes(webpInfo.size)} | ${webpInfo.width}x${webpInfo.height}px | -${webpSavingsPercent}%${colors.reset}`);
  
  return {
    filename,
    originalSize: originalInfo.size,
    jpgSize: optimizedInfo.size,
    webpSize: webpInfo.size,
    jpgSavings,
    webpSavings
  };
}

async function main() {
  console.log(`${colors.blue}🚀 Optimisation des images du blog${colors.reset}\n`);
  console.log(`Dossier: ${BLOG_IMAGES_DIR}`);
  console.log(`Qualité JPG: ${JPG_QUALITY}% | Qualité WebP: ${WEBP_QUALITY}%`);
  console.log(`Dimensions max: ${MAX_WIDTH}x${MAX_HEIGHT}px\n`);
  
  // Lister toutes les images
  const files = fs.readdirSync(BLOG_IMAGES_DIR)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => path.join(BLOG_IMAGES_DIR, file));
  
  if (files.length === 0) {
    console.log(`${colors.yellow}⚠ Aucune image trouvée${colors.reset}`);
    return;
  }
  
  console.log(`${colors.blue}Trouvé ${files.length} image(s) à optimiser${colors.reset}`);
  
  // Optimiser toutes les images
  const results = [];
  for (const file of files) {
    try {
      const result = await optimizeImage(file);
      results.push(result);
    } catch (error) {
      console.error(`${colors.red}✗ Erreur sur ${path.basename(file)}: ${error.message}${colors.reset}`);
    }
  }
  
  // Résumé
  console.log(`\n${colors.blue}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.green}✓ Optimisation terminée !${colors.reset}\n`);
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalJpg = results.reduce((sum, r) => sum + r.jpgSize, 0);
  const totalWebp = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalJpgSavings = results.reduce((sum, r) => sum + r.jpgSavings, 0);
  const totalWebpSavings = results.reduce((sum, r) => sum + r.webpSavings, 0);
  
  console.log(`📊 Statistiques:`);
  console.log(`   Images traitées: ${results.length}`);
  console.log(`   Taille originale totale: ${formatBytes(totalOriginal)}`);
  console.log(`   ${colors.green}JPG optimisés: ${formatBytes(totalJpg)} (-${formatBytes(totalJpgSavings)} | -${((totalJpgSavings/totalOriginal)*100).toFixed(1)}%)${colors.reset}`);
  console.log(`   ${colors.green}WebP générés: ${formatBytes(totalWebp)} (-${formatBytes(totalWebpSavings)} | -${((totalWebpSavings/totalOriginal)*100).toFixed(1)}%)${colors.reset}`);
  
  console.log(`\n${colors.blue}💡 Prochaines étapes:${colors.reset}`);
  console.log(`   1. Les JPG sont optimisés et remplacent les originaux`);
  console.log(`   2. Les WebP sont générés automatiquement (Next.js les servira aux navigateurs modernes)`);
  console.log(`   3. Commit les changements dans Git`);
}

// Vérifier que sharp est installé
try {
  require.resolve('sharp');
} catch (e) {
  console.error(`${colors.red}✗ sharp n'est pas installé${colors.reset}`);
  console.log(`\nInstalle-le avec: npm install --save-dev sharp\n`);
  process.exit(1);
}

main().catch(error => {
  console.error(`${colors.red}✗ Erreur: ${error.message}${colors.reset}`);
  process.exit(1);
});
