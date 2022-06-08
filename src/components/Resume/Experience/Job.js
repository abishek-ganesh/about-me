import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4>{data.position}</h4>
      <p className="school"><a href={data.link}>{data.company}</a> - {data.daterange}</p>
      <p className="details">{data.details}</p>
      <br/>
    </header>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    //points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
