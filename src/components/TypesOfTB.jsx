import React from 'react';
import '../styles/components/types.css'; // We'll create this CSS file
import latentTBIcon from '../assets/active-icon.png'; // Add these SVG icons
import activeTBIcon from '../assets/active-icon.png';

const TypesOfTB = () => {
  return (
    <section className="types-section">
      <div className="section-header">
        <h2>Types of Tuberculosis</h2>
        <p>Understanding the different forms of TB is crucial for proper diagnosis and treatment</p>
      </div>

      <div className="types-grid">
        {/* Latent TB Card */}
        <div className="type-card">
          <div className="card-icon">
            <img src={latentTBIcon} alt="Latent TB icon" />
          </div>
          <h3>Latent Tuberculosis Infection (LTBI)</h3>
          <div className="card-content">
            <p>
              In latent TB infection:
            </p>
            <ul className="type-features">
              <li>Bacteria are present but inactive</li>
              <li>No symptoms are visible</li>
              <li>Not contagious to others</li>
              <li>Positive TB skin or blood test</li>
              <li>Normal chest X-ray</li>
              <li>Can develop into active TB if untreated</li>
            </ul>
            <div className="treatment-info">
              <h4>Typical Treatment:</h4>
              <p>3-9 months of isoniazid or 3-4 months of rifampin</p>
            </div>
          </div>
        </div>

        {/* Active TB Card */}
        <div className="type-card">
          <div className="card-icon">
            <img src={activeTBIcon} alt="Active TB icon" />
          </div>
          <h3>Active Tuberculosis Disease</h3>
          <div className="card-content">
            <p>
              In active TB disease:
            </p>
            <ul className="type-features">
              <li>Bacteria are active and multiplying</li>
              <li>Symptoms are present (cough, fever, weight loss)</li>
              <li>Contagious to others</li>
              <li>Positive TB skin or blood test</li>
              <li>Abnormal chest X-ray</li>
              <li>Sputum tests positive for TB bacteria</li>
            </ul>
            <div className="treatment-info">
              <h4>Typical Treatment:</h4>
              <p>6-9 months of multiple antibiotics (isoniazid, rifampin, etc.)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="type-comparison">
        <h3>Key Differences Between Latent and Active TB</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>Latent TB</th>
              <th>Active TB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Symptoms</td>
              <td>None</td>
              <td>Present (cough, fever, weight loss)</td>
            </tr>
            <tr>
              <td>Contagious</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Bacteria State</td>
              <td>Inactive/dormant</td>
              <td>Active and multiplying</td>
            </tr>
            <tr>
              <td>Diagnosis</td>
              <td>Positive test only</td>
              <td>Positive test + symptoms/X-ray/sputum</td>
            </tr>
            <tr>
              <td>Treatment Duration</td>
              <td>3-9 months</td>
              <td>6-9 months</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TypesOfTB;