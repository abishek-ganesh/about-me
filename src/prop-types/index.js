import PropTypes from 'prop-types';

// Common PropType definitions for reuse across components

// Common value type used in stats and other components
export const ValueType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.number,
  PropTypes.string,
]);

// React children prop type
export const ChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

// Stats table row/item data structure
export const StatItemType = PropTypes.shape({
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: ValueType,
});

// Resume data structures
export const DegreeDataType = PropTypes.shape({
  degree: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  gpa: PropTypes.string,
  details: PropTypes.string,
});

export const JobDataType = PropTypes.shape({
  link: PropTypes.string,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  daterange: PropTypes.string.isRequired,
  details: PropTypes.string,
});

export const CourseDataType = PropTypes.shape({
  link: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  university: PropTypes.string,
});

// Skill data structure
export const SkillDataType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  competency: PropTypes.number.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const SkillCategoryType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});