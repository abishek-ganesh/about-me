import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import useScrollDirection from '../../hooks/useScrollDirection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { themeQuotes } from '../../data/kanye';
import './DarkModeToggle.scss';

const LYRIC_DURATION = 2500;

const DarkModeToggle = ({ floating = false }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { visible } = useScrollDirection();
  const [lyric, setLyric] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleToggle = () => {
    // isDarkMode is the mode we're leaving, so the lyric matches the incoming one
    setLyric(themeQuotes[isDarkMode ? 'light' : 'dark'].text);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setLyric(null), LYRIC_DURATION);
    toggleDarkMode();
  };

  return (
    <button
      className={`dark-mode-toggle ${floating ? 'floating' : ''} ${floating && !visible ? 'nav-hidden' : ''}`}
      onClick={handleToggle}
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
      {lyric && (
        <span className="toggle-lyric" aria-hidden="true">
          {lyric}
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;