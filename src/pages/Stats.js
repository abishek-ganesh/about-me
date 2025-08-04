import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1991-09-22T16:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const Stats = () => (
  <Main
    title="Stats"
    description="Interesting statistics and facts about Abishek Ganesh"
  >
    <article className="post" id="stats">
      <div className="stats-container">
        <header className="stats-header">
          <h1>Stats & Facts</h1>
          <p className="subtitle">
            Numbers, achievements, and fun facts about my journey in AI and beyond
          </p>
        </header>

        <section className="stats-section professional-stats">
          <h2>Professional Impact</h2>
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-desc">Years in AI/ML</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-desc">Daily ML Predictions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">60%</div>
              <div className="stat-desc">MTTR Reduction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-desc">Students Taught</div>
            </div>
          </div>
        </section>

        <section className="stats-section personal-stats">
          <h3>Personal Stats</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Current Age</div>
              <div className="stat-value live-stat"><Age /></div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Current Location</div>
              <div className="stat-value">Santa Clara</div>
              <a 
                href="https://www.google.com/maps/place/Santa+Clara,+CA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="stat-link"
                aria-label="View on map"
              >
                <i className="fa fa-map-marker" />
              </a>
            </div>
            <div className="stat-card">
              <div className="stat-label">Countries Visited</div>
              <div className="stat-value">
                <a 
                  href="https://www.google.com/maps/d/u/1/edit?mid=1AAscWrtMqstqyYh8_4-nVF-cbpfYu7C9&usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  13
                </a>
              </div>
              <a 
                href="https://www.google.com/maps/d/u/1/edit?mid=1AAscWrtMqstqyYh8_4-nVF-cbpfYu7C9&usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="stat-link"
                aria-label="View travel map"
              >
                <i className="fa fa-globe" />
              </a>
            </div>
            <div className="stat-card">
              <div className="stat-label">US States Visited</div>
              <div className="stat-value">
                <a 
                  href="https://www.google.com/maps/d/u/1/edit?mid=1LxU2Vt_3DV1tFsBcOgjS_erGiyFfFJJF&usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  28
                </a>
              </div>
              <a 
                href="https://www.google.com/maps/d/u/1/edit?mid=1LxU2Vt_3DV1tFsBcOgjS_erGiyFfFJJF&usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="stat-link"
                aria-label="View states map"
              >
                <i className="fa fa-map" />
              </a>
            </div>
          </div>
        </section>

        <section className="stats-section fun-facts">
          <h2>Fun Facts</h2>
          <div className="facts-list">
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Brain">🧠</span>
              <span className="fact-text">
                I've trained neural networks that have processed over 1 billion data points
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Teacher">👨‍🏫</span>
              <span className="fact-text">
                Teaching AI bootcamp: 3 hours/day, 3 days/week, 6 months of intensive learning
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Voice">🎙️</span>
              <span className="fact-text">
                Professional voice actor with commercial demos and character work
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Graduate">🎓</span>
              <span className="fact-text">
                Completed Georgia Tech MS CS with perfect 4.0 GPA while working full-time
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Coffee">☕</span>
              <span className="fact-text">
                Estimated 5,000+ cups of coffee consumed while debugging ML models
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-icon" role="img" aria-label="Code">💻</span>
              <span className="fact-text">
                Comfortable coding in 5+ languages, with Python being my daily driver
              </span>
            </div>
          </div>
        </section>

        <section className="stats-cta">
          <h2>Let's Add to These Numbers</h2>
          <p>
            Whether it's building AI solutions that impact millions or teaching the next 
            generation of engineers, I'm always excited about new challenges.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="button primary">View My Projects</Link>
            <Link to="/contact" className="button">Get in Touch</Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default Stats;
