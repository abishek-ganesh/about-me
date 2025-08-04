import React from 'react';
import { JobDataType } from '../../../prop-types';

const Job = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4>{data.position}</h4>
      <p className="school">{data.link ? <a href={data.link}>{data.company}</a> : data.company} - {data.daterange}</p>
      <p className="details">{data.details}</p>
      <br/>
    </header>
  </article>
);

Job.propTypes = {
  data: JobDataType.isRequired,
};

export default Job;
