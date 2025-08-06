// Image optimization utilities

/**
 * Generate responsive image srcset
 * @param {string} imagePath - Base image path
 * @param {Array} sizes - Array of widths to generate
 * @returns {string} srcset string
 */
export const generateSrcSet = (imagePath, sizes = [300, 600, 900, 1200]) => {
  // For now, return the same image for all sizes
  // In production, you'd have a build process to generate these
  return sizes.map(size => `${imagePath} ${size}w`).join(', ');
};

/**
 * Get optimal image size based on container width
 * @param {number} containerWidth - Container width in pixels
 * @returns {string} Optimal size descriptor
 */
export const getOptimalImageSize = (containerWidth) => {
  if (containerWidth <= 300) return 'small';
  if (containerWidth <= 600) return 'medium';
  if (containerWidth <= 900) return 'large';
  return 'xlarge';
};

/**
 * Preload critical images
 * @param {Array} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Check if browser supports WebP
 * @returns {Promise<boolean>}
 */
export const supportsWebP = () => {
  return new Promise(resolve => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get image format based on browser support
 * @returns {Promise<string>} 'webp' or 'jpg'
 */
export const getPreferredImageFormat = async () => {
  const hasWebP = await supportsWebP();
  return hasWebP ? 'webp' : 'jpg';
};

/**
 * Lazy load images with intersection observer
 * @param {string} selector - CSS selector for images
 * @param {Object} options - Intersection observer options
 */
export const lazyLoadImages = (selector = 'img[data-src]', options = {}) => {
  const images = document.querySelectorAll(selector);
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('lazy-loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01,
    ...options
  });

  images.forEach(img => imageObserver.observe(img));
  
  return imageObserver;
};