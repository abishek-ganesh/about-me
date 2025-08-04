import React from 'react';
import PropTypes from 'prop-types';

import ResumeSection from '../common/ResumeSection';
import Course from './Courses/Course';

const sortCourses = (a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
};

const Courses = ({ data }) => (
  <ResumeSection
    sectionName="courses"
    title="Selected Courses"
    data={data}
    ItemComponent={Course}
    keyField="title"
    sortFunction={sortCourses}
    wrapperElement="ul"
    wrapperProps={{ className: "course-list" }}
  />
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
