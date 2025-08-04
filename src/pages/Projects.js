import React from 'react';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Abishek Ganesh's projects."
  >
    <article className="post" id="projects">
      <h2 data-testid="heading">Project list coming soon</h2>
      <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio controls src={`${PUBLIC_URL}/voiceover/commercial_reel.mp3`}></audio>
      </figure>

      {/* <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Projects;
