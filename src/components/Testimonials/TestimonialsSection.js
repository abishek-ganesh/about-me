import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = ({ testimonials, showPlaceholder = false }) => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { value: 'all', label: 'All' },
    { value: 'ai-consulting', label: 'AI Consulting' },
    { value: 'teaching', label: 'Teaching' },
    { value: 'voice-acting', label: 'Voice Acting' },
  ];
  
  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' || t.projectType === filter
  );
  
  if (testimonials.length === 0 && !showPlaceholder) {
    return null; // Don't show section if no testimonials and no placeholder
  }
  
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What People Say</h2>
        <p className="section-subtitle">
          {showPlaceholder 
            ? "Coming soon"
            : "Feedback from clients, students, and collaborators"
          }
        </p>
      </div>
      
      {testimonials.length > 3 && (
        <div className="testimonials-filter">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-button ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
      
      <div className="testimonials-grid">
        {filteredTestimonials.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial}
          />
        ))}
      </div>
      
      {showPlaceholder && (
        <div className="placeholder-notice">
          <i className="fa fa-clock-o" />
          <p>Coming soon</p>
        </div>
      )}
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string,
    text: PropTypes.string.isRequired,
    projectType: PropTypes.string,
  })).isRequired,
  showPlaceholder: PropTypes.bool,
};

export default TestimonialsSection;