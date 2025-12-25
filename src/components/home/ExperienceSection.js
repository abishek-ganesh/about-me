import React from 'react';
import { Link } from 'react-router-dom';
import { featuredExperience } from '../../data/homepage';

/**
 * ExperienceSection - Featured work positions
 */
const ExperienceSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">Experience</h2>

      <div className="experience-list">
        {featuredExperience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-dates">{job.daterange}</div>
              <div className="experience-info">
                <h3 className="experience-position">{job.position}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
            </div>
            <p className="experience-description">{job.description}</p>
          </div>
        ))}
      </div>

      <div className="section-cta">
        <Link to="/resume" className="link-with-arrow">
          View Full Resume
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceSection;
