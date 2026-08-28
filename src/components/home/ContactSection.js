import React from 'react';
import ContactIcons from '../Contact/ContactIcons';

/**
 * ContactSection - CTA and social links
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
    </div>
  );
};

export default ContactSection;
