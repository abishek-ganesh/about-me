import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import Quote from '../components/common/Quote';
import { teachingStats } from '../data/teaching';

// The course length is already spelled out in the paragraph above these stats
const aboutTeachingStats = teachingStats.filter((s) => s.label !== 'Python to Agentic AI');

const About = () => {
  return (
  <Main
    title="About"
    description="Abishek Ganesh - years of AI in production, VP of Technology & AI at Appa Health, lead AI instructor, and voice actor."
  >
    <article className="post page" id="about">
      <div className="page-title">
        <h1>The Long Way Around</h1>
        <span className="page-subtitle">Mathematics, a stack of business and marketing classes taken on purpose, a master&apos;s in CS, and years of production AI - plus teaching, voice work, and a running list of countries</span>
      </div>

      <section className="about-hero u-mb-4">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <p className="intro-text">
            I started in mathematics and finished with a master&apos;s in computer science. In between, after moving to
            California, I kept taking classes while working full-time: marketing, business administration, project
            management, and a pile of certifications along the way. None of that was a detour. I wanted to hold onto the
            learner&apos;s mindset and pick up the skills I did not have yet, and it turned out to be good preparation
            for a field that reinvents itself every eighteen months. I&apos;ve been deploying AI in production for years
            now, across every major paradigm
            shift: classical machine learning, deep learning, the transformer revolution, and today&apos;s large language
            models and agentic systems. I don&apos;t specialize in one paradigm. I deploy whatever the problem actually
            calls for. What the mathematics left me with is the thing I keep coming back to - underneath the hype it is
            all just math, and anything built out of math can be explained to anyone willing to sit with it.
          </p>
          </div>
        </div>
      </section>

      <section className="card card--elevated">
        <div className="card-header">
          <h3>Current Focus</h3>
        </div>
        <div className="card-body">
          <div className="list list--none u-mb-0">
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Building at Appa Health</h4>
              <p>VP of Technology &amp; AI, leading the platform that connects students with mentors who change
                 their trajectory. The technology is only interesting because of what it is for.</p>
            </div>
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Consulting Across Sectors</h4>
              <p>Fortune 500 enterprises, healthcare startups, nonprofits, and local government. Classical ML,
                 deep learning, RAG, multi-agent orchestration - whichever one the problem actually needs,
                 including the times the answer is that it needs none of them.</p>
            </div>
            <div className="list-item u-mb-2">
              <h4 className="u-text-primary u-mb-1">Teaching</h4>
              <p>Six months taking a cohort from Python fundamentals to agentic systems. Making complex ideas
                 accessible is most of the job, and it is the part I care about most.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>How I Got Here</h2>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              Mathematics is the language of the universe. Studying it at Ohio State taught me to sit with a problem
              until it gives in. The marketing and business
              classes I signed up for on my own time taught me that an elegant solution nobody understands is worth
              nothing. A 4.0 in computer science at Georgia Tech
              handed me the tools. Leading technical teams taught me the hardest part was never the model. Put together,
              that is why I usually end up as the translator in the room - between the people building the technology
              and the people who have to live with it.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-timeline u-mt-4">
        <div className="section-header">
          <h2>A Visual Journey</h2>
        </div>
        <div className="timeline-photos">
          <div className="timeline-photo">
            <AnimatedPhoto
              src="/images/venice.JPG"
              alt="Abishek in Venice, Italy"
              size="medium"
              shape="rounded"
              animation="slideUp"
              delay={0}
            />
            <div className="timeline-content">
              <h3>Present</h3>
              <p>Deploying AI across industries and around the world</p>
            </div>
          </div>
          <div className="timeline-photo">
            <AnimatedPhoto
              src="/images/august-2025/website-05.jpg"
              alt="Teaching the next generation"
              size="medium"
              shape="rounded"
              animation="slideUp"
              delay={200}
            />
            <div className="timeline-content">
              <h3>Teaching</h3>
              <p>Sharing knowledge with the next generation of AI engineers</p>
            </div>
          </div>
          <div className="timeline-photo">
            <AnimatedPhoto
              src="/images/august-2025/website-10.jpg"
              alt="Staying grounded with family"
              size="medium"
              shape="rounded"
              animation="slideUp"
              delay={400}
            />
            <div className="timeline-content">
              <h3>Values</h3>
              <p>Staying grounded with family wisdom and generational perspective</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>The Part I Am Proudest Of</h2>
        </div>
        <div className="card card--elevated">
          <div className="card-body">
            <p className="u-text-lg u-mb-3">
              I lead an intensive AI bootcamp: six months, three hours a day, Python fundamentals through agentic
              systems. My philosophy is simple. Teach what is actually used in production, and make sure nobody is ever
              embarrassed to ask a basic question. My students put it better than I can.
            </p>
            <div className="grid grid--3 u-text-center u-mb-3">
              {aboutTeachingStats.map((stat) => (
                <div key={stat.label}>
                  <div className="u-text-2xl u-text-primary u-font-bold">{stat.value}</div>
                  <div className="u-text-sm u-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link to="/teaching" className="btn btn--secondary">Read What They Said</Link>
          </div>
        </div>
      </section>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>Philosophy: Technology Should Help People</h2>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              This is not an abstract commitment. Organizing community events for over a thousand attendees and
              volunteering to improve public systems both taught me the same lesson: the solution that helps somebody
              beats the solution with the better architecture diagram. That is how I choose what to build. Cutting-edge
              when cutting-edge is the honest answer, and boring and reliable when it is not.
            </p>
          </div>
        </div>
      </section>

      <Quote id="about" />

    </article>
  </Main>
  );
};

export default About;