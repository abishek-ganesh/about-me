import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import routes from '../../data/routes';

const MobileNav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  // Get main navigation items (limit to 4 for mobile bottom nav)
  const mainRoutes = routes.slice(0, 4);
  
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        {mainRoutes.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            className="mobile-nav-item"
            activeClassName="active"
            exact={link.index}
          >
            <i className={`fas ${link.icon || 'fa-file'}`} />
            <span>{link.label}</span>
          </NavLink>
        ))}
        <button
          className="mobile-nav-item dark-mode-nav"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;