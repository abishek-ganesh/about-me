import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AnimatedPhoto = ({
  src,
  alt = '',
  size = 'medium',
  shape = 'rectangle',
  animation = 'fadeInScale',
  hoverEffect = 'zoom',
  delay = 0,
  className = '',
  onClick = () => {},
  caption = '',
  overlayContent = null,
  lazyLoad = true,
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Size classes mapping
  const sizeClasses = {
    small: 'animated-photo--small',
    medium: 'animated-photo--medium',
    large: 'animated-photo--large',
    xlarge: 'animated-photo--xlarge',
    full: 'animated-photo--full'
  };

  // Shape classes mapping
  const shapeClasses = {
    rectangle: '',
    rounded: 'animated-photo--rounded',
    circle: 'animated-photo--circle'
  };

  // Animation classes mapping
  const animationClasses = {
    fadeIn: 'animation--fade-in',
    fadeInScale: 'animation--fade-in-scale',
    slideUp: 'animation--slide-up',
    slideDown: 'animation--slide-down',
    slideLeft: 'animation--slide-left',
    slideRight: 'animation--slide-right',
    zoomIn: 'animation--zoom-in',
    parallax: 'animation--parallax'
  };

  // Hover effect classes mapping
  const hoverClasses = {
    none: '',
    zoom: 'hover--zoom',
    rotate: 'hover--rotate',
    brightness: 'hover--brightness',
    blur: 'hover--blur',
    grayscale: 'hover--grayscale'
  };

  // Intersection Observer for entrance animations
  useEffect(() => {
    if (!lazyLoad || !containerRef.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = containerRef.current;
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [lazyLoad]);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Combine all classes
  const containerClasses = [
    'animated-photo',
    sizeClasses[size],
    shapeClasses[shape],
    isLoaded ? 'is-loaded' : '',
    isVisible ? animationClasses[animation] : '',
    hoverClasses[hoverEffect],
    className
  ].filter(Boolean).join(' ');

  // Apply animation delay
  const containerStyle = {
    animationDelay: `${delay}ms`
  };

  return (
    <div 
      ref={containerRef}
      className={containerClasses}
      style={containerStyle}
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(e) => e.key === 'Enter' && onClick && onClick()}
    >
      <div className="animated-photo__wrapper">
        {/* Placeholder while loading */}
        {!isLoaded && (
          <div className="animated-photo__placeholder">
            <div className="animated-photo__skeleton"></div>
          </div>
        )}
        
        {/* Main image */}
        <img
          ref={imgRef}
          src={isVisible || !lazyLoad ? src : ''}
          alt={alt}
          onLoad={handleImageLoad}
          className="animated-photo__image"
          loading={lazyLoad ? 'lazy' : 'eager'}
          width={width}
          height={height}
        />

        {/* Overlay content */}
        {overlayContent && (
          <div className="animated-photo__overlay">
            {overlayContent}
          </div>
        )}

        {/* Caption */}
        {caption && (
          <div className="animated-photo__caption">
            <p>{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

AnimatedPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
  shape: PropTypes.oneOf(['rectangle', 'rounded', 'circle']),
  animation: PropTypes.oneOf([
    'fadeIn', 'fadeInScale', 'slideUp', 'slideDown', 
    'slideLeft', 'slideRight', 'zoomIn', 'parallax'
  ]),
  hoverEffect: PropTypes.oneOf([
    'none', 'zoom', 'rotate', 'brightness', 'blur', 'grayscale'
  ]),
  delay: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
  caption: PropTypes.string,
  overlayContent: PropTypes.node,
  lazyLoad: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

export default AnimatedPhoto;