import React from 'react';
import PropTypes from 'prop-types';

import quotes from '../../data/kanye';

// Renders a Kanye lyric easter egg. `inline` matches the sidebar blurb treatment,
// `epigraph` sits under a page title.
const Quote = ({ id, variant = 'epigraph', className = '' }) => {
  const quote = quotes[id];
  if (!quote) return null;

  const showAttribution = quote.attribution !== false;

  const body = (
    <i>
      {quote.text}
      {showAttribution && (
        <>
          <br />
          - Ye
        </>
      )}
    </i>
  );

  return (
    <p className={`kanye-quote kanye-quote--${variant} ${className}`.trim()}>
      {quote.url ? (
        <a
          href={quote.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${quote.song} - ${quote.album}`}
        >
          {body}
        </a>
      ) : (
        body
      )}
    </p>
  );
};

Quote.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['epigraph', 'inline']),
  className: PropTypes.string,
};

Quote.defaultProps = {
  variant: 'epigraph',
  className: '',
};

export default Quote;
