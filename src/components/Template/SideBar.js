import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_hsSquare.jpg`} alt="" />
      </Link>
      <header>
        <h2>Abishek Ganesh</h2>
        <p><a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a></p>
        <p><a href="http://www.abishekganesh.com/">abishekganesh.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abishek. I hope that today is the best, most happiest day of your life <br></br><br></br>
        <a href="https://www.youtube.com/watch?v=LQ488QrqGE4">
          <i>Reach for the stars, so if you fall, you land on a cloud 
          <br></br>- Ye </i>
        </a>
        
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Abishek Ganesh <Link to="/">abishekganesh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
