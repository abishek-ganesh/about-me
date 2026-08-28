import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, text, rating, image } = testimonial;

  const renderStars = () => {
    if (!rating) return null;

    return (
      <div className="testimonial-quote-rating">
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
    <div className={`card card--elevated testimonial-quote-card ${className}`}>
      <div className="card-body">
        <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true" />
        <p className="testimonial-quote-text">
          &ldquo;{text}&rdquo;
        </p>

        <div className="testimonial-quote-author">
          {image && (
            <img src={image} alt={name} className="author-image" />
          )}
          <span className="author-name">{name}</span>
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