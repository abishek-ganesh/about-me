import React from 'react';

import Main from '../layouts/Main';
import { homepageSections, aboutContent } from '../data/homepage';

// Section components
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import TeachingSection from '../components/home/TeachingSection';
import ContactSection from '../components/home/ContactSection';

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
          <h1 className="hero-name">Abishek Ganesh</h1>
          <h2 className="hero-tagline">{aboutContent.intro}</h2>
          <p className="hero-description">
            VP of Technology &amp; AI at Appa Health, lead AI instructor, consultant. I ship AI
            that solves real problems and teach others to do the same.
          </p>
          <div className="hero-specialties">
            <span className="specialty">Production AI</span>
            <span className="specialty">Teaching</span>
            <span className="specialty">RAG &amp; Agents</span>
            <span className="specialty">Voice</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="homepage-section">
          <AboutSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="homepage-section">
          <ExperienceSection />
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="homepage-section">
          <TeachingSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="homepage-section">
          <ContactSection />
        </section>
      </article>
    </Main>
  );
};

export default Index;
