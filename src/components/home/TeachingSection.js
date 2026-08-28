import React from 'react';
import { Link } from 'react-router-dom';
import { teachingStats, teaserQuote } from '../../data/teaching';

/**
 * TeachingSection - Homepage teaser. The full survey data, capstone breakdown,
 * and student quote wall live on /teaching.
 */
const TeachingSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">Teaching</h2>

      <p className="about-paragraph">
        I lead an intensive AI bootcamp. Most of my students arrive as beginners who have never
        written a line of code, with no AI experience much past using ChatGPT. Six months later they
        are building state-of-the-art models and shipping them inside real applications. It is the
        work I am proudest of.
      </p>

      <div className="about-highlights">
        {teachingStats.map((stat) => (
          <div key={stat.label} className="highlight-item">
            <span className="highlight-value">{stat.value}</span>
            <span className="highlight-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <figure className="teaching-quote-card">
        <blockquote className="teaching-quote-text">{teaserQuote.text}</blockquote>
        <figcaption className="teaching-quote-footer">
          <span className="teaching-quote-name">{teaserQuote.name}</span>
          <Link to="/teaching" className="link-with-arrow">
            Read more student feedback
            <span className="arrow">→</span>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeachingSection;
