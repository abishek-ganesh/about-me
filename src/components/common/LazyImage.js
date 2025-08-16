import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3C/svg%3E',
  onLoad = () => {},
  webpSrc = null,
  fallbackSrc = null,
  sizes = null,
  srcSet = null,
  loading = 'lazy',
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Native lazy loading support check
  const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;

  useEffect(() => {
    let observer;
    
    if (imgRef.current && !supportsLazyLoading) {
      // Use Intersection Observer for browsers without native lazy loading
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
      
      observer.observe(imgRef.current);
    } else if (supportsLazyLoading) {
      // For browsers with native lazy loading, set as in view immediately
      setIsInView(true);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [imageRef, supportsLazyLoading, threshold, rootMargin]);

  useEffect(() => {
    if (isInView) {
      // Check WebP support
      const checkWebPSupport = () => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          const isSupported = webP.height === 2;
          
          if (isSupported && webpSrc) {
            loadImage(webpSrc);
          } else {
            loadImage(src);
          }
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      };

      const loadImage = (imageSrc) => {
        const img = new Image();
        
        img.onload = () => {
          setImageSrc(imageSrc);
          setIsLoaded(true);
          onLoad();
        };
        
        img.onerror = () => {
          if (fallbackSrc && imageSrc !== fallbackSrc) {
            loadImage(fallbackSrc);
          } else {
            setImageSrc(src);
            setIsLoaded(true);
          }
        };
        
        img.src = imageSrc;
      };

      if (webpSrc) {
        checkWebPSupport();
      } else {
        loadImage(src);
      }
    }
  }, [isInView, src, webpSrc, fallbackSrc, onLoad]);

  return (
    <picture>
      {isInView && webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      {isInView && srcSet && (
        <source srcSet={srcSet} sizes={sizes} />
      )}
      <img
        ref={(el) => {
          imgRef.current = el;
          setImageRef(el);
        }}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${className} ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoaded ? 1 : 0.8,
          ...style,
        }}
        loading={supportsLazyLoading ? loading : undefined}
        sizes={sizes}
        onLoad={() => {
          if (supportsLazyLoading) {
            setIsLoaded(true);
            onLoad();
          }
        }}
      />
    </picture>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onLoad: PropTypes.func,
  webpSrc: PropTypes.string,
  fallbackSrc: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
};

export default LazyImage;