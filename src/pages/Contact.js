import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Get in touch with Abishek Ganesh for AI consulting, collaborations, or speaking engagements"
  >
    <article className="post" id="contact">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Let's Connect</h1>
          <p className="subtitle">
            I'm always interested in discussing AI projects, teaching opportunities, 
            or innovative collaborations. Let's explore how we can work together.
          </p>
        </header>

        <div className="contact-methods">
          <div className="contact-card">
            <i className="fa fa-envelope contact-icon" />
            <h2>Email Me Directly</h2>
            <div className="contact-info">
              <a href="mailto:abishek.ganesh30@gmail.com">
                abishek.ganesh30@gmail.com
              </a>
            </div>
            <p className="contact-description">
              Best for project inquiries, consulting requests, and detailed discussions
            </p>
          </div>

          <div className="contact-card">
            <i className="fa fa-microphone contact-icon" />
            <h2>Voice Acting Inquiries</h2>
            <div className="contact-info">
              <a href="mailto:abishek.ganesh30@gmail.com?subject=Voice Acting Inquiry">
                Book a Voice Session
              </a>
            </div>
            <p className="contact-description">
              For commercial voiceovers, character work, and audio production
            </p>
          </div>
        </div>

        <section className="quick-contact">
          <h2>Quick Information</h2>
          <div className="contact-grid">
            <div className="quick-item">
              <div className="quick-label">Location</div>
              <div className="quick-value">Santa Clara, CA</div>
            </div>
            <div className="quick-item">
              <div className="quick-label">Time Zone</div>
              <div className="quick-value">Pacific (PST/PDT)</div>
            </div>
            <div className="quick-item">
              <div className="quick-label">Response Time</div>
              <div className="quick-value">Within 24-48 hours</div>
            </div>
          </div>
        </section>

        <section className="social-section">
          <h2>Connect on Social Media</h2>
          <p className="social-description">
            Follow my journey, insights, and updates across professional networks
          </p>
          <ContactIcons />
        </section>

        <section className="availability-section">
          <h2>Current Availability</h2>
          <div className="availability-grid">
            <div className="availability-item">
              <h3>AI Consulting</h3>
              <p>Open for new projects starting Q1 2025</p>
              <span className="status available">Available</span>
            </div>
            <div className="availability-item">
              <h3>Teaching & Workshops</h3>
              <p>Limited availability during bootcamp (March-Sept)</p>
              <span className="status limited">Limited</span>
            </div>
            <div className="availability-item">
              <h3>Speaking Engagements</h3>
              <p>Virtual and in-person opportunities</p>
              <span className="status available">Available</span>
            </div>
          </div>
          <p className="timezone-note">
            * All times are in Pacific Time (PST/PDT). International collaborations welcome!
          </p>
        </section>

        <section className="contact-cta">
          <h2>Ready to Start?</h2>
          <p>
            Whether you need AI expertise, want to book a voice session, or have an 
            exciting collaboration in mind, I'd love to hear from you.
          </p>
          <div className="cta-buttons">
            <a href="mailto:abishek.ganesh30@gmail.com" className="button primary">
              <i className="fa fa-envelope" /> Send an Email
            </a>
            <Link to="/resume" className="button">
              View My Experience
            </Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default Contact;
