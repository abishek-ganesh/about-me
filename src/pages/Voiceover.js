import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Voiceover = () => (
  <Main
    title="Voiceover"
    description="Professional voice actor bringing characters to life for commercials, animation, and audiobooks."
  >
    <article className="post page" id="voiceover">
      <div className="page-title">
        <h1>Voice Acting Portfolio</h1>
        <span className="page-subtitle">Bringing stories to life through character voices, commercial narration, and audiobook performance</span>
      </div>

      <section className="section-content">
        <div className="card card--elevated">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Commercial Demo Reel</h2>
            <p className="u-text-center u-text-lg u-mb-3">
              Listen to my latest commercial voice over demo reel featuring a variety of styles and characters.
            </p>
            <div className="u-p-3 u-text-center">
              <audio
                controls
                preload="none"
                src={`${PUBLIC_URL}/voiceover/commercial_reel.mp3`}
                className="u-w-full"
                style={{ maxWidth: '600px' }}
              >
                Your browser does not support the audio element.
              </audio>
              <p className="u-mt-3 u-text-sm u-mb-0">
                For voiceover inquiries, email me at{' '}
                <a href="mailto:abishek.ganesh30@gmail.com" className="u-font-medium">
                  abishek.ganesh30@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="section-header">
          <h2>Voice Acting Services</h2>
        </div>
        <div className="grid grid--4 grid--gap-lg">
          <div className="card card--hover u-text-center">
            <div className="card-body">
              <span className="u-text-3xl u-block u-mb-2" role="img" aria-label="Commercial">📺</span>
              <h3 className="u-mb-2">Commercials</h3>
              <p className="u-text-sm u-text-muted u-mb-0">
                Engaging voice overs for radio, TV, and online advertisements
              </p>
            </div>
          </div>
          <div className="card card--hover u-text-center">
            <div className="card-body">
              <span className="u-text-3xl u-block u-mb-2" role="img" aria-label="Animation">🎬</span>
              <h3 className="u-mb-2">Animation</h3>
              <p className="u-text-sm u-text-muted u-mb-0">
                Character voices for animated films, series, and video games
              </p>
            </div>
          </div>
          <div className="card card--hover u-text-center">
            <div className="card-body">
              <span className="u-text-3xl u-block u-mb-2" role="img" aria-label="Audiobook">📚</span>
              <h3 className="u-mb-2">Audiobooks</h3>
              <p className="u-text-sm u-text-muted u-mb-0">
                Narration for fiction and non-fiction audiobook productions
              </p>
            </div>
          </div>
          <div className="card card--hover u-text-center">
            <div className="card-body">
              <span className="u-text-3xl u-block u-mb-2" role="img" aria-label="E-Learning">🎓</span>
              <h3 className="u-mb-2">E-Learning</h3>
              <p className="u-text-sm u-text-muted u-mb-0">
                Clear, engaging narration for educational and training content
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="card card--gradient">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Voice Characteristics & Skills</h2>
            <div className="grid grid--auto-sm grid--gap-sm u-mx-auto" style={{ maxWidth: '800px' }}>
              <span className="tag tag--large">Warm & Friendly</span>
              <span className="tag tag--large">Authoritative</span>
              <span className="tag tag--large">Character Voices</span>
              <span className="tag tag--large">Natural Conversational</span>
              <span className="tag tag--large">Multiple Accents</span>
              <span className="tag tag--large">Dramatic Reading</span>
              <span className="tag tag--large">Comedy Timing</span>
              <span className="tag tag--large">Technical Narration</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-text-center">
        <h2 className="u-mb-3">Why Voice Acting?</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="u-text-lg u-mb-3">
            As both an AI engineer and voice actor, I bring a unique perspective to creative projects.
            My technical background helps me understand the precision needed in voice work, while my
            artistic side brings characters and stories to life with authentic emotion.
          </p>
          <p className="u-text-lg u-mb-3">
            Voice acting allows me to explore the human side of communication—something that
            complements my work in AI. Understanding how humans convey emotion, meaning, and
            nuance through voice helps me build better AI systems and more natural interactions.
          </p>
          <p className="u-text-lg u-mb-0">
            Whether it's a commercial that needs to connect with audiences or a character that
            needs depth and personality, I approach each project with professionalism and creativity.
          </p>
        </div>
      </section>

      <section className="section-cta u-mt-4">
        <h2>Let's Create Something Amazing</h2>
        <p>
          Looking for a versatile voice actor for your next project? 
          I'd love to bring your script to life.
        </p>
        <div className="u-mb-3">
          <p className="u-mb-0">
            <strong>Email:</strong>{' '}
            <a href="mailto:abishek.ganesh30@gmail.com" className="u-text-primary">
              abishek.ganesh30@gmail.com
            </a>
          </p>
        </div>
        <div className="cta-buttons">
          <a href="mailto:abishek.ganesh30@gmail.com" className="btn btn--primary">
            Request a Custom Audition
          </a>
          <Link to="/contact" className="btn btn--secondary">
            General Contact
          </Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Voiceover;
