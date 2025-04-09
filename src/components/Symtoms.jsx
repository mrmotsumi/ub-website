import React from 'react';
import '../styles/components/symptoms.css'; // We'll create this CSS file
import tbLungsImage from '../assets/tb-lungs.jpg'; // Add this image to your assets

const Symptoms = () => {
  const symptomsList = [
    { symptom: "Persistent cough (3+ weeks)", severity: "High", icon: "💨" },
    { symptom: "Coughing up blood", severity: "Emergency", icon: "🩸" },
    { symptom: "Chest pain", severity: "High", icon: "💔" },
    { symptom: "Weakness", severity: "Moderate", icon: "🦵" },
    { symptom: "Fatigue", severity: "Moderate", icon: "😴" },
    { symptom: "Unintentional weight loss", severity: "High", icon: "⚖️" },
    { symptom: "Fever", severity: "Moderate", icon: "🌡️" },
    { symptom: "Night sweats", severity: "Moderate", icon: "💦" },
    { symptom: "Loss of appetite", severity: "Moderate", icon: "🍽️" },
    { symptom: "Shortness of breath", severity: "High", icon: "😮💨" }
  ];

  const emergencySymptoms = [
    "Coughing up blood",
    "Severe chest pain",
    "Difficulty breathing",
    "High fever (over 103°F/39.4°C)"
  ];

  return (
    <section className="symptoms-section">
      <div className="section-header">
        <h2>TB Symptoms & Warning Signs</h2>
        <p>Recognizing the symptoms of active tuberculosis is crucial for early diagnosis and treatment</p>
      </div>

      <div className="symptoms-content">
        <div className="symptoms-visual">
          <img 
            src={tbLungsImage} 
            alt="Tuberculosis affecting lungs" 
            className="symptoms-image"
            loading="lazy"
          />
          <div className="severity-legend">
            <h4>Symptom Severity:</h4>
            <div className="legend-item">
              <span className="legend-icon emergency">!</span>
              <span>Emergency - Seek immediate care</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon high">H</span>
              <span>High - See doctor within 24 hours</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon moderate">M</span>
              <span>Moderate - Schedule doctor visit</span>
            </div>
          </div>
        </div>

        <div className="symptoms-list">
          <h3>Common Symptoms of Active TB</h3>
          <ul className="symptoms-grid">
            {symptomsList.map((item, index) => (
              <li key={index} className={`symptom-item ${item.severity.toLowerCase()}`}>
                <span className="symptom-icon">{item.icon}</span>
                <div className="symptom-details">
                  <span className="symptom-name">{item.symptom}</span>
                  <span className="symptom-severity">{item.severity}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="emergency-warning">
            <h4>⚠️ When to Seek Emergency Care:</h4>
            <ul>
              {emergencySymptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <div className="note-box">
            <h4>Important Note:</h4>
            <p>
              Only Active TB presents noticeable symptoms. Latent TB has no symptoms but can become active later. 
              Some people may experience mild symptoms for months before seeking treatment, allowing the disease 
              to spread to others.
            </p>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <h3>Additional Information</h3>
        <div className="info-cards">
          <div className="info-card">
            <h4>Symptoms in Children</h4>
            <p>Children may show different symptoms including poor growth, swollen glands, or a TB meningitis infection.</p>
          </div>
          <div className="info-card">
            <h4>Extrapulmonary TB</h4>
            <p>When TB affects other organs, symptoms vary (back pain for spinal TB, blood in urine for kidney TB).</p>
          </div>
          <div className="info-card">
            <h4>HIV Coinfection</h4>
            <p>People with HIV may develop atypical symptoms or have TB in unusual locations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;