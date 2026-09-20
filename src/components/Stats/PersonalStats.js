import React from 'react';

import personalData from '../../data/stats/personal';

const getPersonalStat = (key) => personalData.find((d) => d.key === key);

// The four numbers worth keeping: a live-ticking age, the places that count as
// home, and how much of the map is covered. Each travel tile links to its map.
const PersonalStats = () => {
  const countries = getPersonalStat('countries');
  const states = getPersonalStat('states');
  const location = getPersonalStat('location');
  const hometowns = getPersonalStat('hometowns');

  return (
    <div className="card card--elevated">
      <div className="card-body">
        <div className="grid grid--4 grid--gap-lg">
          <div className="u-text-center">
            <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Current Age</div>
            <div className="u-text-2xl u-font-bold u-text-primary" style={{ fontFamily: "'Courier New', monospace" }}>
              {getPersonalStat('age').value}
            </div>
          </div>
          <div className="u-text-center u-relative">
            <div className="u-text-sm u-text-muted u-text-uppercase u-mb-1 u-font-semibold">Hometowns</div>
            {hometowns.value.map((city) => (
              <div key={city} className="u-font-bold u-text-primary">{city}</div>
            ))}
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
  );
};

export default PersonalStats;
