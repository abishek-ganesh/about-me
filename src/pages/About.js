import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import Quote from '../components/common/Quote';
import { teachingStats } from '../data/teaching';

const aboutSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'focus', label: 'Current Focus' },
  { id: 'journey', label: 'How I Got Here' },
  { id: 'teaching', label: 'Teaching' },
];

const About = () => {
  return (
  <Main
    title="About"
    description="Abishek Ganesh - years of AI in production, VP of Technology & AI at Appa Health, and lead AI instructor."
    sidebarSections={aboutSections}
  >
    <article className="post page" id="about">
      <div className="page-title">
        <h1>The Long Way Around</h1>
        <span className="page-subtitle">Mathematics, business classes, a master&apos;s in CS, and years of production AI</span>
      </div>

      <section id="overview" className="about-hero u-mb-4">
        <div className="about-hero-content">
          <div className="about-hero-text card card--gradient">
            <p className="intro-text">
            I started in mathematics and finished with a master&apos;s in computer science. in between, after moving to
            California, I kept taking classes while working full-time: marketing, business administration, and project
            management. none of that was a detour. i&apos;ve been deploying AI in production for years, across every
            major paradigm shift..underneath the hype it is all just math, and anything built out of math can be
            explained to anyone willing to sit with it.
          </p>
          </div>
        </div>
      </section>

      <section id="focus" className="card card--elevated">
        <div className="card-header">
          <h3>Current Focus</h3>
        </div>
        <div className="card-body">
          <div className="list list--none u-mb-0">
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Building at Appa Health</h4>
              <p>VP of Technology &amp; AI, leading the platform that fosters human connection between certified,
                 credentialed mentors and teenagers.</p>
            </div>
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Consulting Across Sectors</h4>
              <p>Fortune 500 enterprises, healthcare startups, and nonprofits..whichever approach the problem
                 actually needs, including the times it needs no AI at all.</p>
            </div>
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Teaching</h4>
              <p>six months taking a cohort from Python fundamentals to agentic systems..making complex ideas
                 accessible is the part I care about most.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="section-content u-mt-4">
        <div className="section-header">
          <h2>How I Got Here</h2>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              studying mathematics at Ohio State taught me to sit with a problem until it gives in..the marketing and
              business classes taught me that an elegant solution nobody understands is worth nothing.
            </p>
            <p className="u-text-lg">
              in 2018 I became convinced that AI was going to reshape society, and I wanted to be close enough to the
              front to help shape it into something good for people. from late 2019 to the spring of 2021 I earned a
              master&apos;s in computer science at Georgia Tech while working full time at Big Health, finishing in a
              year and a half with a 4.0.
            </p>
            <p className="u-text-lg">
              leading technical teams taught me the hardest part was never the model..that is why I usually end up as
              the translator in the room, between the people building the technology and the people who have to live
              with it.
            </p>
            <p className="u-text-lg">
              from 2018 to 2022 I volunteered with my local Citizens&apos; Climate Lobby chapter, building out its
              social media and helping with its lobbying meetings..same translation job, different room.
            </p>
          </div>
        </div>
      </section>

      <section id="teaching" className="section-content u-mt-4">
        <div className="section-header">
          <h2>The Part I Am Proudest Of</h2>
        </div>
        <div className="card card--elevated">
          <div className="card-body">
            <p className="u-text-lg u-mb-3">
              i teach AI engineering. my first cohorts ran six months, Python fundamentals through agentic systems,
              and now I&apos;m leading the first Applied AI Engineer Bootcamp from Columbia Engineering and Fullstack
              Academy. i teach what is actually used in production, and make sure nobody is ever embarrassed to ask a
              basic question..my students put it better than I can.
            </p>
            <div className="grid grid--3 u-text-center u-mb-3">
              {teachingStats.map((stat) => (
                <div key={stat.label}>
                  <div className="u-text-2xl u-text-primary u-font-bold">{stat.value}</div>
                  <div className="u-text-sm u-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="u-text-center">
              <Link to="/teaching" className="btn btn--secondary">read what they said</Link>
            </div>
          </div>
        </div>
      </section>

      <figure className="page-closing-photo u-mt-4">
        <AnimatedPhoto
          src="/images/venice.JPG"
          alt="Abishek in Venice, Italy"
          size="medium"
          shape="rounded"
          animation="slideUp"
        />
        <figcaption>Venice..deploying AI across industries and around the world.</figcaption>
      </figure>

      <Quote id="about" />

    </article>
  </Main>
  );
};

export default About;