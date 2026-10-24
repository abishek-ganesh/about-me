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

/**
 * HeroIntro - the homepage headline, revealed word by word on the first visit of a
 * session, followed by the line beneath it. Words always render as spans so the
 * markup is identical whether or not it animates.
 */
const HeroIntro = ({ headline, children }) => {
  const [play, setPlay] = useState(false);
  const words = headline.split(' ');

  // Before paint, so the headline never flashes in fully and then re-animates
  useLayoutEffect(() => {
    setPlay(shouldPlay());
  }, []);

  // Siblings, not a wrapper: the hero is a centered flex column and a wrapper would
  // change how each line centers. Both carry the word count for the delay math.
  const timing = { '--hero-words': words.length };
  const playClass = play ? ' hero-intro--play' : '';

  return (
    <>
      <h1 className={`hero-tagline${playClass}`} style={timing} aria-label={headline}>
        {words.map((word, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            <span className="hero-word" aria-hidden="true" style={{ '--i': i }}>{word}</span>
            {i < words.length - 1 ? ' ' : null}
          </React.Fragment>
        ))}
      </h1>
      <p className={`hero-description${playClass}`} style={timing}>{children}</p>
    </>
  );
};

HeroIntro.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeroIntro;
