import React from 'react';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';
import Quote from '../components/common/Quote';

import { degrees, positions, volunteering, courses } from '../data/resume';

const resumeSections = [
  { id: 'experience', label: 'Experience' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'education', label: 'Education' },
  { id: 'courses', label: 'Coursework' },
];

// Grouped in the order the schools happened, not alphabetically
const SCHOOL_ORDER = ['Georgia Tech', 'Ohio State', 'De Anza'];
const coursesBySchool = SCHOOL_ORDER
  .map((school) => ({ school, list: courses.filter((c) => c.university === school) }))
  .filter((g) => g.list.length > 0);

// One resume entry: company (linked when known), role, dates, and bullet points
const ResumeEntry = ({ job }) => (
  <div className="experience-item">
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
          <span className="u-text-primary u-font-medium"> - {job.position}</span>
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
);

ResumeEntry.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    link: PropTypes.string,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Resume of Abishek Ganesh: VP of Technology & AI at Appa Health, years of production AI across Fortune 500s, healthcare startups, and nonprofits, and a Georgia Tech M.S. in computer science."
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
            <ResumeEntry key={`${job.company}-${job.position}`} job={job} />
          ))}
        </div>
      </section>

      <section id="volunteering" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Volunteering</h2>
        </div>
        <div className="experience-timeline">
          {volunteering.map((job) => (
            <ResumeEntry key={`${job.company}-${job.position}`} job={job} />
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
                {degree.logo && (
                  <div className="school-logo">
                    {/* Decorative: the school name is right below it */}
                    <img src={degree.logo} alt="" />
                  </div>
                )}
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

      <section id="courses" className="section-content u-mt-4">
        <div className="section-header">
          <h2 className="with-accent">Coursework</h2>
          <p className="section-description">
            Every course links through to its catalog page.
          </p>
        </div>
        {coursesBySchool.map((group) => (
          <div key={group.school} className="course-group u-mb-3">
            <h3 className="course-school">{group.school}</h3>
            <ul className="course-list">
              {group.list.map((course) => (
                <li key={course.number} className="course-item">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                  >
                    <span className="course-number">{course.number}</span>
                    <span className="course-title">{course.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>


    </article>
  </Main>
);

export default Resume;
