import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

/**
 * ContactSection - Homepage teaser. The closing note and the running personal
 * stats live on /postscript.
 */
const ContactSection = () => {
  return (
    <div className="section-content contact-section-content">
      <h2 className="section-heading">Get In Touch</h2>

      <p className="contact-intro">
        I like to be connected with like-minded individuals. Reach out.
      </p>

      <div className="contact-social">
        <ContactIcons />
      </div>

      <div className="section-cta">
        <Link to="/postscript" className="link-with-arrow">
          Read the postscript
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
