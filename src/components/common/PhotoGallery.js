import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = ({
  photos = [],
  columns = 3,
  gap = '1rem',
  showCaptions = true,
  enableLightbox = true,
  className = '',
  filterCategories = [],
  onPhotoClick = () => {}
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Open lightbox
  const openLightbox = useCallback((index) => {
    if (enableLightbox) {
      setLightboxIndex(index);
      setLightboxOpen(true);
      document.body.style.overflow = 'hidden';
    }
    onPhotoClick(filteredPhotos[index], index);
  }, [enableLightbox, filteredPhotos, onPhotoClick]);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Navigate lightbox
  const navigateLightbox = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredPhotos.length
      : (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(newIndex);
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, navigateLightbox]);

  // Generate responsive grid columns
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${columns > 2 ? '250px' : '300px'}, 1fr))`,
    gap: gap,
    width: '100%'
  };

  return (
    <div className={`photo-gallery ${className}`}>
      {/* Category Filter */}
      {filterCategories.length > 0 && (
        <div className="photo-gallery__filters" role="tablist">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
            role="tab"
            aria-selected={selectedCategory === 'all'}
          >
            All
          </button>
          {filterCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Photo Grid */}
      <div 
        className="photo-gallery__grid" 
        style={gridStyles}
        role="region"
        aria-label="Photo gallery"
      >
        {filteredPhotos.map((photo, index) => (
          <div 
            key={index}
            className="photo-gallery__item"
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            tabIndex={enableLightbox ? 0 : -1}
            role={enableLightbox ? 'button' : 'img'}
            aria-label={`${photo.alt || photo.caption || `Photo ${index + 1}`}${enableLightbox ? '. Click to open in lightbox' : ''}`}
          >
            <div className="photo-wrapper">
              <img
                src={photo.path || photo.src}
                alt={photo.alt || photo.caption || `Gallery photo ${index + 1}`}
                loading="lazy"
                className="photo-gallery__image"
              />
              {showCaptions && photo.caption && (
                <div className="photo-gallery__caption">
                  <p>{photo.caption}</p>
                </div>
              )}
              {enableLightbox && (
                <div className="photo-gallery__overlay">
                  <i className="fa fa-search-plus" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="photo-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <i className="fa fa-times" />
          </button>
          
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous photo"
          >
            <i className="fa fa-chevron-left" />
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredPhotos[lightboxIndex]?.path || filteredPhotos[lightboxIndex]?.src}
              alt={filteredPhotos[lightboxIndex]?.alt || filteredPhotos[lightboxIndex]?.caption || 'Lightbox photo'}
              className="lightbox__image"
            />
            {showCaptions && filteredPhotos[lightboxIndex]?.caption && (
              <div className="lightbox__caption">
                <p>{filteredPhotos[lightboxIndex].caption}</p>
              </div>
            )}
            <div className="lightbox__counter">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next photo"
          >
            <i className="fa fa-chevron-right" />
          </button>
        </div>
      )}
    </div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    path: PropTypes.string,
    alt: PropTypes.string,
    caption: PropTypes.string,
    category: PropTypes.string
  })).isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
  showCaptions: PropTypes.bool,
  enableLightbox: PropTypes.bool,
  className: PropTypes.string,
  filterCategories: PropTypes.arrayOf(PropTypes.string),
  onPhotoClick: PropTypes.func
};

export default PhotoGallery;