import React from 'react';
import { aboutContent } from '../../data/homepage';

/**
 * AboutSection - Short bio and key highlights
 */
const AboutSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">About</h2>

      <div className="about-bio">
        {aboutContent.bio.map((paragraph, index) => (
          <p key={index} className="about-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="about-highlights">
        {aboutContent.highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            <span className="highlight-value">{highlight.value}</span>
            <span className="highlight-label">{highlight.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
