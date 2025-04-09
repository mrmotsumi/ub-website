import React from 'react';
import '../styles/components/hero.css';
// import heroImage from '../assets/tb-medication-adherence.jpg'; // Add this image to your assets

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>TB Medication Adherence Saves Lives</h1>
        <p className="hero-subtitle">Complete your full treatment course to prevent drug resistance and protect your community</p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Treatment success rate with good adherence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6-9</div>
            <div className="stat-label">Months of continuous treatment needed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10×</div>
            <div className="stat-label">Harder to treat drug-resistant TB</div>
          </div>
        </div>
        
        <div className="hero-cta">
          <button className="cta-button">Why Adherence Matters</button>
          <button className="secondary-button">Adherence Tips</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;