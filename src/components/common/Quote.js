import React from 'react';
import PropTypes from 'prop-types';

import quotes from '../../data/kanye';

// Renders a Kanye lyric easter egg on a single line. `footer` closes out a page,
// `inline` is the sidebar blurb treatment. Only entries with a url render as a link.
const Quote = ({ id, variant = 'footer', className = '' }) => {
  const quote = quotes[id];
  if (!quote) return null;

  const attributed = quote.attribution !== false;

  // The sidebar keeps its original two-line form; page footers stay on one line.
  const body =
    variant === 'inline' ? (
      <i>
        {quote.text}
        {attributed && (
          <>
            <br />- Ye
          </>
        )}
      </i>
    ) : (
      <i>{attributed ? `${quote.text} - Ye` : quote.text}</i>
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
  variant: PropTypes.oneOf(['footer', 'inline', 'section']),
  className: PropTypes.string,
};

Quote.defaultProps = {
  variant: 'footer',
  className: '',
};

export default Quote;
