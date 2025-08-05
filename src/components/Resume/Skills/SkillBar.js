import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories, className = '' }) => {
  const { category, competency, title } = data;

  // Get category color for styling
  const categoryColor = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0] || '#2196f3';

  const widthPercentage = Math.min(100, Math.max((competency / 5.0) * 100.0, 0));

  return (
    <div className={`skill-bar-container ${className}`}>
      <div className="u-flex u-justify-between u-items-center u-mb-1">
        <span className="u-font-medium u-text-dark">{title}</span>
        <span className="u-text-sm u-text-muted">{competency} / 5</span>
      </div>
      <div className="skill-bar u-bg-light u-rounded-full u-overflow-hidden">
        <div 
          className="skill-progress u-h-2 u-rounded-full u-transition-all"
          style={{ 
            width: `${widthPercentage}%`,
            backgroundColor: categoryColor
          }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  className: PropTypes.string,
};

SkillBar.defaultProps = {
  categories: [],
  className: '',
};

export default SkillBar;
