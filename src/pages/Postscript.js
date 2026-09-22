import React from 'react';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import PersonalStats from '../components/Stats/PersonalStats';
import Quote from '../components/common/Quote';
import { getPhotosForContext } from '../data/photos';

const postscriptSections = [
  // Not `intro` (SideBar renders one on every page) and not `postscript`,
  // which is the article id and is on the page-container allowlist
  { id: 'closing', label: 'Postscript' },
  { id: 'numbers', label: 'The Numbers' },
];

const Postscript = () => {
  const [postscriptPhoto] = getPhotosForContext('contact');

  return (
  <Main
    title="Postscript"
    description="The last page: a few numbers Abishek Ganesh keeps track of, and how to get in touch."
    sidebarSections={postscriptSections}
  >
    <article className="post page" id="postscript">
      <div className="page-title">
        <h1>Postscript</h1>
        <span className="page-subtitle">The last page, a few numbers, and how to reach me</span>
      </div>

      <section id="closing" className="postscript-intro u-mb-4">
        <div className="postscript-intro-content">
          <AnimatedPhoto
            src={postscriptPhoto.path}
            alt={postscriptPhoto.metadata?.description || 'Abishek Ganesh teaching'}
            size="medium"
            shape="rounded"
            animation="fadeInScale"
            hoverEffect="brightness"
            className="postscript-photo"
            width={300}
            height={300}
          />
          <div className="postscript-intro-text">
            <p className="u-text-lg">
              You have reached the end of the site, so here is the part that does not belong on any of the
              other pages: a few numbers I actually keep track of. The age below is live, counting up while
              you read it, to more decimal places than anyone asked for. The travel numbers link to real
              maps, and the countries one is the number I most want to change.
            </p>
            <p className="u-text-lg u-mb-0">
              If any of this was useful, or you have something you want built, or you want to tell me I am
              wrong about a Ye album, my email is in the sidebar. I read everything that comes from an
              actual person.
            </p>
          </div>
        </div>
      </section>

      <section id="numbers" className="section-content">
        <div className="section-header">
          <h2>The Numbers</h2>
        </div>
        <PersonalStats />
      </section>


      <Quote id="stats" />
    </article>
  </Main>
  );
};

export default Postscript;
