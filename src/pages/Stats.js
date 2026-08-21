import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Quote from '../components/common/Quote';
import personalData from '../data/stats/personal';

const getPersonalStat = (key) => personalData.find((d) => d.key === key);

const Stats = () => {
  const countries = getPersonalStat('countries');
  const states = getPersonalStat('states');
  const location = getPersonalStat('location');

  return (
  <Main
    title="Stats"
    description="Interesting statistics and facts about Abishek Ganesh"
  >
    <article className="post page" id="stats">
      <div className="page-title">
        <h1>Stats & Facts</h1>
        <span className="page-subtitle">Numbers, achievements, and fun facts about my journey in AI and beyond</span>
      </div>

      <Quote id="stats" />

      <section className="section-content">
        <div className="card card--elevated">
          <div className="card-body">
            <h3 className="u-text-center u-mb-3">Personal Stats</h3>
            <div className="grid grid--4 grid--gap-lg">
              <div className="u-text-center">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Current Age</div>
                <div className="u-text-2xl u-font-bold u-text-primary" style={{ fontFamily: "'Courier New', monospace" }}>
                  {getPersonalStat('age').value}
                </div>
              </div>
              <div className="u-text-center u-relative">
                <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Current Location</div>
                <div className="u-text-2xl u-font-bold u-text-primary">{location.value.replace(', CA', '')}</div>
                <a
                  href={location.link}
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
                    href={countries.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-text-primary"
                    style={{ textDecoration: 'none' }}
                    title="View travel map"
                  >
                    {countries.value}
                  </a>
                </div>
                <a
                  href={countries.link}
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
                    href={states.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-text-primary"
                    style={{ textDecoration: 'none' }}
                    title="View states map"
                  >
                    {states.value}
                  </a>
                </div>
                <a
                  href={states.link}
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
              <div className="u-flex u-items-center u-gap-2 u-p-2">
                <span>
                  Teaching AI bootcamp: 3 hours/day, 3 days/week, 6 months of intensive learning
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2">
                <span>
                  Professional voice actor with commercial demos and character work
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2">
                <span>
                  Completed Georgia Tech MS CS with perfect 4.0 GPA while working full-time
                </span>
              </div>
              <div className="u-flex u-items-center u-gap-2 u-p-2">
                <span>
                  Chasing a dream of becoming the vegan Anthony Bourdain: {countries.value} countries
                  down, telling their stories one plant-based plate at a time
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
          <Link to="/contact" className="btn btn--secondary">Get in Touch</Link>
        </div>
      </section>
    </article>
  </Main>
  );
};

export default Stats;
