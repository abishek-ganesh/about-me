import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * TeaserCard - a pull quote that points at the page it came from. Attribution
 * is optional: Francisco's is a real student quote, the rest are the pages
 * speaking for themselves.
 */
const TeaserCard = ({ quote, name, cta, to }) => (
  <figure className="teaser-card">
    <blockquote className="teaser-quote">{quote}</blockquote>
    <figcaption className="teaser-footer">
      <span className="teaser-name">{name}</span>
      <Link to={to} className="link-with-arrow">
        {cta}
        <span className="arrow">→</span>
      </Link>
    </figcaption>
  </figure>
);

TeaserCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string,
  cta: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

TeaserCard.defaultProps = {
  name: '',
};

export default TeaserCard;
