import React from 'react';

import Main from '../layouts/Main';
import { homepageSections, aboutContent } from '../data/homepage';

// Section components
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import ProjectsSection from '../components/home/ProjectsSection';
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
            Production-grade RAG systems, AI agents, and multi-agent orchestration—deployed
            before your competition knows they exist.
          </p>
          <div className="hero-specialties">
            <span className="specialty">RAG Systems</span>
            <span className="specialty">AI Agents</span>
            <span className="specialty">Multi-Agent Orchestration</span>
            <span className="specialty">Production ML</span>
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

        {/* Projects Section */}
        <section id="projects" className="homepage-section">
          <ProjectsSection />
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
