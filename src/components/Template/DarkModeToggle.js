import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import './DarkModeToggle.scss';

const DarkModeToggle = ({ floating = false }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={`dark-mode-toggle ${floating ? 'floating' : ''}`}
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        className="toggle-icon"
      />
      {!floating && (
        <span className="toggle-text">
          {isDarkMode ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;