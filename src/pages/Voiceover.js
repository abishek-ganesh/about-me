import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Voiceover = () => (
  <Main
    title="Voiceover"
    description="Professional voice actor bringing characters to life for commercials, animation, and audiobooks."
  >
    <article className="post" id="voiceover">
      <div className="voiceover-container">
        <header className="voiceover-header">
          <h1>Voice Acting Portfolio</h1>
          <p className="subtitle">
            Bringing stories to life through character voices, commercial narration, and audiobook performance
          </p>
        </header>

        <section className="demo-reel-section">
          <h2>Commercial Demo Reel</h2>
          <div className="reel-intro">
            <p>
              Listen to my latest commercial voice over demo reel featuring a variety of styles and characters.
            </p>
          </div>
          <div className="audio-player">
            <audio controls src={`${PUBLIC_URL}/voiceover/commercial_reel.mp3`}>
              Your browser does not support the audio element.
            </audio>
            <p className="player-caption">
              For voiceover inquiries, email me at{' '}
              <a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a>
            </p>
          </div>
        </section>

        <section className="services-section">
          <h2>Voice Acting Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon" role="img" aria-label="Commercial">📺</span>
              <h3>Commercials</h3>
              <p>Engaging voice overs for radio, TV, and online advertisements</p>
            </div>
            <div className="service-card">
              <span className="service-icon" role="img" aria-label="Animation">🎬</span>
              <h3>Animation</h3>
              <p>Character voices for animated films, series, and video games</p>
            </div>
            <div className="service-card">
              <span className="service-icon" role="img" aria-label="Audiobook">📚</span>
              <h3>Audiobooks</h3>
              <p>Narration for fiction and non-fiction audiobook productions</p>
            </div>
            <div className="service-card">
              <span className="service-icon" role="img" aria-label="E-Learning">🎓</span>
              <h3>E-Learning</h3>
              <p>Clear, engaging narration for educational and training content</p>
            </div>
          </div>
        </section>

        <section className="voiceover-skills">
          <h2>Voice Characteristics & Skills</h2>
          <div className="skills-list">
            <div className="skill-item">Warm & Friendly</div>
            <div className="skill-item">Authoritative</div>
            <div className="skill-item">Character Voices</div>
            <div className="skill-item">Natural Conversational</div>
            <div className="skill-item">Multiple Accents</div>
            <div className="skill-item">Dramatic Reading</div>
            <div className="skill-item">Comedy Timing</div>
            <div className="skill-item">Technical Narration</div>
          </div>
        </section>

        <section className="background-section">
          <h2>Why Voice Acting?</h2>
          <div className="background-content">
            <p>
              As both an AI engineer and voice actor, I bring a unique perspective to creative projects. 
              My technical background helps me understand the precision needed in voice work, while my 
              artistic side brings characters and stories to life with authentic emotion.
            </p>
            <p>
              Voice acting allows me to explore the human side of communication—something that 
              complements my work in AI. Understanding how humans convey emotion, meaning, and 
              nuance through voice helps me build better AI systems and more natural interactions.
            </p>
            <p>
              Whether it's a commercial that needs to connect with audiences or a character that 
              needs depth and personality, I approach each project with professionalism and creativity.
            </p>
          </div>
        </section>

        <section className="logo-section">
          <img 
            src={`${PUBLIC_URL}/images/vo_logo1.jpg`} 
            alt="Abishek Ganesh Voice Acting Logo" 
            className="logo-image"
          />
        </section>

        <section className="voiceover-cta">
          <h2>Let's Create Something Amazing</h2>
          <p>
            Looking for a versatile voice actor for your next project? 
            I'd love to bring your script to life.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a>
            </p>
          </div>
          <div className="cta-buttons">
            <a href="mailto:abishek.ganesh30@gmail.com" className="button primary">
              Request a Custom Audition
            </a>
            <Link to="/contact" className="button">
              General Contact
            </Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default Voiceover;
