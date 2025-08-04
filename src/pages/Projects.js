import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="AI projects showcasing real-world implementations and measurable impact"
  >
    <article className="post" id="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h1>AI Projects</h1>
          <p className="subtitle">Real-world implementations with measurable impact</p>
        </header>

        <div className="projects-grid">
          {data.filter(p => p.featured).map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-content">
                <div className="project-description">
                  <p>{project.desc}</p>
                </div>

                <div className="project-section">
                  <h3>The Challenge</h3>
                  <p>{project.challenge}</p>
                </div>

                <div className="project-section">
                  <h3>Solution Approach</h3>
                  <ul className="solution-list">
                    {project.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-section">
                  <h3>Technology Stack</h3>
                  <div className="tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="impact-section">
                  <h3>Measurable Impact</h3>
                  <div className="impact-grid">
                    {Object.entries(project.impact).map(([metric, value]) => (
                      <div key={metric} className="impact-item">
                        <span className="impact-value">{value}</span>
                        <span className="impact-metric">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="learnings-section">
                  <h3>Key Learnings</h3>
                  <ul className="learnings-list">
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="additional-projects">
          <h2>Additional Projects</h2>
          <div className="secondary-projects-grid">
            {data.filter(p => !p.featured).map((project) => (
              <div key={project.title} className="secondary-project-card">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <div className="tech-tags">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag small">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tech-tag small">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Let's Build Something Together</h2>
          <p>
            I'm always interested in tackling complex AI challenges. Whether you need ML infrastructure, 
            intelligent automation, or custom AI solutions, let's discuss how we can create impact together.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="button primary">Start a Conversation</Link>
            <Link to="/about" className="button">Learn More About Me</Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default Projects;