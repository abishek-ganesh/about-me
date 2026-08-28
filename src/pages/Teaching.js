import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import TestimonialCard from '../components/Testimonials/TestimonialCard';
import testimonials from '../data/testimonials';
import {
  teachingSections,
  teachingStats,
  transformationStories,
  teachingPrinciples,
} from '../data/teaching';

const teachingTestimonials = testimonials.filter((t) => t.projectType === 'teaching');

const Teaching = () => (
  <Main
    title="Teaching"
    description="Abishek Ganesh - Lead AI Instructor. Six months taking 15 students from Python fundamentals to agentic AI, in their own words."
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
              and understanding the math underneath all of it. They arrive as delivery drivers,
              electrical engineers, analysts, and career software engineers. They leave as people
              who can build with AI. Below is what they said at the end, unedited.
            </p>
          </div>
        </div>

        <div className="grid grid--3 grid--gap-lg u-mt-4">
          {teachingStats.map((stat) => (
            <div key={stat.label} className="card card--compact u-text-center">
              <span className="metric-value">{stat.value}</span>
              <span className="metric-label">{stat.label}</span>
              <p className="u-text-sm u-text-muted u-mt-1 u-mb-0">{stat.note}</p>
            </div>
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

      <section id="voices" className="section-content u-mt-4">
        <div className="section-header">
          <h2>Student Voices</h2>
          <p className="section-description">
            From the end-of-cohort survey. Shared with each student&apos;s permission, first names
            only.
          </p>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          {teachingTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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

      <section className="section-cta u-mt-4">
        <h2>Teaching Your Team</h2>
        <p>
          I run the same curriculum for engineering teams that need to go from using AI to
          understanding and building it. If that is your team, let&apos;s talk.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          <Link to="/about" className="btn btn--secondary">More About Me</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Teaching;
