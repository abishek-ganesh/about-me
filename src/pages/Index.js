import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Abishek Ganesh's personal website. California based software engineer, "
    + 'focused on solutions to large-scale problems using cutting-edge technology'}
  >
    <img src={`${PUBLIC_URL}/images/me_hs2.jpg`} width='100%' alt="" />
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my personal website</Link></h2>
          <p>
            <br></br>
            Thanks for visiting my personal website!<br></br><br></br>
            My goal is for this page to be an evolving autobiographical diary, of sorts, showcasing my
            career highlights, projects, journey, and passions. <br></br><br></br>
            The technical domains I am currently most interested in are
            Artificial Intelligence/Machine Learning, Blockchain technology, and Full Stack Development.<br></br><br></br>
            I am also pursuing a career in the arts - specifically Theater, Film, and Voiceover Acting.<br></br><br></br>
            Speaking of which, I am always interested in opportunities to partner with amazing brands and individuals (that&#39;s you!) to do 
            big things with great people.
            
          </p>
        </div>
      </header>
      <p> 
        <i>Feel free to reach out to me via&nbsp;
          <a href={`mailto:abishekganesh30@gmail.com`}>
          email.
          </a>
          &nbsp;or, if your feeling generous, send me some crypto @
          <a href={`http://abishekganesh.crypto/`}>
          abishekganesh.crypto
          </a>
        </i><br></br><br></br>
        <i>Webpage hosted on Github Pages and created with React and, of course, JavaScript, HTML, CSS.
          
        </i>
      </p>
    </article>
  </Main>
);

export default Index;
