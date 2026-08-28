import React from 'react';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import { getPhotosForContext } from '../data/photos';

const Contact = () => {
  const contactPhotos = getPhotosForContext('contact');
  const contactPhoto = contactPhotos[0] || { path: '/images/august-2025/website-05.jpg' };
  
  return (
  <Main
    title="Contact"
    description="Get in touch with Abishek Ganesh"
  >
    <article className="post page" id="contact">
      <div className="page-title">
        <h1>Get in Touch</h1>
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

      <section className="section-content u-text-center">
        <p className="u-text-xl u-mb-0">
          Reach out on email:{' '}
          <a href="mailto:abishek.ganesh30@gmail.com" className="u-text-primary u-font-medium">
            abishek.ganesh30@gmail.com
          </a>
        </p>
      </section>

      <section className="section-content">
        <div className="card card--gradient">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Quick Information</h2>
            <div className="grid grid--3 grid--gap-lg u-text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Location</div>
                <div className="u-text-lg u-font-medium">New York City, NY</div>
              </div>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Time Zone</div>
                <div className="u-text-lg u-font-medium">Eastern (EST/EDT)</div>
              </div>
              <div>
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Response Time</div>
                <div className="u-text-lg u-font-medium">Within 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  </Main>
  );
};

export default Contact;
