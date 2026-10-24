import React from 'react';

import Main from '../layouts/Main';
import { homepageSections, aboutContent } from '../data/homepage';

// Section components
import AboutSection from '../components/home/AboutSection';
import SignpostSection from '../components/home/SignpostSection';
import HeroIntro from '../components/home/HeroIntro';

const Index = () => {
  return (
    <Main sidebarSections={homepageSections}>
      <article className="post page homepage" id="index">
        {/* Hero Section */}
        <section id="hero" className="homepage-hero">
          <HeroIntro headline={aboutContent.intro}>
            So I build AI that does, as VP of Technology &amp; AI at Appa Health, and I teach
            anyone willing to learn how to build it too.
          </HeroIntro>
        </section>

        {/* About Section */}
        <section id="about" className="homepage-section">
          <AboutSection />
        </section>

        {/* Signposts into the rest of the site */}
        <section id="signposts" className="homepage-section">
          <SignpostSection />
        </section>
      </article>
    </Main>
  );
};

export default Index;
