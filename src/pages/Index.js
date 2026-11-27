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
            so I build AI that does, ethically..and my passion is teaching it to people with little
            to no technical background, so they can build the next generation of ethical AI products.
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
