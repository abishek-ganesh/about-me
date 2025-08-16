import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary',
  fullPage = false,
  text = 'Loading...',
  showText = true 
}) => {
  const sizeClasses = {
    small: 'spinner--small',
    medium: 'spinner--medium',
    large: 'spinner--large',
  };

  const colorClasses = {
    primary: 'spinner--primary',
    secondary: 'spinner--secondary',
    light: 'spinner--light',
    dark: 'spinner--dark',
  };

  const spinnerContent = (
    <div className={`spinner ${sizeClasses[size]} ${colorClasses[color]}`}>
      <div className="spinner__circle">
        <div className="spinner__circle-gradient"></div>
        <div className="spinner__circle-inner"></div>
      </div>
      {showText && (
        <p className="spinner__text">{text}</p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="spinner-container spinner-container--full">
        {spinnerContent}
      </div>
    );
  }

  return (
    <div className="spinner-container">
      {spinnerContent}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']),
  fullPage: PropTypes.bool,
  text: PropTypes.string,
  showText: PropTypes.bool,
};

export default LoadingSpinner;