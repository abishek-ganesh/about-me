import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import testimonials, { placeholderTestimonials, socialProof } from '../data/testimonials';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Abishek Ganesh - Senior AI Engineer & Consultant specializing in ML infrastructure, RAG systems, and AI education"}
  >
    <article className="post" id="index">
      <section className="hero">
        <img src={`${PUBLIC_URL}/images/me_hs2.jpg`} alt="Abishek Ganesh" className="hero-image" />
        <header>
          <h1 className="hero-title">Building AI Solutions That Scale,<br/>Teaching the Next Generation</h1>
          <p className="hero-subtitle">
            Senior AI Engineer | AI Consultant | AI Instructor
          </p>
        </header>
      </section>

      <section className="current-focus">
        <h2>Current Focus</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <h3><span role="img" aria-label="Rocket">🚀</span> AI Engineering & Consulting</h3>
            <p>
              Helping companies build production-ready AI systems with 60% faster deployment times. 
              Specializing in RAG systems, ML infrastructure, and real-time AI applications that serve millions daily.
            </p>
          </div>
          <div className="focus-item">
            <h3><span role="img" aria-label="Teacher">👨‍🏫</span> AI Education</h3>
            <p>
              Lead instructor for intensive AI bootcamp (March-September 2025). Teaching 20+ students 
              from Python fundamentals to advanced generative AI. <Link to="/about#bootcamp">Learn more →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>Career Highlights</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            <span className="highlight-metric">8+ Years</span>
            <span className="highlight-label">Building & Deploying AI/ML Systems</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-metric">60% MTTR</span>
            <span className="highlight-label">Reduction in System Recovery Time</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-metric">1M+ Daily</span>
            <span className="highlight-label">ML Predictions Served</span>
          </div>
          <div className="highlight-card">
            <span className="highlight-metric">4.0 GPA</span>
            <span className="highlight-label">Georgia Tech MS Computer Science</span>
          </div>
        </div>
      </section>

      <section className="expertise-preview">
        <h2>Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-area">
            <h4>ML Infrastructure</h4>
            <p>Building scalable systems with PyTorch, TensorFlow, and cloud platforms</p>
          </div>
          <div className="expertise-area">
            <h4>RAG & LLM Systems</h4>
            <p>Production-ready implementations with LangChain and HuggingFace</p>
          </div>
          <div className="expertise-area">
            <h4>Real-time AI</h4>
            <p>Low-latency prediction systems serving millions of requests</p>
          </div>
          <div className="expertise-area">
            <h4>AI Strategy</h4>
            <p>Helping businesses identify and implement high-impact AI solutions</p>
          </div>
        </div>
        <div className="expertise-cta">
          <Link to="/projects" className="view-projects-link">
            View detailed project case studies →
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="social-proof-container">
          <h3>Building Impact Together</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{socialProof.yearsExperience}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{socialProof.projectsCompleted}</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{socialProof.studentsTeaching}</span>
              <span className="stat-label">Students Teaching</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{socialProof.clientsServed}</span>
              <span className="stat-label">Clients Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Using placeholders for now */}
      <TestimonialsSection 
        testimonials={testimonials.length > 0 ? testimonials : placeholderTestimonials}
        showPlaceholder={testimonials.length === 0}
      />

      <section className="cta-section">
        <h2>Let's Build Something Impactful</h2>
        <p>
          Whether you need AI expertise for your next project or want to learn AI/ML, 
          I'm here to help you succeed.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="button primary">Start a Conversation</Link>
          <Link to="/resume" className="button">View Full Resume</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Index;
