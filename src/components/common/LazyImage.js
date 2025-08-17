import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './LazyImage.scss';

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderSrc = null,
  errorSrc = '/images/image-placeholder.svg',
  onLoad = () => {},
  onError = () => {},
  threshold = 0.1,
  rootMargin = '50px',
  width,
  height,
  loading = 'lazy',
  sizes,
  srcSet,
  critical = false, // For above-the-fold images like sidebar
  showSpinner = true,
}) => {
  // For critical images, load immediately
  const [imageSrc, setImageSrc] = useState(critical ? src : placeholderSrc);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;
    
    // Skip lazy loading for critical images
    if (critical) {
      setImageSrc(src);
      return;
    }
    
    if (imageRef && !isLoaded) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold,
            rootMargin,
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setImageSrc(src);
      }
    }

    return () => {
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src, threshold, rootMargin, isLoaded, critical]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    setIsError(false);
    onLoad(e);
  };

  const handleError = (e) => {
    setIsError(true);
    setIsLoaded(true);
    if (errorSrc && imageSrc !== errorSrc) {
      setImageSrc(errorSrc);
    }
    onError(e);
  };

  const aspectRatio = width && height ? (height / width) * 100 : null;

  return (
    <div 
      className={`lazy-image-container ${className} ${isLoaded ? 'loaded' : 'loading'} ${isError ? 'error' : ''}`}
      ref={containerRef}
      style={aspectRatio ? { paddingBottom: `${aspectRatio}%` } : undefined}
    >
      {!isLoaded && !isError && showSpinner && !critical && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      
      <picture>
        {/* WebP version with fallback */}
        {srcSet && (
          <>
            <source
              type="image/webp"
              srcSet={srcSet.webp}
              sizes={sizes}
            />
            <source
              type="image/jpeg"
              srcSet={srcSet.jpeg || srcSet.jpg}
              sizes={sizes}
            />
          </>
        )}
        
        <img
          ref={setImageRef}
          src={imageSrc || placeholderSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          width={width}
          height={height}
          className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''}`}
        />
      </picture>
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderSrc: PropTypes.string,
  errorSrc: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
  sizes: PropTypes.string,
  srcSet: PropTypes.shape({
    webp: PropTypes.string,
    jpeg: PropTypes.string,
    jpg: PropTypes.string,
  }),
  critical: PropTypes.bool,
  showSpinner: PropTypes.bool,
};

export default LazyImage;