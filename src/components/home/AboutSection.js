import React from 'react';
import AnimatedPhoto from '../common/AnimatedPhoto';
import { aboutContent, aboutPhoto } from '../../data/homepage';

/**
 * AboutSection - Short bio and key highlights
 */
const AboutSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">About</h2>

      <div className="about-layout">
        <div className="about-bio">
          {aboutContent.bio.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="about-photo">
          <AnimatedPhoto
            src={aboutPhoto.src}
            alt={aboutPhoto.alt}
            size="full"
            shape="rounded"
            animation="slideUp"
          />
          <figcaption>{aboutPhoto.caption}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default AboutSection;
