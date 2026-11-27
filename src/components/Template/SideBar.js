import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactIcons from '../Contact/ContactIcons';
import SidebarNav from './SidebarNav';
import Quote from '../common/Quote';
import { getSidebarPhoto } from '../../data/photos';

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// Weekday is shown lowercase ("thursday, November 26, 2026")
const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
const today = now.toLocaleDateString(undefined, options).replace(weekday, weekday.toLowerCase());

const SideBar = ({ sections = [] }) => {
  const sidebarPhoto = getSidebarPhoto();
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  
  useEffect(() => {
    // Check if this is the first page load in this session
    if (!sessionStorage.getItem('sidebarImageLoaded')) {
      setIsFirstLoad(true);
      sessionStorage.setItem('sidebarImageLoaded', 'true');
    }
  }, []);
  
  return (
    <section id="sidebar">
      <div className="sidebar-intro-container">
        <section id="intro">
          <div className="logo">
            <img 
              src={sidebarPhoto.path} 
              alt={sidebarPhoto.metadata?.description || "Abishek Ganesh"}
              className={isFirstLoad ? 'first-load' : ''}
            />
            <div className="logo-overlay">
              <h2>Abishek Ganesh</h2>
              <p><a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a></p>
            </div>
          </div>
        </section>

        <section className="blurb">
          <p>hi, I&apos;m Abishek..I hope that {today} is the happiest day of your life</p>
          <Quote id="sidebar" variant="inline" />
        </section>

        {/* Table of Contents Navigation */}
        {sections && sections.length > 0 && (
          <SidebarNav sections={sections} />
        )}
      </div>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Abishek Ganesh <Link to="/">abishekganesh.com</Link>.</p>
    </section>
  </section>
  );
};

SideBar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

SideBar.defaultProps = {
  sections: [],
};

export default SideBar;
