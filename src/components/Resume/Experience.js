import React from 'react';
import PropTypes from 'prop-types';

import ResumeSection from '../common/ResumeSection';
import Job from './Experience/Job';

const Experience = ({ data }) => (
  <ResumeSection
    sectionName="experience"
    title="Experience"
    data={data}
    ItemComponent={Job}
    keyField="company"
  />
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    details: PropTypes.string,
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
