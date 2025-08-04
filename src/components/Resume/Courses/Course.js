import React from 'react';
import PropTypes from 'prop-types';
import { CourseDataType } from '../../../prop-types';

const Course = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.number}:</h4>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: CourseDataType.isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
