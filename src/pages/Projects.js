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
    </article>
  </Main>
);

export default Projects;
