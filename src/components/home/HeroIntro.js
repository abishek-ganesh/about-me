import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { prefersReducedMotion } from '../../hooks/useReveal';

const PLAYED_KEY = 'heroRevealPlayed';

// Plays once per browser session; storage can throw in private modes, so fail quiet
const shouldPlay = () => {
  if (prefersReducedMotion()) return false;
  try {
    if (sessionStorage.getItem(PLAYED_KEY)) return false;
    sessionStorage.setItem(PLAYED_KEY, '1');
  } catch (e) {
    // No storage: play it, nothing to remember it with
  }
  return true;
};

// One span per character; CSS types them in by index. Inline spans add no line
// break opportunities, so words still wrap whole.
const toChars = (text) => [...text].map((ch, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <span key={i} className="hero-char" style={{ '--i': i }}>{ch}</span>
));

/**
 * HeroIntro - the homepage headline, typed out character by character on the first
 * visit of a session, then the line beneath it. Characters always render as spans so
 * the markup is identical whether or not it animates. Screen readers get the plain
 * text, not the spans.
 */
const HeroIntro = ({ headline, children }) => {
  const [play, setPlay] = useState(false);
  const line = typeof children === 'string' ? children : null;

  // Before paint, so the text never flashes in fully and then re-types
  useLayoutEffect(() => {
    setPlay(shouldPlay());
  }, []);

  // Siblings, not a wrapper: the hero is a centered flex column and a wrapper would
  // change how each line centers. Both carry the headline length for the delay math.
  const timing = { '--hero-chars': headline.length };
  const playClass = play ? ' hero-intro--play' : '';

  return (
    <>
      <h1 className={`hero-tagline${playClass}`} style={timing} aria-label={headline}>
        <span aria-hidden="true">{toChars(headline)}</span>
      </h1>
      <p className={`hero-description${playClass}`} style={timing}>
        {line ? (
          <>
            <span className="hero-sr-text">{line}</span>
            <span aria-hidden="true">{toChars(line)}</span>
          </>
        ) : children}
      </p>
    </>
  );
};

HeroIntro.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeroIntro;
