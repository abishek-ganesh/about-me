import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import { courses, degrees, positions, skills, skillCategories, categories } from '../data/resume';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Abishek Ganesh - Senior AI Engineer | AI Consultant | AI Instructor"
  >
    <article className="post" id="resume">
      <div className="resume-container">
        <header className="resume-header">
          <h1>Professional Resume</h1>
          <p className="subtitle">
            8+ years of experience building and deploying AI/ML systems at scale.
            Passionate about solving complex problems and teaching the next generation of AI engineers.
          </p>
          <div className="quick-links">
            {sections.map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase()}`}>{sec}</a>
            ))}
          </div>
        </header>

        <div className="download-section">
          <a href="/resume.pdf" className="download-button" download>
            <i className="fa fa-download" />
            Download PDF Version
          </a>
        </div>

        <section id="education" className="resume-section education-section">
          <h2>Education</h2>
          <div className="education-grid">
            {degrees.map((degree) => (
              <div key={degree.school} className="education-item">
                <div className="education-header">
                  <div className="school-info">
                    <h3>
                      {degree.link ? (
                        <a href={degree.link} target="_blank" rel="noopener noreferrer">
                          {degree.school}
                        </a>
                      ) : (
                        degree.school
                      )}
                    </h3>
                    <div className="degree">{degree.degree}</div>
                  </div>
                  <div className="education-meta">
                    <span className="year">{degree.year}</span>
                    {degree.gpa && <div className="gpa">GPA: {degree.gpa}</div>}
                  </div>
                </div>
                {degree.details && (
                  <div className="education-details">{degree.details}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="resume-section experience-section">
          <h2>Professional Experience</h2>
          <div className="experience-timeline">
            {positions.map((job) => (
              <div key={`${job.company}-${job.position}`} className="experience-item">
                <div className="job-header">
                  <div className="company-line">
                    <h3>
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="position">— {job.position}</span>
                  </div>
                  <span className="daterange">{job.daterange}</span>
                </div>
                <ul className="job-points">
                  {job.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="resume-section skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-intro">
            <p>
              Comprehensive expertise across the AI/ML stack, from research and development
              to production deployment and scaling.
            </p>
          </div>
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="skill-category">
                <h3>
                  <span
                    className="category-icon"
                    style={{
                      color: categories.find(c => c.name === category)?.color || '#2196f3'
                    }}
                  />
                  {category}
                </h3>
                <div className="skill-list">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}/5</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skills-chart-container">
            <h3>Skills Overview</h3>
            <Skills skills={skills} categories={categories} />
          </div>
        </section>

        <section id="courses" className="resume-section courses-section">
          <h2>Relevant Coursework</h2>
          <div className="courses-intro">
            <p>
              Graduate-level coursework from Georgia Tech's OMSCS program,
              specializing in Machine Learning and AI.
            </p>
          </div>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.number} className="course-item">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <div className="course-number">{course.number}</div>
                  <div className="course-title">{course.title}</div>
                  <div className="course-university">{course.university}</div>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-cta">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in tackling complex AI challenges and sharing knowledge
            with the community. Whether you need technical expertise or educational guidance,
            I'm here to help.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="button primary">Get in Touch</Link>
            <Link to="/projects" className="button">View My Projects</Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default Resume;
