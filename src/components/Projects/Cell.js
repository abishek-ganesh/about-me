import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="project-header">
      <header>
        <h3>{data.title}</h3>
        <h4>{data.subtitle}</h4>
        <div className="project-meta">
          <span className="category">{data.category}</span>
          <time className="published">{dayjs(data.date).format('MMMM YYYY')}</time>
        </div>
      </header>
      {data.image && (
        <div className="image-placeholder">
          {/* Using placeholder until actual images are added */}
          <div className="placeholder-content">
            <span>{data.category}</span>
          </div>
        </div>
      )}
      <div className="description">
        <p>{data.desc}</p>
        {data.client && <p className="client"><strong>Client:</strong> {data.client}</p>}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    client: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;