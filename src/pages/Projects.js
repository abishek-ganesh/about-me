import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="State-of-the-Art AI Implementations | RAG Systems, AI Agents, and Cutting-Edge Production Deployments"
  >
    <article className="post page" id="projects">
      <div className="page-title">
        <h1>Cutting-Edge AI Implementations</h1>
        <span className="page-subtitle">State-of-the-art RAG systems, AI agents, and whatever breakthrough comes next - in production</span>
      </div>

      <section className="section-content">
        <div className="grid grid--auto grid--gap-lg" style={{ '--grid-min': '600px' }}>
          {data.filter(p => p.featured).map((project) => (
          <div key={project.title} className="card card--elevated">
            <div className="card-header">
              <span className="tag tag--small tag--primary u-mb-2">{project.category}</span>
              <h2 className="u-mb-1">{project.title}</h2>
              <p className="u-text-lg u-text-muted">{project.subtitle}</p>
            </div>
            <div className="card-body">
              <div className="u-mb-3 u-pb-3 u-border-bottom">
                <p className="u-text-lg u-mb-0">{project.desc}</p>
              </div>

              <div className="u-mb-3">
                <h3 className="u-mb-2">The Challenge</h3>
                <p className="u-text-muted">{project.challenge}</p>
              </div>

              <div className="u-mb-3">
                <h3 className="u-mb-2">Solution Approach</h3>
                <ul className="list list--arrow">
                  {project.solution.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="u-mb-3">
                <h3 className="u-mb-2">Technology Stack</h3>
                <div className="u-flex u-flex-wrap u-gap-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag tag--primary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="card card--gradient u-mb-3">
                <div className="card-body">
                  <h3 className="u-text-center u-mb-3">Measurable Impact</h3>
                  <div className="grid grid--2 grid--gap-lg u-text-center">
                    {Object.entries(project.impact).map(([metric, value]) => (
                      <div key={metric}>
                        <div className="u-text-2xl u-font-bold u-text-primary">{value}</div>
                        <div className="u-text-sm u-text-muted u-text-uppercase">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="u-mb-2">Key Learnings</h3>
                <ul className="list list--check">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="list-item u-text-sm u-font-italic">{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section className="section-content">
        <div className="section-header">
          <h2>Additional Projects</h2>
        </div>
        <div className="grid grid--3 grid--gap-lg">
          {data.filter(p => !p.featured).map((project) => (
            <div key={project.title} className="card">
              <div className="card-body">
                <span className="tag tag--small tag--secondary">{project.category}</span>
                <h3 className="u-mt-2 u-mb-2">{project.title}</h3>
                <p className="u-text-muted u-mb-3">{project.desc}</p>
                <div className="u-flex u-flex-wrap u-gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag tag--small tag--outline">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="tag tag--small tag--neutral">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-cta u-mt-5">
        <h2>Ready to Implement Tomorrow's AI Today?</h2>
        <p>
          I specialize in deploying the absolute latest in AI technology - RAG systems, AI agents, multi-agent architectures, 
          and whatever breakthrough comes next. Let's leverage cutting-edge tech in smart ways that help your users.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn--primary">Schedule AI Strategy Session</Link>
          <Link to="/about" className="btn btn--secondary">Learn About My Approach</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Projects;