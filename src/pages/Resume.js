import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import { degrees, positions } from '../data/resume';

const sections = [
  'Experience',
  'Technical Expertise',
  'Key Projects',
  'Education',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Abishek Ganesh - State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment"
  >
    <article className="post page" id="resume">
      <div className="page-title">
        <h1>Abishek Ganesh</h1>
        <span className="page-subtitle">State-of-the-Art AI Implementation Specialist</span>
      </div>
      
      <div className="u-text-center u-mb-5">
        <p className="u-text-lg u-text-muted u-max-w-lg u-mx-auto u-mb-3">
          State-of-the-art AI implementation specialist passionate about RAG systems, AI agents, and whatever breakthrough comes next. 
          Expert in leveraging truly cutting-edge technologies in smart ways that help companies and their users. 
          5+ years deploying the latest AI innovations in production - from advanced RAG with hybrid search to multi-agent orchestration.
        </p>
        <div className="quick-links">
          {sections.map((sec) => (
            <a key={sec} href={`#${sec.toLowerCase()}`} className="u-text-primary u-font-medium u-mx-2">{sec}</a>
          ))}
        </div>
      </div>

      <div className="u-text-center u-mb-4">
        <a href="/resume.pdf" className="btn btn--primary" download>
          <i className="fa fa-download" />
          Download PDF Version
        </a>
      </div>

      <section id="experience" className="section-content">
        <div className="section-header">
          <h2 className="with-accent">Professional Experience</h2>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          <div className="card card--elevated">
            <div className="card-header">
              <h3>RAG Systems Mastery</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>Advanced retrieval: hybrid search, semantic + keyword fusion</li>
                <li>Multi-stage reranking and relevance optimization</li>
                <li>Dynamic chunking and context window management</li>
                <li>Knowledge graph integration for enhanced reasoning</li>
                <li>Production RAG serving millions of queries daily</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>AI Agent Development</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>Single-agent systems with tool use and reasoning</li>
                <li>Multi-agent orchestration and communication</li>
                <li>ReAct, Chain-of-Thought, Tree-of-Thought paradigms</li>
                <li>Custom agent frameworks for specific domains</li>
                <li>Agentic process automation at enterprise scale</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>Latest Foundation Models</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>GPT-4o, Claude 3.5, Gemini Pro, Llama 3.1 in production</li>
                <li>Fine-tuning and prompt engineering for optimal performance</li>
                <li>RLHF and constitutional AI implementations</li>
                <li>Multi-modal model deployments</li>
                <li>Always first to implement the next breakthrough</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>Production Excellence</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>Real-time inference with sub-100ms latency</li>
                <li>Auto-scaling ML infrastructure handling millions daily</li>
                <li>Fault tolerance and graceful degradation</li>
                <li>Comprehensive observability and monitoring</li>
                <li>60% MTTR reduction through strategic architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="technical-expertise" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Technical Expertise</h2>
          <p className="section-description">
            Mastery of truly state-of-the-art AI technologies - always implementing what's next
          </p>
        </div>
        <div className="experience-timeline">
          {positions.map((job) => (
            <div key={`${job.company}-${job.position}`} className="experience-item">
              <div className="u-mb-2">
                <div className="u-flex u-justify-between u-flex-wrap u-gap-2">
                  <div>
                    <h3 className="u-inline u-font-semibold">
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="u-text-primary u-font-medium"> — {job.position}</span>
                  </div>
                  <span className="tag tag--small tag--neutral">{job.daterange}</span>
                </div>
              </div>
              <ul className="list list--chevron">
                {job.points.map((point, index) => (
                  <li key={index} className="list-item">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="key-projects" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Key Projects & Achievements</h2>
          <p className="section-description">
            Measurable AI impact across industries - from stealth startups to Fortune 500
          </p>
        </div>
        <div className="experience-timeline">
          {positions.map((job) => (
            <div key={`${job.company}-${job.position}`} className="experience-item">
              <div className="u-mb-2">
                <div className="u-flex u-justify-between u-flex-wrap u-gap-2">
                  <div>
                    <h3 className="u-inline u-font-semibold">
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="u-text-primary u-font-medium"> — {job.position}</span>
                  </div>
                  <span className="tag tag--small tag--neutral">{job.daterange}</span>
                </div>
              </div>
              <ul className="list list--chevron">
                {job.points.map((point, index) => (
                  <li key={index} className="list-item">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Education</h2>
        </div>
        <div className="grid grid--auto-lg grid--gap-lg">
          {degrees.map((degree) => (
            <div key={degree.school} className="card card--elevated">
              <div className="card-body">
                <div className="u-flex u-justify-between u-flex-wrap u-gap-2 u-mb-2">
                  <div>
                    <h3 className="u-mb-1">
                      {degree.link ? (
                        <a href={degree.link} target="_blank" rel="noopener noreferrer">
                          {degree.school}
                        </a>
                      ) : (
                        degree.school
                      )}
                    </h3>
                    <div className="u-text-primary u-font-medium">{degree.degree}</div>
                  </div>
                  <div className="u-text-right">
                    <span className="tag tag--neutral">{degree.year}</span>
                    {degree.gpa && <div className="u-text-sm u-text-muted u-mt-1">GPA: {degree.gpa}</div>}
                  </div>
                </div>
                {degree.details && (
                  <div className="u-text-muted u-font-italic">{degree.details}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="section-cta u-mt-4">
        <h2>Ready to Deploy Tomorrow's AI Today?</h2>
        <p>
          I help companies implement truly cutting-edge AI - RAG systems, AI agents, and whatever breakthrough comes next. 
          Let's leverage the latest technologies in smart ways that help your users.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn--primary">Schedule AI Strategy Session</Link>
          <Link to="/projects" className="btn btn--secondary">View Cutting-Edge Implementations</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Resume;
