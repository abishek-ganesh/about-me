import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import routes from '../../data/routes';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  // Get all routes for hamburger menu
  const allRoutes = routes.filter(route => !route.index);
  
  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <button
        className={`hamburger-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      {isOpen && (
        <div className="hamburger-overlay" onClick={toggleMenu} aria-hidden="true" />
      )}
      
      <nav className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-menu-header">
          <h2>Menu</h2>
          <button
            className="hamburger-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-times" />
          </button>
        </div>
        
        <div className="hamburger-menu-content">
          <ul className="hamburger-menu-nav">
            {allRoutes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  activeClassName="active"
                  onClick={toggleMenu}
                >
                  <i className={`fas ${route.icon}`} />
                  <span>{route.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="hamburger-menu-footer">
            <button
              className="dark-mode-toggle-menu"
              onClick={toggleDarkMode}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
              <span>Switch to {darkMode ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;