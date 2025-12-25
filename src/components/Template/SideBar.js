import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactIcons from '../Contact/ContactIcons';
import SidebarNav from './SidebarNav';
import { getSidebarPhoto } from '../../data/photos';

var today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
today = today.toLocaleDateString(undefined, options);

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
              <p><a href="http://www.abishekganesh.com/">abishekganesh.com</a></p>
            </div>
          </div>
        </section>

        <section className="blurb">
          <h2>About</h2>
          <p>Hi, I&apos;m Abishek. I hope that {today} is the happiest day of your life <br></br><br></br>
            <a href="https://youtu.be/LQ488QrqGE4?t=125">
              <i>Reach for the stars, so if you fall, you land on a cloud
              <br></br>- Ye </i>
            </a>

          </p>
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
