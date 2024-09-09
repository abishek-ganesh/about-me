import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Voiceover = () => (
  <Main
    title="Voiceover"
    description="Learn about Abishek Ganesh's voiceover career."
  >
    <article className="post" id="voiceovers">
      <h2 data-testid="heading">Listen to my new commercial demo reel below</h2>
      <br></br><br></br>
      <figure>
        <audio controls src={`${PUBLIC_URL}/voiceover/commercial_reel.mp3`}></audio>
        <br></br><br></br>
        <figcaption>For inquiries, email me at <a href="mailto:abishek.ganesh30@gmail.com">abishek.ganesh30@gmail.com</a></figcaption>
      </figure>
      <img src={`${PUBLIC_URL}/images/vo_logo1.jpg`} width='100%' alt="" />
    </article>
  </Main>
);

export default Voiceover;
