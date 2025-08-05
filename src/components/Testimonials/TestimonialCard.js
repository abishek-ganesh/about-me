import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, role, company, text, rating, image } = testimonial;

  const renderStars = () => {
    if (!rating) return null;
    
    return (
      <div className="u-flex u-gap-1 u-justify-center u-mt-3">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa fa-star${i < rating ? '' : '-o'} u-text-yellow-500`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`card card--elevated ${className}`}>
      <div className="card-body u-text-center">
        <i className="fa fa-quote-left u-text-2xl u-text-primary u-mb-3 u-block" aria-hidden="true" />
        <p className="u-text-lg u-line-height-relaxed u-mb-4 u-font-italic">
          "{text}"
        </p>
        
        <div className="u-flex u-items-center u-justify-center u-gap-3">
          {image && (
            <img 
              src={image} 
              alt={`${name} - ${company || role}`}
              className="u-w-12 u-h-12 u-rounded-full u-object-cover"
            />
          )}
          <div className="u-text-left">
            <h4 className="u-font-semibold u-text-dark u-mb-1">{name}</h4>
            <p className="u-text-sm u-text-muted u-mb-0">
              {role}{company && ` at ${company}`}
            </p>
          </div>
        </div>
        
        {renderStars()}
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

TestimonialCard.defaultProps = {
  className: '',
};

export default TestimonialCard;