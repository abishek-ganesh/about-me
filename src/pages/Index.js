import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage


const Index = () => (
  <Main
    description={"Abishek Ganesh's personal website. California based software engineer, "
    + 'focused on solutions to large-scale problems using cutting-edge technology'}
  >
    <img src={`${PUBLIC_URL}/images/me4.jpg`} width='100%' alt="" />
    <article className="post" id="index">
      
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my personal website</Link></h2>
          <p>
            <br></br>
            Thank you for visiting and taking the time to get to know me. <br></br><br></br>
            My goal is for this page to be an evolving autobiographical diary, of sorts, showcasing my
            career highlights, projects, journey, and passions. <br></br><br></br>
            The technical domains I am currently most interested in are Full-Stack development, 
            Artificial Intelligence/Machine Learning, Data Science, Cloud, and Blockchain technology.<br></br><br></br>
            I have spent most of my life focused on healthcare, education, and climate-related causes (read on to learn more),
            and am always looking for new frontiers to embark on with incredible people.<br></br><br></br>
            Speaking of which, I am always interested in opportunities to partner with amazing brands and individuals (that&#39;s you!) to solve
            big problems with cutting-edge technology. 
          </p>
        </div>
      </header>
      <p> 
        <i>Feel free to reach out to me via&nbsp;
          <a href={`mailto:abishekganesh30@gmail.com`}>
          email
          </a>
          &nbsp;or, if your feeling generous, send me some crypto @
          <a href={`http://abishekganesh.crypto/`}>
          abishekganesh.crypto
          </a>
          </i><br></br><br></br> 
        <i>Webpage hosted on Heroku and created with React and, of course, JavaScript, HTML, CSS.
          
        </i>
      </p>
    </article>
  </Main>
);

export default Index;
