import React from 'react';
import { Link } from 'react-router-dom';
import { featuredTestimonials } from '../../data/testimonials';
import { teachingStats } from '../../data/teaching';

/**
 * TeachingSection - Featured student feedback from the AI bootcamp
 */
const TeachingSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">Teaching</h2>

      <p className="about-paragraph">
        I lead an intensive AI bootcamp, taking students from Python fundamentals to agentic
        systems over six months. It is the work I am proudest of.
      </p>

      <div className="about-highlights">
        {teachingStats.map((stat) => (
          <div key={stat.label} className="highlight-item">
            <span className="highlight-value">{stat.value}</span>
            <span className="highlight-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid--3 grid--gap-lg u-mt-3">
        {featuredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="card card--elevated">
            <div className="card-body">
              <p className="u-font-italic u-mb-2">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="u-text-sm u-font-semibold u-mb-0">
                - {testimonial.name}, {testimonial.company} graduate
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-cta">
        <Link to="/teaching" className="link-with-arrow">
          Read What My Students Said
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default TeachingSection;
