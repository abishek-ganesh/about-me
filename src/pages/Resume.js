import React from 'react';

import Main from '../layouts/Main';
import Quote from '../components/common/Quote';

import { degrees, positions } from '../data/resume';

const resumeSections = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const Resume = () => (
  <Main
    title="Resume"
    description="Abishek Ganesh - State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment"
    sidebarSections={resumeSections}
  >
    <article className="post page" id="resume">
      <div className="page-title">
        <h1>I Build Cool AI Products</h1>
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
                <div className="u-flex u-flex-wrap u-justify-center u-gap-1">
                  <span className="tag tag--neutral">{degree.year}</span>
                  {degree.gpa && <span className="tag tag--neutral">GPA: {degree.gpa}</span>}
                </div>
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
