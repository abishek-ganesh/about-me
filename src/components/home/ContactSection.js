import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

/**
 * ContactSection - CTA and social links
 */
const ContactSection = () => {
  return (
    <div className="section-content contact-section-content">
      <h2 className="section-heading">Get In Touch</h2>

      <p className="contact-intro">
        I'm always interested in hearing about new projects and opportunities.
        Whether you need help implementing cutting-edge AI or just want to chat
        about what's next in the space, let's connect.
      </p>

      <div className="contact-cta-buttons">
        <a
          href="mailto:abishek.ganesh30@gmail.com"
          className="btn btn-primary"
        >
          Say Hello
        </a>
        <Link to="/contact" className="btn btn-secondary">
          Schedule a Call
        </Link>
      </div>

      <div className="contact-social">
        <ContactIcons />
      </div>
    </div>
  );
};

export default ContactSection;
