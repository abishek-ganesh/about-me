import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * TeaserCard - a pull quote that points at the page it came from.
 */
const TeaserCard = ({ quote, cta, to }) => (
  <figure className="teaser-card">
    <blockquote className="teaser-quote">{quote}</blockquote>
    <figcaption className="teaser-footer">
      <Link to={to} className="link-with-arrow">
        {cta}
        <span className="arrow">→</span>
      </Link>
    </figcaption>
  </figure>
);

TeaserCard.propTypes = {
  quote: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default TeaserCard;
