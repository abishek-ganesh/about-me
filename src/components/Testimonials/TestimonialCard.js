import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, company, text, rating, image } = testimonial;

  const renderStars = () => {
    if (!rating) return null;
    
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa fa-star${i < rating ? '' : '-o'}`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <i className="fa fa-quote-left quote-icon" aria-hidden="true" />
        <p className="testimonial-text">{text}</p>
      </div>
      
      <div className="testimonial-author">
        {image && (
          <img 
            src={image} 
            alt={`${name} - ${company}`}
            className="author-image"
          />
        )}
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-details">
            {role} {company && `at ${company}`}
          </p>
        </div>
      </div>
      
      {renderStars()}
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
};

export default TestimonialCard;