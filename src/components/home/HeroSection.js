import React from 'react';
import '../../static/css/main.scss';
import LivingBackground from './LivingBackground';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">ABISHEK</span>
          <span className="line">GANESH</span>
        </h1>
        <div className="hero-subtitle">
          <span className="role">AI Engineer</span>
          <span className="separator">•</span>
          <span className="role">Voice Actor</span>
        </div>
        <p className="hero-tagline">Bridging the gap between artificial intelligence and human expression.</p>
      </div>
      <div className="hero-background">
        <LivingBackground />
        <div className="noise-overlay"></div>
      </div>
    </section>
  );
};

export default HeroSection;
