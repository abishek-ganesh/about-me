import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Abishek Ganesh - Senior AI Engineer, Consultant, and Instructor with 8+ years of experience"
  >
    <article className="post" id="about">
      <div className="about-container">
        <header className="about-header">
          <h1>Abishek Ganesh</h1>
          <p className="tagline">Senior AI Engineer | AI Consultant | AI Instructor</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">
            I am a versatile AI professional with over 8 years of experience at the intersection of 
            artificial intelligence, machine learning, and full-stack development. I bring a unique 
            blend of technical expertise and leadership skills to every project I undertake.
          </p>
        </section>

        <div className="content-grid">
          <section className="section-card">
            <h2>Current Roles</h2>
            <div className="role-list">
              <div className="role-item">
                <h3>AI Engineer</h3>
                <p>Specializing in ML infrastructure, scalable data pipelines, and AI architecture design. 
                   I've reduced system MTTR by 60% through strategic debugging and technical debt reduction.</p>
              </div>
              <div className="role-item">
                <h3>AI Consultant</h3>
                <p>Providing expert guidance on AI implementation, systems building, and CRM management 
                   to businesses looking to leverage artificial intelligence effectively.</p>
              </div>
              <div className="role-item">
                <h3>AI Instructor</h3>
                <p>Leading a comprehensive AI Bootcamp (March-September 2025) with over 20 students, 
                   teaching everything from Python fundamentals to advanced generative AI.</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Technical Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>AI/ML Frameworks</h4>
                <div className="skill-tags">
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">HuggingFace</span>
                  <span className="skill-tag">LangChain</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Specializations</h4>
                <div className="skill-tags">
                  <span className="skill-tag">RAG</span>
                  <span className="skill-tag">OCR</span>
                  <span className="skill-tag">Prompt Management</span>
                  <span className="skill-tag">LLM Evaluation</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Cloud & Infrastructure</h4>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Chime SDK</span>
                  <span className="skill-tag">QuickSight</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="achievements-section">
          <h2>Notable Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🚀</div>
              <p>Successfully pitched AI products to investors</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">👥</div>
              <p>Led teams of 5-7 engineers on complex AI projects</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏥</div>
              <p>Developed expertise in healthcare AI and mental health technology</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⚡</div>
              <p>Built real-time ML systems with scalable architectures</p>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <h2>AI Bootcamp</h2>
          <div className="bootcamp-info">
            <div className="bootcamp-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">7</span>
                <span className="stat-label">Units</span>
              </div>
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Months</span>
              </div>
            </div>
            <div className="curriculum">
              <h3>Curriculum</h3>
              <ol>
                <li>Programming Refresher</li>
                <li>Applied Data Science with Python</li>
                <li>Machine Learning Fundamentals</li>
                <li>Deep Learning</li>
                <li>NLP and Speech Recognition</li>
                <li>Advanced Generative AI</li>
                <li>Capstone Projects with Demo Days</li>
              </ol>
              <p className="note">All sessions are recorded and available on YouTube</p>
            </div>
          </div>
        </section>

        <section className="personal-section">
          <h2>Beyond AI</h2>
          <p>
            My unique background combines Mathematics, Computer Science, and Marketing, giving me a 
            holistic perspective on technology implementation and user adoption. I'm also involved in 
            voiceover services, combining my technical background with creative expression.
          </p>
          <p>
            I've been a lifelong vegetarian and vegan since early 2016, reflecting my commitment to 
            ethical choices in both my personal and professional life. This mindset extends to my 
            approach to AI development, where I prioritize responsible and beneficial applications 
            of technology.
          </p>
        </section>

        <section className="cta-section">
          <h2>Let's Connect</h2>
          <p>
            Feel free to reach out about AI projects, consulting opportunities, or educational initiatives. 
            I'm always excited to collaborate on innovative AI solutions that make a positive impact.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="button primary">Get In Touch</Link>
            <Link to="/projects" className="button">View My Work</Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default About;