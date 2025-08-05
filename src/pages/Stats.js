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
    <article className="post page" id="stats">
      <div className="page-title">
        <h1>Stats & Facts</h1>
        <span className="page-subtitle">Numbers, achievements, and fun facts about my journey in AI and beyond</span>
      </div>

      <section className="section-content">
        <div className="section-header">
          <h2>Professional Impact</h2>
        </div>
        <div className="grid grid--4 grid--gap-sm u-mb-3">
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">130%</div>
              <div className="u-text-white u-font-medium">Revenue Growth Led</div>
              <div className="u-text-sm u-text-white u-opacity-75">$1.3M → $3M in 7 months</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">2,200+</div>
              <div className="u-text-white u-font-medium">Sales Reps Managed</div>
              <div className="u-text-sm u-text-white u-opacity-75">During $3B HPE merger</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">1M+</div>
              <div className="u-text-white u-font-medium">Daily ML Predictions</div>
              <div className="u-text-sm u-text-white u-opacity-75">Real-time infrastructure</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">60%</div>
              <div className="u-text-white u-font-medium">MTTR Reduction</div>
              <div className="u-text-sm u-text-white u-opacity-75">System reliability improvement</div>
            </div>
          </div>
        </div>
        <div className="grid grid--4 grid--gap-sm">
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">20+</div>
              <div className="u-text-white u-font-medium">Students Taught</div>
              <div className="u-text-sm u-text-white u-opacity-75">AI Bootcamp instructor</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">$2M+</div>
              <div className="u-text-white u-font-medium">Quarterly Programs</div>
              <div className="u-text-sm u-text-white u-opacity-75">Spiff management</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">1,000+</div>
              <div className="u-text-white u-font-medium">Event Attendees</div>
              <div className="u-text-sm u-text-white u-opacity-75">Community organizer</div>
            </div>
          </div>
          <div className="card card--gradient u-text-center">
            <div className="card-body">
              <div className="u-text-3xl u-font-bold u-text-white u-mb-1">15</div>
              <div className="u-text-white u-font-medium">Team Members Led</div>
              <div className="u-text-sm u-text-white u-opacity-75">Sales Ops Director</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="card card--elevated">
          <div className="card-body">
            <h3 className="u-text-center u-mb-3">Personal Stats</h3>
            <div className="grid grid--4 grid--gap-lg">
              <div className="u-text-center">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Current Age</div>
                <div className="u-text-2xl u-font-bold u-text-primary" style={{ fontFamily: "'Courier New', monospace" }}>
                  <Age />
                </div>
              </div>
              <div className="u-text-center u-relative">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Current Location</div>
                <div className="u-text-2xl u-font-bold u-text-primary">Santa Clara</div>
                <a 
                  href="https://www.google.com/maps/place/Santa+Clara,+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="u-absolute"
                  style={{ top: '0', right: '0' }}
                  aria-label="View on map"
                >
                  <i className="fa fa-map-marker u-text-muted" />
                </a>
              </div>
              <div className="u-text-center u-relative">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Countries Visited</div>
                <div className="u-text-2xl u-font-bold u-text-primary">
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
                  className="u-absolute"
                  style={{ top: '0', right: '0' }}
                  aria-label="View travel map"
                >
                  <i className="fa fa-globe u-text-muted" />
                </a>
              </div>
              <div className="u-text-center u-relative">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">US States Visited</div>
                <div className="u-text-2xl u-font-bold u-text-primary">
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
                  className="u-absolute"
                  style={{ top: '0', right: '0' }}
                  aria-label="View states map"
                >
                  <i className="fa fa-map u-text-muted" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="card">
          <div className="card-body">
            <h2 className="u-text-center u-mb-3">Fun Facts</h2>
            <div className="grid grid--1 grid--gap-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Brain">🧠</span>
                <span className="u-text-dark">
                  I've trained neural networks that have processed over 1 billion data points
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Teacher">👨‍🏫</span>
                <span className="u-text-dark">
                  Teaching AI bootcamp: 3 hours/day, 3 days/week, 6 months of intensive learning
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Voice">🎙️</span>
                <span className="u-text-dark">
                  Professional voice actor with commercial demos and character work
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Graduate">🎓</span>
                <span className="u-text-dark">
                  Completed Georgia Tech MS CS with perfect 4.0 GPA while working full-time
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Coffee">☕</span>
                <span className="u-text-dark">
                  Estimated 5,000+ cups of coffee consumed while debugging ML models
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2 u-bg-light u-rounded">
                <span className="u-text-2xl" role="img" aria-label="Code">💻</span>
                <span className="u-text-dark">
                  Comfortable coding in 5+ languages, with Python being my daily driver
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta u-mt-4">
        <h2>Let's Add to These Numbers</h2>
        <p>
          Whether it's building AI solutions that impact millions or teaching the next 
          generation of engineers, I'm always excited about new challenges.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn--primary">View My Projects</Link>
          <Link to="/contact" className="btn btn--secondary">Get in Touch</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Stats;
