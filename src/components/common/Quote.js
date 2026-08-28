import React from 'react';
import PropTypes from 'prop-types';

import quotes from '../../data/kanye';

// Renders a Kanye lyric easter egg. No attribution by design - the quote speaks
// for itself. `footer` closes out a page, `inline` is the sidebar blurb,
// `section` defers to whatever the surrounding section styles supply.
const Quote = ({ id, variant = 'footer', className = '' }) => {
  const quote = quotes[id];
  if (!quote) return null;

  const body = <i>{quote.text}</i>;

  return (
    <p className={`kanye-quote kanye-quote--${variant} ${className}`.trim()}>
      {quote.url ? (
        <a
          href={quote.url}
          target="_blank"
          rel="noopener noreferrer"
          title={quote.title || `${quote.song} - ${quote.album}`}
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
  variant: PropTypes.oneOf(['footer', 'inline', 'section']),
  className: PropTypes.string,
};

Quote.defaultProps = {
  variant: 'footer',
  className: '',
};

export default Quote;
