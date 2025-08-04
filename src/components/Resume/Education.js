import React from 'react';
import PropTypes from 'prop-types';

import ResumeSection from '../common/ResumeSection';
import Degree from './Education/Degree';

const Education = ({ data }) => (
  <ResumeSection
    sectionName="education"
    title="Education"
    data={data}
    ItemComponent={Degree}
    keyField="school"
  />
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.string,
    gpa: PropTypes.string,
    details: PropTypes.string,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
