import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const PhotoCarousel = ({
  photos = [],
  autoPlay = true,
  interval = 5000,
  showThumbnails = true,
  showCaptions = true,
  transitionType = 'fade',
  className = '',
  onPhotoChange = () => {},
  pauseOnHover = true,
  showIndicators = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % photos.length;
      onPhotoChange(newIndex);
      return newIndex;
    });
  }, [photos.length, onPhotoChange]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? photos.length - 1 : prevIndex - 1;
      onPhotoChange(newIndex);
      return newIndex;
    });
  }, [photos.length, onPhotoChange]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused && photos.length > 1) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPlaying, isPaused, interval, photos.length, handleNext]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, handleNext, handlePrev]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    onPhotoChange(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div
      className={`photo-carousel photo-carousel--${transitionType} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Photo carousel"
      aria-live="polite"
    >
      {/* Main photo display */}
      <div className="photo-carousel__main">
        <div className="photo-carousel__photo-container">
          {photos.map((photo, index) => (
            <div
              key={photo.id || index}
              className={`photo-carousel__photo ${
                index === currentIndex ? 'photo-carousel__photo--active' : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={photo.path}
                alt={photo.metadata?.description || photo.story?.title || 'Gallery photo'}
                loading={index === 0 ? 'eager' : 'lazy'}
                style={photo.style ? { objectPosition: photo.style.objectPosition } : undefined}
              />
              {showCaptions && photo.story?.caption && (
                <div className="photo-carousel__caption">
                  <p>{photo.story.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && photos.length > 1 && (
          <>
            <button
              className="photo-carousel__arrow photo-carousel__arrow--prev"
              onClick={handlePrev}
              aria-label="Previous photo"
              tabIndex={0}
            >
              <span>‹</span>
            </button>
            <button
              className="photo-carousel__arrow photo-carousel__arrow--next"
              onClick={handleNext}
              aria-label="Next photo"
              tabIndex={0}
            >
              <span>›</span>
            </button>
          </>
        )}

        {/* Progress indicators */}
        {showIndicators && photos.length > 1 && (
          <div className="photo-carousel__indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`photo-carousel__indicator ${
                  index === currentIndex ? 'photo-carousel__indicator--active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`Go to photo ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail navigation */}
      {showThumbnails && photos.length > 1 && (
        <div className="photo-carousel__thumbnails">
          <div className="photo-carousel__thumbnails-wrapper">
            {photos.map((photo, index) => (
              <button
                key={photo.id || index}
                className={`photo-carousel__thumbnail ${
                  index === currentIndex ? 'photo-carousel__thumbnail--active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`View ${photo.story?.title || `photo ${index + 1}`}`}
                tabIndex={0}
              >
                <img
                  src={photo.path}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                  style={photo.style ? { objectPosition: photo.style.objectPosition } : undefined}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Play/pause control */}
      {autoPlay && photos.length > 1 && (
        <button
          className="photo-carousel__play-pause"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          tabIndex={0}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      )}
    </div>
  );
};

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      path: PropTypes.string.isRequired,
      metadata: PropTypes.shape({
        description: PropTypes.string,
      }),
      story: PropTypes.shape({
        title: PropTypes.string,
        caption: PropTypes.string,
      }),
    })
  ),
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  showThumbnails: PropTypes.bool,
  showCaptions: PropTypes.bool,
  transitionType: PropTypes.oneOf(['fade', 'slide', 'zoom']),
  className: PropTypes.string,
  onPhotoChange: PropTypes.func,
  pauseOnHover: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showArrows: PropTypes.bool,
};

export default PhotoCarousel;