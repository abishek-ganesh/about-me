import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useScrollDirection from '../../hooks/useScrollDirection';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const { visible } = useScrollDirection();
  
  return (
  <header id="header" className={visible ? '' : 'nav-hidden'}>
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <NavLink 
              to={l.path}
              activeClassName="active"
              exact={l.path === '/'}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
};

export default Navigation;