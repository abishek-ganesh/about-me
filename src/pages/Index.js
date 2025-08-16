import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import testimonials, { socialProof } from '../data/testimonials';
import PhotoCarousel from '../components/common/PhotoCarousel';
import { getCarouselPhotos } from '../data/photos';

const Index = () => {
  const carouselPhotos = getCarouselPhotos();

  return (
    <Main
      description={"Abishek Ganesh - State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment"}
      structuredDataType="home"
    >
      <article className="post page" id="index">
        <section className="hero u-text-center u-mb-4">
          <header>
            <h1 className="u-text-3xl u-font-bold u-mb-2">
              I implement the latest AI breakthroughs<br/>for companies that can't afford to be second
            </h1>
            <p className="u-text-xl u-text-primary">
              State-of-the-Art AI Implementation Specialist | RAG Systems | AI Agents | Always Learning What's Next
            </p>
          </header>
        </section>

        {/* Meet Abishek Carousel Section */}
        <section className="section-content u-mb-4">
          <div className="section-header">
            <h2>Beyond the Code: Meet the Person Behind the AI</h2>
          </div>
          <PhotoCarousel
            photos={carouselPhotos}
            transitionType="fade"
            showCaptions={true}
            autoPlay={true}
            interval={7000}
            showThumbnails={true}
            className="homepage-carousel"
          />
        </section>

      <section className="section-content">
        <div className="section-header">
          <h2>Cutting-Edge AI Implementations</h2>
        </div>
        <div className="grid grid--2 grid--gap-lg">
          <div className="card">
            <div className="card-body">
              <h3 className="u-flex u-items-center u-gap-1 u-mb-2">
                <span role="img" aria-label="Brain">🧠</span> State-of-the-Art RAG Systems
              </h3>
              <p className="u-mb-0">
                Advanced retrieval-augmented generation with hybrid search, multi-stage reranking, and dynamic context optimization. 
                Production systems serving 10M+ queries monthly with sub-100ms latency.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="u-flex u-items-center u-gap-1 u-mb-2">
                <span role="img" aria-label="Robot">🤖</span> AI Agents & Multi-Agent Systems
              </h3>
              <p className="u-mb-0">
                Building autonomous agents with tool use, reasoning, and decision-making. Implementing ReAct, 
                Chain-of-Thought, and multi-agent orchestration for enterprise automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>AI Impact Metrics</h2>
        </div>
        <div className="grid grid--4 grid--gap-sm u-mb-2">
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">5+ Years</div>
              <div className="u-text-sm u-text-muted">Implementing bleeding-edge AI</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">15+ Companies</div>
              <div className="u-text-sm u-text-muted">From stealth startups to Fortune 500</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">99.9% Uptime</div>
              <div className="u-text-sm u-text-muted">On production AI systems</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">60% MTTR</div>
              <div className="u-text-sm u-text-muted">Reduction through AI architecture</div>
            </div>
          </div>
        </div>
        <div className="grid grid--4 grid--gap-sm">
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">1M+ Daily</div>
              <div className="u-text-sm u-text-muted">ML predictions served at scale</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">Sub-100ms</div>
              <div className="u-text-sm u-text-muted">Response times for real-time AI</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">GPT-5, Claude 4.1 Opus</div>
              <div className="u-text-sm u-text-muted">Latest models in production</div>
            </div>
          </div>
          <div className="card card--compact u-text-center">
            <div className="card-body">
              <div className="u-text-2xl u-font-bold u-text-primary u-mb-1">Always First</div>
              <div className="u-text-sm u-text-muted">To implement what's next</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content u-mt-4">
        <div className="section-header">
          <h2>Truly State-of-the-Art Implementations</h2>
        </div>
        <div className="grid grid--4 grid--gap-lg u-mb-3">
          <div className="card">
            <div className="card-body">
              <h4 className="u-mb-2">Advanced RAG Systems</h4>
              <p className="u-text-sm u-text-muted u-mb-0">
                Hybrid search, multi-stage reranking, dynamic context windows, knowledge graph integration
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="u-mb-2">AI Agent Expertise</h4>
              <p className="u-text-sm u-text-muted u-mb-0">
                Autonomous agents, multi-agent orchestration, ReAct & Chain-of-Thought implementations
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="u-mb-2">Latest Models Deployed</h4>
              <p className="u-text-sm u-text-muted u-mb-0">
                GPT-5, Claude 4.1 Opus, Gemini Pro, Llama 3.1, and whatever breakthrough comes next
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="u-mb-2">User-Centric Innovation</h4>
              <p className="u-text-sm u-text-muted u-mb-0">
                Leveraging cutting-edge tech in smart ways that genuinely help people
              </p>
            </div>
          </div>
        </div>
        <div className="u-text-center">
          <Link to="/projects" className="btn btn--ghost">
            View detailed project case studies →
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-content u-mt-4">
        <div className="card card--gradient">
          <div className="card-body">
            <h3 className="u-text-center u-mb-3">Building Impact Together</h3>
            <div className="grid grid--2 grid--gap-lg u-text-center">
              <div>
                <div className="u-text-3xl u-font-bold u-text-primary">{socialProof.yearsExperience}</div>
                <div className="u-text-sm u-text-muted">Years Experience</div>
              </div>
              <div>
                <div className="u-text-3xl u-font-bold u-text-primary">{socialProof.projectsCompleted}</div>
                <div className="u-text-sm u-text-muted">Projects Completed</div>
              </div>
              <div>
                <div className="u-text-3xl u-font-bold u-text-primary">{socialProof.studentsTeaching}</div>
                <div className="u-text-sm u-text-muted">Students Teaching</div>
              </div>
              <div>
                <div className="u-text-3xl u-font-bold u-text-primary">{socialProof.clientsServed}</div>
                <div className="u-text-sm u-text-muted">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Coming Soon */}
      <TestimonialsSection 
        testimonials={testimonials}
        showPlaceholder={testimonials.length === 0}
      />

      <section className="section-cta u-mt-4">
        <h2>Ready to Deploy Tomorrow's AI Today?</h2>
        <p>
          I help companies implement truly cutting-edge AI - RAG systems, AI agents, and whatever breakthrough comes next. 
          Let's leverage the latest technologies in smart ways that help your users.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn--primary">Schedule AI Strategy Session</Link>
          <Link to="/projects" className="btn btn--secondary">View Latest Implementations</Link>
        </div>
      </section>
    </article>
  </Main>
  );
};

export default Index;