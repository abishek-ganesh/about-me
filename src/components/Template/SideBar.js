import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage 

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Abishek Ganesh</h2>
        <p><a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a></p>
        <p><a href="http://www.abishekganesh.com/">abishekganesh.com</a></p>
        <p><a href="http://abishekganesh.crypto/">abishekganesh.crypto</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abishek. I was raised in central Ohio and moved to the Silicon 
      Valley after college to pursue my dreams. <br></br>
      I like creating awesome solutions to solve big problems. <br></br><br></br>
        <a href="https://en.wikipedia.org/wiki/Brave_New_World">
          <i>We don't hope to achieve a brave new world, a perfectionist Utopia, 
          but rather a more modest and desirable objective - a genuinely human society 
          <br></br>- A. Huxley </i>
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
