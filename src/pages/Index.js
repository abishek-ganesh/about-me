import React from 'react';

import Main from '../layouts/Main';
import { homepageSections, aboutContent } from '../data/homepage';

// Section components
import AboutSection from '../components/home/AboutSection';
import SignpostSection from '../components/home/SignpostSection';

const Index = () => {
  return (
    <Main
      description="Abishek Ganesh - State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment"
      structuredDataType="home"
      sidebarSections={homepageSections}
    >
      <article className="post page homepage" id="index">
        {/* Hero Section */}
        <section id="hero" className="homepage-hero">
          <h1 className="hero-tagline">{aboutContent.intro}</h1>
          <p className="hero-description">
            VP of Technology &amp; AI at Appa Health and lead AI instructor. I build AI
            that solves real problems and uses the technology as a force for good, and I teach
            others to do the same.
          </p>
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
