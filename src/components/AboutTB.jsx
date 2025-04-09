import React from 'react';
import '../styles/components/about.css';
import tbBacteriaImage from '../assets/tb-bacteria.jpg'; // You'll need to add this image to your assets

const AboutTB = () => {
  return (
    <section className="about-section">
      <div className="section-header">
        <h2>Understanding Tuberculosis</h2>
        <p>Learn about the causes, transmission, and impact of this global health concern</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>What is Tuberculosis?</h3>
          <p>
            Tuberculosis (TB) is a contagious and potentially serious bacterial infection that primarily affects the lungs, 
            but can also impact other organs like the kidneys, spine, and brain. It's caused by the bacterium 
            <em> Mycobacterium tuberculosis</em>.
          </p>
          
          <div className="highlight-box">
            <p>
              TB remains one of the world's deadliest infectious killers, with about 1.5 million deaths each year.
            </p>
          </div>

          <h3>How TB Spreads</h3>
          <p>
            TB is transmitted through the air when an infected person coughs, sneezes, or talks, releasing 
            microscopic droplets containing the bacteria. Others may inhale these droplets and become infected.
          </p>
          
          <h3>Global Impact</h3>
          <p>
            While TB is preventable and curable, it continues to disproportionately affect vulnerable populations 
            worldwide, particularly in developing countries and among people with compromised immune systems.
          </p>
        </div>

        <div className="about-image">
          <img 
            src={tbBacteriaImage} 
            alt="Mycobacterium tuberculosis bacteria under microscope" 
            loading="lazy"
          />
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-number">10M</div>
          <div className="stat-label">Cases annually</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1.5M</div>
          <div className="stat-label">Deaths each year</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1/4</div>
          <div className="stat-label">Of world population infected</div>
        </div>
      </div>
    </section>
  );
};

export default AboutTB;