import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Abishek Ganesh's personal website. California based software engineer, "
    + 'focused on solutions to large-scale problems using cutting-edge technology'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my personal website</Link></h2>
          <p>
            <br></br>
            I am truly grateful that you are here, spending time to get to know me. <br></br><br></br>
            My goal for this page is to be an evolving autobiographical diary, of sorts, showcasing my
            career, projects, journey, and passions. <br></br><br></br>
            The technical domains I am currently most interested in are Full-Stack development, 
            Artificial Intelligence/Machine Learning, Data Science, and Blockchain.<br></br><br></br>
            I have spent most of my life focused on healthcare, education, and climate-related causes (read on to learn more),
            and am always looking for new frontiers to embark on with incredible people.<br></br><br></br>
            Speaking of which, I am always interested in opportunities to partner with amazing brands and individuals (that's you!) to solve
            big problems with innovative technology. 
            
          </p>
        </div>
      </header>
      <p> 
        <i>Feel free to reach out to me via &nbsp;
          <a href={`mailto:abishekganesh30@gmail.com`}>
          email
          </a>
        </i>
      </p>
    </article>
  </Main>
);

export default Index;
