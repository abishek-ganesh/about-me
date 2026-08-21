import React from 'react';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import Quote from '../components/common/Quote';

const About = () => {
  return (
  <Main
    title="About"
    description="Abishek Ganesh - AI Implementation Specialist | ML, Deep Learning, LLMs, RAG, and Agentic Systems in Production Since 2019"
  >
    <article className="post page" id="about">
      <div className="page-title">
        <h1>AI Implementation Specialist</h1>
        <span className="page-subtitle">Deploying production AI since 2019 - from classical ML to agentic systems, across startups, Fortune 500s, nonprofits, and government</span>
      </div>

      <Quote id="about" />

      <section className="about-hero u-mb-4">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <p className="intro-text">
            I've been deploying AI in production across every major paradigm shift - from classical machine learning and deep learning, through the
            transformer revolution, to today's large language models and agentic systems. I don't specialize in just one paradigm.
            I deploy whatever the right tool is for the problem: traditional ML, computer vision, NLP, RAG, multi-agent orchestration,
            or whatever breakthrough comes next. Across startups, Fortune 500s, nonprofits, and local government, I bridge the gap
            between research papers and production systems that actually work.
          </p>
          <div className="grid grid--3 u-mt-3">
            <div className="card card--compact u-text-center">
              <span className="metric-value">Since 2019</span>
              <span className="metric-label">In Production AI</span>
            </div>
            <div className="card card--compact u-text-center">
              <span className="metric-value">ML to Agents</span>
              <span className="metric-label">Full AI Spectrum</span>
            </div>
            <div className="card card--compact u-text-center">
              <span className="metric-value">Always First</span>
              <span className="metric-label">To What's Next</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      <div className="grid grid--2 grid--gap-lg">
        <section className="card card--elevated">
          <div className="card-header">
            <h3>Current Focus</h3>
          </div>
          <div className="card-body">
            <div className="list list--none u-mb-0">
              <div className="list-item u-mb-2">
                <h4 className="u-text-primary u-mb-1">Full-Spectrum AI Implementation</h4>
                <p>From classical ML and deep learning to RAG systems and multi-agent orchestration - I deploy
                   whatever AI paradigm fits the problem. I've shipped every generation of this technology
                   and I'm always first to production with what's next.</p>
              </div>
              <div className="list-item u-mb-2">
                <h4 className="u-text-primary u-mb-1">Cross-Sector AI Consulting</h4>
                <p>Strategic AI guidance for organizations of every kind - Fortune 500 enterprises, healthcare startups,
                   nonprofits, and local government. I focus on solutions that genuinely help people, not just
                   buzzword implementations.</p>
              </div>
              <div className="list-item u-mb-2">
                <h4 className="u-text-primary u-mb-1">Teaching & Knowledge Sharing</h4>
                <p>Leading an AI bootcamp teaching the next generation of engineers. Passionate about making complex
                   AI concepts accessible and preparing students for what's actually used in production today
                   and what's coming tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card card--elevated">
          <div className="card-header">
            <h3>AI & Deep Learning Expertise</h3>
          </div>
          <div className="card-body">
            <div className="grid grid--2 grid--gap-sm">
              <div>
                <h5 className="u-text-muted u-mb-1">LLM & NLP</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">RAG Systems</span>
                  <span className="tag tag--small tag--secondary">Mixture of Experts</span>
                  <span className="tag tag--small tag--secondary">KV Cache Optimization</span>
                  <span className="tag tag--small tag--secondary">Fine-tuning</span>
                  <span className="tag tag--small tag--secondary">RLHF</span>
                  <span className="tag tag--small tag--secondary">Prompt Engineering</span>
                  <span className="tag tag--small tag--secondary">Multi-modal</span>
                  <span className="tag tag--small tag--secondary">Hybrid Search</span>
                </div>
              </div>
              <div>
                <h5 className="u-text-muted u-mb-1">Deep Learning</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">CNNs</span>
                  <span className="tag tag--small tag--secondary">Diffusion Models</span>
                  <span className="tag tag--small tag--secondary">Autoencoders</span>
                  <span className="tag tag--small tag--secondary">Transformers</span>
                  <span className="tag tag--small tag--secondary">Reinforcement Learning</span>
                  <span className="tag tag--small tag--secondary">Unsupervised Learning</span>
                  <span className="tag tag--small tag--secondary">GANs</span>
                </div>
              </div>
              <div>
                <h5 className="u-text-muted u-mb-1">AI Agents & Orchestration</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">Autonomous Agents</span>
                  <span className="tag tag--small tag--secondary">Multi-Agent Systems</span>
                  <span className="tag tag--small tag--secondary">ReAct</span>
                  <span className="tag tag--small tag--secondary">Chain-of-Thought</span>
                  <span className="tag tag--small tag--secondary">Tool Use & Function Calling</span>
                  <span className="tag tag--small tag--secondary">Knowledge Graphs</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>Journey to AI Leadership</h2>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              My path to AI leadership began with a mathematics foundation from Ohio State, advanced through a 4.0 GPA MS in Computer Science 
              from Georgia Tech, and was refined through leadership roles managing technical teams and complex systems. This unique combination 
              of technical depth, leadership experience, and business acumen enables me to implement cutting-edge AI solutions that actually 
              work in production.
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
          <h2>Teaching the Next Generation of AI Engineers</h2>
        </div>
        <div className="card card--elevated">
          <div className="card-body">
            <p className="u-text-lg u-mb-3">
              Leading an intensive AI Bootcamp where I teach 20+ students everything from Python fundamentals to production AI -
              spanning machine learning, deep learning, LLMs, RAG, and agentic systems. My philosophy: teach what's actually
              being used in production today and prepare students for what's coming tomorrow.
            </p>
            <div className="grid grid--3 u-text-center">
              <div>
                <div className="u-text-2xl u-text-primary u-font-bold">20+</div>
                <div className="u-text-sm u-text-muted">Students</div>
              </div>
              <div>
                <div className="u-text-2xl u-text-primary u-font-bold">State-of-the-Art</div>
                <div className="u-text-sm u-text-muted">Curriculum</div>
              </div>
              <div>
                <div className="u-text-2xl u-text-primary u-font-bold">Production-Ready</div>
                <div className="u-text-sm u-text-muted">Skills</div>
              </div>
            </div>
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
              My commitment to user-centric innovation extends beyond technology. Through organizing community events for 1,000+ attendees 
              and volunteering to improve public systems, I've learned that the best solutions are those that genuinely help people. 
              This philosophy drives my approach to AI: implementing cutting-edge technology not because it's cool, but because it 
              solves real problems for real users.
            </p>
          </div>
        </div>
      </section>

    </article>
  </Main>
  );
};

export default About;