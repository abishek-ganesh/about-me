import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import AnimatedPhoto from '../components/common/AnimatedPhoto';

const About = () => {
  return (
  <Main
    title="About"
    description="Abishek Ganesh - State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment"
  >
    <article className="post page" id="about">
      <div className="page-title">
        <h1>State-of-the-Art AI Implementation Specialist</h1>
        <span className="page-subtitle">Helping companies deploy cutting-edge AI models in production - from stealth startups to Fortune 500</span>
      </div>

      <section className="about-hero u-mb-4">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <p className="intro-text">
            I specialize in implementing the absolute latest in AI technology - RAG systems, AI agents, multi-agent architectures, 
            and whatever breakthrough comes next. I'm passionate about staying on the cutting edge and leveraging these technologies 
            in smart ways that genuinely help companies and their users. With 5+ years deploying state-of-the-art AI across industries, 
            I bridge the gap between research papers and production systems that actually work.
          </p>
          <div className="grid grid--4 u-mt-3">
            <div className="card card--compact u-text-center">
              <span className="metric-value">5+ Years</span>
              <span className="metric-label">Bleeding-Edge AI</span>
            </div>
            <div className="card card--compact u-text-center">
              <span className="metric-value">RAG & Agents</span>
              <span className="metric-label">Core Expertise</span>
            </div>
            <div className="card card--compact u-text-center">
              <span className="metric-value">15+ Companies</span>
              <span className="metric-label">AI Implementations</span>
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
                <h4 className="u-text-primary u-mb-1">State-of-the-Art AI Implementation Specialist</h4>
                <p>Expert in RAG systems: hybrid search, reranking, dynamic context optimization. AI agent development: 
                   autonomous agents, multi-agent orchestration, tool use. Deploy latest foundation models (GPT-5, Claude 4.1 Opus, 
                   Gemini Pro) and whatever comes next. Always first to production with emerging technologies.</p>
              </div>
              <div className="list-item u-mb-2">
                <h4 className="u-text-primary u-mb-1">Enterprise AI Innovation Consultant</h4>
                <p>Help Fortune 500 companies leverage truly cutting-edge AI (not just buzzwords). Strategic guidance on 
                   RAG, agents, and emerging AI paradigms. Risk mitigation for implementing tomorrow's tech today. 
                   Focus on user-centric solutions that actually help people.</p>
              </div>
              <div className="list-item u-mb-2">
                <h4 className="u-text-primary u-mb-1">AI Thought Leader & Continuous Learner</h4>
                <p>Passionate about keeping up with the state-of-the-art. Teaching teams about RAG, agents, and the next 
                   big thing. Speaking at conferences on real-world lessons from cutting-edge implementations. 
                   Philosophy: "If it's not helping users, it's not worth implementing"</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card card--elevated">
          <div className="card-header">
            <h3>Truly State-of-the-Art Expertise</h3>
          </div>
          <div className="card-body">
            <div className="grid grid--2 grid--gap-sm">
              <div>
                <h5 className="u-text-muted u-mb-1">RAG Systems Mastery</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">Hybrid Search</span>
                  <span className="tag tag--small tag--secondary">Multi-stage Reranking</span>
                  <span className="tag tag--small tag--secondary">Dynamic Context</span>
                  <span className="tag tag--small tag--secondary">Knowledge Graphs</span>
                </div>
              </div>
              <div>
                <h5 className="u-text-muted u-mb-1">AI Agent Development</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">Autonomous Agents</span>
                  <span className="tag tag--small tag--secondary">Multi-Agent Systems</span>
                  <span className="tag tag--small tag--secondary">ReAct</span>
                  <span className="tag tag--small tag--secondary">Chain-of-Thought</span>
                </div>
              </div>
              <div>
                <h5 className="u-text-muted u-mb-1">Latest Models Deployed</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">GPT-5</span>
                  <span className="tag tag--small tag--secondary">Claude 4.1 Opus</span>
                  <span className="tag tag--small tag--secondary">Gemini Pro</span>
                  <span className="tag tag--small tag--secondary">Llama 3.1</span>
                </div>
              </div>
              <div>
                <h5 className="u-text-muted u-mb-1">Advanced Techniques</h5>
                <div className="u-flex u-flex-wrap u-gap-1">
                  <span className="tag tag--small tag--secondary">Fine-tuning</span>
                  <span className="tag tag--small tag--secondary">RLHF</span>
                  <span className="tag tag--small tag--secondary">Constitutional AI</span>
                  <span className="tag tag--small tag--secondary">Multi-modal</span>
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
              src="/images/august-2025/website-01.JPG"
              alt="Leading AI innovation"
              size="medium"
              shape="rounded"
              animation="slideUp"
              delay={0}
            />
            <div className="timeline-content">
              <h3>Present</h3>
              <p>Leading AI innovation with state-of-the-art implementations</p>
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
          <h2>Cutting-Edge AI Implementations</h2>
        </div>
        <div className="grid grid--4 grid--gap-sm">
          <div className="card card--compact u-text-center">
            <div className="u-text-3xl u-mb-1">
              <span role="img" aria-label="Brain">🧠</span>
            </div>
            <p className="u-mb-0 u-text-sm">Production RAG systems serving 10M+ queries monthly</p>
          </div>
          <div className="card card--compact u-text-center">
            <div className="u-text-3xl u-mb-1">
              <span role="img" aria-label="Robot">🤖</span>
            </div>
            <p className="u-mb-0 u-text-sm">Multi-agent systems reducing human escalations by 70%</p>
          </div>
          <div className="card card--compact u-text-center">
            <div className="u-text-3xl u-mb-1">
              <span role="img" aria-label="Lightning">⚡</span>
            </div>
            <p className="u-mb-0 u-text-sm">Sub-100ms latency on real-time AI inference systems</p>
          </div>
          <div className="card card--compact u-text-center">
            <div className="u-text-3xl u-mb-1">
              <span role="img" aria-label="Rocket">🚀</span>
            </div>
            <p className="u-mb-0 u-text-sm">First to deploy GPT-5, Claude 4.1 Opus, and what's next</p>
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
              Leading an intensive AI Bootcamp where I teach 20+ students everything from Python fundamentals to the absolute latest in AI - 
              including RAG systems, AI agents, and emerging paradigms. My philosophy: teach what's actually being used in production today 
              and prepare students for what's coming tomorrow.
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

      <section className="section-cta u-mt-4">
        <h2>Let's Implement What's Next</h2>
        <p>
          Whether you need to deploy cutting-edge RAG systems, build AI agents, or implement whatever breakthrough comes next, 
          I'm here to help you be first to market with technology that actually works.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn--primary">Schedule AI Strategy Session</Link>
          <Link to="/projects" className="btn btn--secondary">View Cutting-Edge Implementations</Link>
        </div>
      </section>
    </article>
  </Main>
  );
};

export default About;