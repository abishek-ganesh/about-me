import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../common/GlassCard';
import projects from '../../data/projects';

const BentoGrid = () => {
  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <div className="bento-grid">
      {/* Area 1: AI Engineer / Profile */}
      <GlassCard className="bento-item profile-card" hoverEffect>
        <div className="content">
          <h3>AI Engineer</h3>
          <p>Building intelligent systems that solve real-world problems.</p>
          <Link to="/projects" className="button small">View Work</Link>
        </div>
      </GlassCard>

      {/* Area 2: Voice Actor */}
      <GlassCard className="bento-item voice-card" hoverEffect>
        <div className="content">
          <h3>Voice Actor</h3>
          <p>Bringing stories to life with versatility and emotion.</p>
          <div className="waveform-visual">
            {/* Placeholder for waveform animation */}
            <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
            <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
          </div>
          <Link to="/voiceover" className="button small">Listen to Demos</Link>
        </div>
      </GlassCard>

      {/* Area 3: Featured Project */}
      <GlassCard className="bento-item project-card" hoverEffect>
        <div className="content">
          <span className="label">Featured Project</span>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.subtitle}</p>
          <div className="tags">
            {featuredProject.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
        <img src={featuredProject.image} alt={featuredProject.title} className="project-bg" />
      </GlassCard>

      {/* Area 4: Stats / Connect */}
      <GlassCard className="bento-item stats-card" hoverEffect>
        <div className="content">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://github.com/abishek-ganesh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/abishekganesh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default BentoGrid;
