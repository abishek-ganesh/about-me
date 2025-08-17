import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PhotoCarousel = ({ photos = [], className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (photos.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [photos.length]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const goToPhoto = (index) => setCurrentIndex(index);

  if (!photos || photos.length === 0) return null;

  return (
    <div className={`photo-carousel ${className}`}>
      {/* Main photo display */}
      <div className="photo-carousel__main">
        <div className="photo-carousel__photo-container">
          {photos.map((photo, index) => (
            <div
              key={photo.id || index}
              className={`photo-carousel__photo ${index === currentIndex ? 'photo-carousel__photo--active' : ''}`}
            >
              <img
                src={photo.path}
                alt={photo.alt || photo.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {photo.caption && (
                <div className="photo-carousel__caption">
                  <p>{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {photos.length > 1 && (
          <>
            <button className="photo-carousel__arrow photo-carousel__arrow--prev" onClick={goToPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="photo-carousel__arrow photo-carousel__arrow--next" onClick={goToNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        {/* Indicators */}
        {photos.length > 1 && (
          <div className="photo-carousel__indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`photo-carousel__indicator ${index === currentIndex ? 'photo-carousel__indicator--active' : ''}`}
                onClick={() => goToPhoto(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="photo-carousel__thumbnails">
          <div className="photo-carousel__thumbnails-wrapper">
            {photos.map((photo, index) => (
              <button
                key={photo.id || index}
                className={`photo-carousel__thumbnail ${index === currentIndex ? 'photo-carousel__thumbnail--active' : ''}`}
                onClick={() => goToPhoto(index)}
              >
                <img src={photo.path} alt={`Thumbnail ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;