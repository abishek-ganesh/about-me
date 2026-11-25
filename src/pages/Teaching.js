import React from 'react';

import Main from '../layouts/Main';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import testimonials from '../data/testimonials';
import {
  teachingSections,
  teachingStats,
  nowTeaching,
  startingPoint,
  transformationStories,
  craft,
  capstone,
  readiness,
  beyond,
  teachingPrinciples,
} from '../data/teaching';

const teachingTestimonials = testimonials.filter((t) => t.projectType === 'teaching');

const Teaching = () => (
  <Main
    title="Teaching"
    description="Abishek Ganesh - Lead AI Instructor, leading the first Applied AI Engineer Bootcamp cohort from Columbia Engineering Executive Education and Fullstack Academy. Beginners to deployed, state-of-the-art AI, in their students' own words."
    sidebarSections={teachingSections}
  >
    <article className="post page" id="teaching">
      <div className="page-title">
        <h1>Teaching AI</h1>
        <span className="page-subtitle">
          From a first line of Python to shipped AI, and nobody gets left behind
        </span>
      </div>

      <section id="overview" className="section-content">
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg u-mb-0">
              I teach AI engineering to people who have never done it before. My first cohorts spent
              six months going from their first Python script to neural networks, RAG pipelines, and
              agentic systems, and understanding the math underneath all of it. Now I&apos;m leading
              the first Applied AI Engineer Bootcamp from Columbia Engineering and Fullstack Academy.
              Below is what my past students said at the end, unedited.
            </p>
          </div>
        </div>

        <div className="grid grid--4 grid--gap-lg u-mt-4">
          {teachingStats.map((stat) => (
            <div key={stat.label} className="card card--compact u-text-center">
              <span className="metric-value">{stat.value}</span>
              <span className="metric-label">{stat.label}</span>
              <p className="u-text-sm u-text-muted u-mt-1 u-mb-0">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="card card--elevated u-mt-4">
          <div className="card-body">
            <h3 className="u-text-primary u-mb-1">
              {startingPoint.headline}{' '}
              <span className="u-text-muted u-text-base">{startingPoint.sublabel}</span>
            </h3>
            <p className="u-mb-0">{startingPoint.body}</p>
          </div>
        </div>
      </section>

      <section id="now" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Now Teaching: {nowTeaching.title}</h2>
          <p className="section-description">{nowTeaching.partners}</p>
        </div>

        <div className="card card--elevated">
          <div className="card-body">
            <p className="u-text-lg u-mb-0">{nowTeaching.intro}</p>
          </div>
        </div>

        <h3 className="capstone-subheading">{nowTeaching.stagesHeading}</h3>
        <div className="now-stages">
          {nowTeaching.stages.map((stage, i) => (
            <div key={stage.title} className="card card--elevated">
              <div className="card-body">
                <span className="now-stage-number">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="u-text-primary u-mb-1">{stage.title}</h4>
                <p className="u-mb-0">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="capstone-subheading">{nowTeaching.gradedHeading}</h3>
        <p className="now-graded-intro">{nowTeaching.gradedIntro}</p>
        <div className="grid grid--3 grid--gap-lg u-mt-3">
          {nowTeaching.graded.map((item) => (
            <div key={item.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{item.title}</h4>
                <p className="u-mb-0">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card card--gradient u-mt-4">
          <div className="card-body">
            <h3 className="u-mb-2">{nowTeaching.referenceApp.heading}</h3>
            <p className="u-mb-3">{nowTeaching.referenceApp.body}</p>
            <div className="now-links">
              {nowTeaching.referenceApp.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Student Voices</h2>
          <p className="section-description">
            From the end-of-course survey. Shared with each student&apos;s permission, first names
            only.
          </p>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          {teachingTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section id="outcomes" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Where They Landed</h2>
        </div>
        <div className="grid grid--3 grid--gap-lg">
          {transformationStories.map((story) => (
            <div key={story.id} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-2">{story.after}</h4>
                <p className="u-text-sm u-font-italic u-mb-2">&ldquo;{story.quote}&rdquo;</p>
                <div className="u-text-sm u-font-semibold">- {story.name}</div>
                <div className="u-text-sm u-text-muted u-mb-0">{story.before}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="craft" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Inside a Lesson</h2>
          <p className="section-description">{craft.intro}</p>
        </div>

        <div className="grid grid--2 grid--gap-lg">
          {craft.pillars.map((pillar) => (
            <div key={pillar.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{pillar.title}</h4>
                <p className="u-mb-0">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="capstone" className="section-content u-mt-4">
        <div className="section-header">
          <h2>The Final Build</h2>
          <p className="section-description">{capstone.intro}</p>
        </div>

        <div className="capstone-examples">
          <p className="capstone-label">{capstone.briefsNote}</p>
          <div className="grid grid--2 grid--gap-lg">
            {capstone.briefs.map((brief) => (
              <div key={brief.title} className="card card--elevated">
                <div className="card-body">
                  <h4 className="u-text-primary u-mb-1">{brief.title}</h4>
                  <p className="u-mb-0">{brief.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="capstone-subheading">{capstone.requirementsHeading}</h3>
        <div className="grid grid--2 grid--gap-lg">
          {capstone.requirements.map((req) => (
            <div key={req.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{req.title}</h4>
                <p className="u-mb-0">{req.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card card--gradient u-mt-4">
          <div className="card-body">
            <p className="u-text-lg u-mb-0">{capstone.closing}</p>
          </div>
        </div>
      </section>

      <section id="readiness" className="section-content u-mt-4">
        <div className="section-header">
          <h2>What They Can Do Now</h2>
          <p className="section-description">{readiness.note}</p>
        </div>

        <div className="card card--elevated">
          <div className="card-body u-text-center">
            {readiness.items.map((item) => (
              <div key={item.label} className="u-mb-2">
                <span className="u-font-semibold u-text-primary">{item.value}%</span>{' '}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beyond" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Careers, Impact, and Ethics</h2>
          <p className="section-description">{beyond.intro}</p>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          {beyond.cards.map((card) => (
            <div key={card.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{card.title}</h4>
                <p className="u-mb-0">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="section-content u-mt-4">
        <div className="section-header">
          <h2>How I Teach</h2>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          {teachingPrinciples.map((principle) => (
            <div key={principle.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{principle.title}</h4>
                <p className="u-mb-0">{principle.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  </Main>
);

export default Teaching;
