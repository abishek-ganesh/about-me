#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const IMAGE_DIRECTORIES = [
  'public/images',
];

const QUALITY_SETTINGS = {
  '.jpg': 85,
  '.jpeg': 85,
  '.png': 90,
};

async function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)}`);
    console.log(`   Size: ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`);
    
    return { success: true, reduction };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function generateResponsiveImages(inputPath) {
  const sizes = [
    { width: 480, suffix: '-480w' },
    { width: 768, suffix: '-768w' },
    { width: 1200, suffix: '-1200w' },
    { width: 1920, suffix: '-1920w' },
  ];
  
  const ext = path.extname(inputPath);
  const name = path.basename(inputPath, ext);
  const dir = path.dirname(inputPath);
  
  for (const size of sizes) {
    const outputPath = path.join(dir, `${name}${size.suffix}${ext}`);
    const webpPath = path.join(dir, `${name}${size.suffix}.webp`);
    
    try {
      // Generate resized version
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .toFile(outputPath);
      
      // Generate WebP version of resized image
      await sharp(outputPath)
        .webp({ quality: QUALITY_SETTINGS[ext] || 85 })
        .toFile(webpPath);
      
      console.log(`   📐 Generated ${size.width}px version`);
    } catch (error) {
      console.error(`   ❌ Failed to generate ${size.width}px version:`, error.message);
    }
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        
        if (SUPPORTED_FORMATS.includes(ext)) {
          const webpPath = fullPath.replace(ext, '.webp');
          
          // Check if WebP already exists
          try {
            await fs.access(webpPath);
            console.log(`⏭️  Skipping ${entry.name} (WebP exists)`);
          } catch {
            // WebP doesn't exist, create it
            const quality = QUALITY_SETTINGS[ext] || 85;
            await convertToWebP(fullPath, webpPath, quality);
            
            // For large images, also generate responsive versions
            const stats = await fs.stat(fullPath);
            if (stats.size > 100 * 1024) { // > 100KB
              console.log(`   🔄 Generating responsive versions...`);
              await generateResponsiveImages(fullPath);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
  }
}

async function main() {
  console.log('🖼️  Starting WebP conversion...\n');
  
  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch {
    console.error('❌ Sharp is not installed. Please run: npm install --save-dev sharp');
    process.exit(1);
  }
  
  for (const dir of IMAGE_DIRECTORIES) {
    console.log(`📁 Processing ${dir}...`);
    await processDirectory(dir);
    console.log('');
  }
  
  console.log('✨ WebP conversion complete!');
}

main().catch(console.error);