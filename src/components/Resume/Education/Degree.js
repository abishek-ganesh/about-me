import React from 'react';
import { DegreeDataType } from '../../../prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school"><a href={data.link}>{data.school}</a> - {data.year} {data.gpa}<br/>{data.details}</p>
      <br/>
    </header>
  </article>
);

Degree.propTypes = {
  data: DegreeDataType.isRequired,
};

export default Degree;
