import React from 'react';

import Main from '../layouts/Main';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import testimonials from '../data/testimonials';
import {
  teachingSections,
  teachingStats,
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
    description="Abishek Ganesh - Lead AI Instructor. Six months taking beginners from their first line of Python to deployed, state-of-the-art AI, in their own words."
    sidebarSections={teachingSections}
  >
    <article className="post page" id="teaching">
      <div className="page-title">
        <h1>Teaching AI</h1>
        <span className="page-subtitle">
          Zero to hero in six months - give me everything you&apos;ve got and I&apos;ll give you
          everything I&apos;ve got
        </span>
      </div>

      <section id="overview" className="section-content">
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg u-mb-0">
              I lead an intensive AI bootcamp. Over six months my students go from writing their
              first Python script to building neural networks, RAG pipelines, and agentic systems -
              and understanding the math underneath all of it. Below is what they said at the end,
              unedited.
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

        <p className="u-text-sm u-text-muted u-mb-2">{capstone.briefsNote}</p>
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

        <div className="grid grid--2 grid--gap-lg u-mt-4">
          {capstone.requirements.map((req) => (
            <div key={req.title} className="card card--elevated">
              <div className="card-body">
                <h4 className="u-text-primary u-mb-1">{req.title}</h4>
                <p className="u-mb-0">{req.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="u-text-lg u-mt-4 u-mb-0">{capstone.closing}</p>
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
