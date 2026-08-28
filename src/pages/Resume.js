import React from 'react';

import Main from '../layouts/Main';
import Quote from '../components/common/Quote';

import { degrees, positions } from '../data/resume';

const sections = [
  'Experience',
  'Technical Expertise',
  'Education',
];

// Anchor ids are kebab-cased, so multi-word section names need slugging
const slug = (name) => name.toLowerCase().replace(/\s+/g, '-');

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
        <div className="quick-links">
          {sections.map((sec) => (
            <a key={sec} href={`#${slug(sec)}`} className="u-text-primary u-font-medium u-mx-2">{sec}</a>
          ))}
        </div>
      </div>


      <section id="experience" className="section-content">
        <div className="section-header">
          <h2 className="with-accent">Professional Experience</h2>
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

      <section id="technical-expertise" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Technical Expertise</h2>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          <div className="card card--elevated">
            <div className="card-header">
              <h3>LLM & NLP</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>RAG systems with hybrid search, semantic + keyword fusion</li>
                <li>Mixture of Experts architectures and KV cache optimization</li>
                <li>Fine-tuning, RLHF, and prompt engineering</li>
                <li>Multi-modal model implementations</li>
                <li>Production systems serving live user traffic</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>Deep Learning</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>CNNs for computer vision and image classification</li>
                <li>Diffusion models and GANs for generative AI</li>
                <li>Autoencoders and variational autoencoders</li>
                <li>Reinforcement learning and unsupervised learning</li>
                <li>Transformer architectures from scratch to production</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>AI Agents & Orchestration</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>Autonomous agents with tool use and reasoning</li>
                <li>Multi-agent orchestration and communication</li>
                <li>ReAct, Chain-of-Thought, Tree-of-Thought paradigms</li>
                <li>Knowledge graph integration for enhanced reasoning</li>
                <li>Agentic process automation at enterprise scale</li>
              </ul>
            </div>
          </div>
          <div className="card card--elevated">
            <div className="card-header">
              <h3>Production Excellence</h3>
            </div>
            <div className="card-body">
              <ul className="list list--chevron">
                <li>Real-time, low-latency inference systems</li>
                <li>Auto-scaling ML infrastructure</li>
                <li>Fault tolerance and graceful degradation</li>
                <li>Comprehensive observability and monitoring</li>
                <li>MTTR reduction through strategic architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Education</h2>
          <Quote id="education" variant="section" className="section-description" />
        </div>
        <div className="grid grid--auto-lg grid--gap-lg">
          {degrees.map((degree) => (
            <div key={degree.school} className="card card--elevated u-text-center">
              <div className="card-body">
                <h3 className="u-mb-1">
                  {degree.link ? (
                    <a href={degree.link} target="_blank" rel="noopener noreferrer">
                      {degree.school}
                    </a>
                  ) : (
                    degree.school
                  )}
                </h3>
                <div className="u-text-primary u-font-medium u-mb-2">{degree.degree}</div>
                <span className="tag tag--neutral">{degree.year}</span>
                {degree.gpa && <div className="u-text-sm u-text-muted u-mt-1">GPA: {degree.gpa}</div>}
                {degree.details && (
                  <div className="u-text-muted u-font-italic u-mt-2">{degree.details}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


    </article>
  </Main>
);

export default Resume;
