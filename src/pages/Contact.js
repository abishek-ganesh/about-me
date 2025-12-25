import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import { getPhotosForContext } from '../data/photos';

const Contact = () => {
  const contactPhotos = getPhotosForContext('contact');
  const contactPhoto = contactPhotos[0] || { path: '/images/august-2025/website-05.jpg' };
  
  return (
  <Main
    title="Contact"
    description="Schedule an AI Strategy Session | State-of-the-Art RAG Systems, AI Agents, and Cutting-Edge Implementations"
  >
    <article className="post page" id="contact">
      <div className="page-title">
        <h1>Let's Implement What's Next</h1>
        <span className="page-subtitle">Ready to deploy cutting-edge AI - RAG systems, AI agents, and whatever breakthrough comes next</span>
      </div>

      <section className="contact-intro u-mb-4">
        <div className="contact-intro-content">
          <AnimatedPhoto
            src={contactPhoto.path}
            alt={contactPhoto.metadata?.description || "Abishek Ganesh - Approachable AI Specialist"}
            size="medium"
            shape="rounded"
            animation="fadeInScale"
            hoverEffect="brightness"
            className="contact-photo"
            width={300}
            height={300}
          />
          <div className="contact-intro-text">
            <p className="u-text-lg">
              Hi! I'm Abishek. Whether you're looking to implement cutting-edge AI solutions or need a voice that connects with your audience, 
              I'd love to hear from you. I believe in making advanced technology accessible and creating genuine connections through every project.
            </p>
            <p className="u-text-lg u-mb-0">
              Let's explore how we can work together to bring your vision to life - whether that's through state-of-the-art RAG systems, 
              AI agents, or compelling voice work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="grid grid--2 grid--gap-lg">
          <div className="card card--elevated u-text-center">
            <div className="card-body">
              <i className="fa fa-envelope u-text-3xl u-text-primary u-block u-mb-3" />
              <h2 className="u-mb-2">Schedule AI Strategy Session</h2>
              <div className="u-text-xl u-mb-2">
                <a href="mailto:abishek.ganesh30@gmail.com?subject=AI Strategy Session Request" className="u-text-primary u-font-medium">
                  abishek.ganesh30@gmail.com
                </a>
              </div>
              <p className="u-text-muted u-mb-0">
                For cutting-edge AI implementations, RAG systems, and agent development
              </p>
            </div>
          </div>

          <div className="card card--elevated u-text-center">
            <div className="card-body">
              <i className="fa fa-microphone u-text-3xl u-text-primary u-block u-mb-3" />
              <h2 className="u-mb-2">Voice Acting Inquiries</h2>
              <div className="u-text-xl u-mb-2">
                <a href="mailto:abishek.ganesh30@gmail.com?subject=Voice Acting Inquiry" className="u-text-primary u-font-medium">
                  Book a Voice Session
                </a>
              </div>
              <p className="u-text-muted u-mb-0">
                For commercial voiceovers, character work, and audio production
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="card card--gradient">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Quick Information</h2>
            <div className="grid grid--3 grid--gap-lg u-text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Location</div>
                <div className="u-text-lg u-font-medium">Santa Clara, CA</div>
              </div>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Time Zone</div>
                <div className="u-text-lg u-font-medium">Pacific (PST/PDT)</div>
              </div>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Response Time</div>
                <div className="u-text-lg u-font-medium">Within 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-text-center">
        <h2 className="u-mb-2">Connect on Social Media</h2>
        <p className="u-text-lg u-text-muted u-mb-3">
          Follow my journey, insights, and updates across professional networks
        </p>
        <ContactIcons />
      </section>

      <section className="section-content">
        <div className="card card--elevated">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Current Availability</h2>
            <div className="grid grid--3 grid--gap-lg">
              <div className="u-text-center u-p-3 u-bg-light u-rounded">
                <h3 className="u-mb-1">State-of-the-Art AI Implementation</h3>
                <p className="u-text-sm u-text-muted u-mb-2">RAG, Agents, and emerging tech</p>
                <span className="tag tag--success">Available</span>
              </div>
              <div className="u-text-center u-p-3 u-bg-light u-rounded">
                <h3 className="u-mb-1">Cutting-Edge AI Training</h3>
                <p className="u-text-sm u-text-muted u-mb-2">Teaching the latest in AI/ML</p>
                <span className="tag tag--warning">Limited</span>
              </div>
              <div className="u-text-center u-p-3 u-bg-light u-rounded">
                <h3 className="u-mb-1">Technical Speaking</h3>
                <p className="u-text-sm u-text-muted u-mb-2">RAG, Agents, and AI Innovation</p>
                <span className="tag tag--success">Available</span>
              </div>
            </div>
            <p className="u-text-center u-text-sm u-text-muted u-font-italic u-mt-3 u-mb-0">
              * All times are in Pacific Time (PST/PDT). International collaborations welcome!
            </p>
          </div>
        </div>
      </section>

      <section className="section-cta u-mt-4">
        <h2>Ready to Deploy Tomorrow's AI Today?</h2>
        <p>
          I help companies implement truly cutting-edge AI - RAG systems, AI agents, and whatever breakthrough comes next. 
          Let's leverage the latest technologies in smart ways that help your users.
        </p>
        <div className="cta-buttons">
          <a href="mailto:abishek.ganesh30@gmail.com?subject=AI Strategy Session Request" className="btn btn--primary">
            <i className="fa fa-envelope" /> Schedule AI Strategy Session
          </a>
          <Link to="/projects" className="btn btn--secondary">
            View Cutting-Edge Implementations
          </Link>
        </div>
      </section>
    </article>
  </Main>
  );
};

export default Contact;
