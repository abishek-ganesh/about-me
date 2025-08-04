import React from 'react';
import PropTypes from 'prop-types';

const ResumeSection = ({ 
  sectionName, 
  title, 
  description,
  data, 
  ItemComponent, 
  keyField,
  sortFunction,
  wrapperElement: WrapperElement = React.Fragment,
  wrapperProps = {}
}) => {
  const sortedData = sortFunction ? data.sort(sortFunction) : data;
  
  const renderItems = () => {
    return sortedData.map((item, index) => (
      <ItemComponent
        data={item}
        key={item[keyField]}
        last={index === sortedData.length - 1}
      />
    ));
  };
  
  return (
    <div className={sectionName}>
      <div className="link-to" id={sectionName} />
      <div className="title">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <WrapperElement {...wrapperProps}>
        {renderItems()}
      </WrapperElement>
    </div>
  );
};

ResumeSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  data: PropTypes.array.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
  keyField: PropTypes.string.isRequired,
  sortFunction: PropTypes.func,
  wrapperElement: PropTypes.elementType,
  wrapperProps: PropTypes.object,
};

ResumeSection.defaultProps = {
  description: null,
  sortFunction: null,
  wrapperElement: React.Fragment,
  wrapperProps: {},
};

export default ResumeSection;