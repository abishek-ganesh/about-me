import React from 'react';
import { NavLink } from 'react-router-dom';
import useScrollDirection from '../../hooks/useScrollDirection';
import routes from '../../data/routes';

const MobileNav = () => {
  const { visible } = useScrollDirection();
  // Get the 6 most important routes for mobile bottom nav
  const mobileRoutes = [
    routes.find(r => r.index), // Home
    routes.find(r => r.path === '/about'),
    routes.find(r => r.path === '/resume'),
    routes.find(r => r.path === '/teaching'),
    routes.find(r => r.path === '/voiceover'),
    routes.find(r => r.path === '/contact'),
  ].filter(Boolean);
  
  return (
    <nav className={`mobile-nav ${visible ? '' : 'nav-hidden'}`}>
      <ul className="mobile-nav-list">
        {mobileRoutes.map((link) => (
          <li key={link.label} className="mobile-nav-item">
            <NavLink
              to={link.path}
              activeClassName="active"
              exact={link.index}
            >
              <i className={`mobile-nav-icon fas ${link.icon || 'fa-file'}`} />
              <span className="mobile-nav-label">
                {link.index ? 'Home' : link.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;