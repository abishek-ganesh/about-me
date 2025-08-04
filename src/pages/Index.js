import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Abishek Ganesh - AI Consultant building custom AI solutions that bridge technology and human creativity"}
  >
    <article className="post" id="index">
      <section className="hero">
        <img src={`${PUBLIC_URL}/images/me_hs2.jpg`} alt="Abishek Ganesh" className="hero-image" />
        <header>
          <h1 className="hero-title">Building AI Solutions by Day,<br/>Crafting Stories by Night</h1>
          <p className="hero-subtitle">
            AI Consultant | Georgia Tech MS CS | Voice Actor
          </p>
        </header>
      </section>

      <section className="current-focus">
        <h2>Current Focus</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <h3>🧠 AI Consulting</h3>
            <p>Partnering with companies to design and implement custom AI solutions, from predictive modeling to LLM applications that drive real business value.</p>
          </div>
          <div className="focus-item">
            <h3>🎭 Voice Acting</h3>
            <p>Professional voice actor bringing characters to life for commercials, animation, and audiobooks. <Link to="/voiceover">Listen to my demo reel →</Link></p>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>Career Highlights</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            <span className="highlight-metric">4.0 GPA</span>
            <span className="highlight-label">Georgia Tech MS Computer Science</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-metric">5+ Years</span>
            <span className="highlight-label">Building ML Systems in Production</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in collaborating on AI/ML projects or voice acting opportunities.
        </p>
        <div className="cta-buttons">
          <Link to="/resume" className="button primary">View My Experience</Link>
          <a href="mailto:abishekganesh30@gmail.com" className="button">Get In Touch</a>
        </div>
      </section>
    </article>
  </Main>
);

export default Index;
