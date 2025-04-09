import React from 'react';
import '../styles/components/treatment.css'; // We'll create this CSS file
import treatmentImage from '../assets/tb-treatment.jpg'; // Add this image to your assets

const Treatment = () => {
  const medications = [
    { 
      name: "Isoniazid (INH)", 
      sideEffects: ["Hepatotoxicity", "Peripheral neuropathy", "Rash", "Fever"],
      dosage: "5 mg/kg daily (max 300mg)",
      duration: "6-9 months",
      icon: "💊"
    },
    { 
      name: "Rifampin (RIF)", 
      sideEffects: ["Hepatotoxicity", "Orange body fluids", "GI upset", "Flu-like symptoms"],
      dosage: "10 mg/kg daily (max 600mg)",
      duration: "6 months",
      icon: "🟠"
    },
    { 
      name: "Pyrazinamide (PZA)", 
      sideEffects: ["Hepatotoxicity", "Hyperuricemia", "Arthralgia", "Nausea"],
      dosage: "15-30 mg/kg daily (max 2g)",
      duration: "2 months (initial phase)",
      icon: "🦴"
    },
    { 
      name: "Ethambutol (EMB)", 
      sideEffects: ["Optic neuritis", "Color blindness", "Peripheral neuropathy"],
      dosage: "15-25 mg/kg daily",
      duration: "2 months (initial phase)",
      icon: "👁️"
    },
    { 
      name: "Streptomycin", 
      sideEffects: ["Ototoxicity", "Nephrotoxicity", "Vertigo", "Rash"],
      dosage: "15 mg/kg IM (max 1g)",
      duration: "2 months (initial phase)",
      icon: "💉"
    }
  ];

  const treatmentPhases = [
    {
      name: "Initial Phase",
      duration: "2 months",
      drugs: ["Isoniazid", "Rifampin", "Pyrazinamide", "Ethambutol"],
      goal: "Kill actively growing TB bacteria"
    },
    {
      name: "Continuation Phase",
      duration: "4 months",
      drugs: ["Isoniazid", "Rifampin"],
      goal: "Eliminate remaining dormant bacteria"
    }
  ];

  const resistantTBInfo = [
    "MDR-TB (Multidrug-resistant TB): Resistant to at least INH and RIF",
    "XDR-TB (Extensively drug-resistant TB): Resistant to INH, RIF, fluoroquinolones, and injectables",
    "Treatment for resistant TB may take 18-24 months with second-line drugs"
  ];

  return (
    <section className="treatment-section">
      <div className="section-header">
        <h2>TB Treatment Protocols</h2>
        <p>Comprehensive information about tuberculosis treatment options and medications</p>
      </div>

      <div className="treatment-overview">
        <div className="treatment-image">
          <img 
            src={treatmentImage} 
            alt="TB treatment medications" 
            loading="lazy"
          />
        </div>
        <div className="treatment-basics">
          <h3>Key Treatment Principles</h3>
          <ul className="treatment-principles">
            <li>Combination therapy prevents drug resistance</li>
            <li>Directly Observed Therapy (DOT) improves adherence</li>
            <li>Regular monitoring for side effects is crucial</li>
            <li>Complete the full course even if symptoms improve</li>
            <li>Treatment duration depends on drug susceptibility</li>
          </ul>
        </div>
      </div>

      <div className="treatment-phases">
        <h3>Standard Treatment Phases</h3>
        <div className="phase-cards">
          {treatmentPhases.map((phase, index) => (
            <div key={index} className="phase-card">
              <h4>{phase.name}</h4>
              <div className="phase-duration">{phase.duration}</div>
              <div className="phase-drugs">
                <strong>Drugs:</strong> {phase.drugs.join(", ")}
              </div>
              <div className="phase-goal">{phase.goal}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="medications-container">
        <h3>First-Line TB Medications</h3>
        <div className="medication-grid">
          {medications.map((med, index) => (
            <div key={index} className="medication-card">
              <div className="med-header">
                <span className="med-icon">{med.icon}</span>
                <h4>{med.name}</h4>
              </div>
              <div className="med-details">
                <div className="med-dosage">
                  <strong>Dosage:</strong> {med.dosage}
                </div>
                <div className="med-duration">
                  <strong>Duration:</strong> {med.duration}
                </div>
                <div className="med-side-effects">
                  <strong>Side Effects:</strong>
                  <ul>
                    {med.sideEffects.map((effect, i) => (
                      <li key={i}>{effect}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resistant-tb">
        <h3>Drug-Resistant TB</h3>
        <ul>
          {resistantTBInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
        <div className="warning-box">
          <h4>⚠️ Important Treatment Note:</h4>
          <p>
            TB medications must be taken exactly as prescribed for the full duration (typically 6-9 months). 
            Stopping early or missing doses can lead to treatment failure and drug-resistant TB, which is 
            much harder to treat and more dangerous to public health.
          </p>
        </div>
      </div>

      <div className="monitoring-section">
        <h3>Treatment Monitoring</h3>
        <div className="monitoring-cards">
          <div className="monitoring-card">
            <h4>Clinical Monitoring</h4>
            <ul>
              <li>Monthly symptom review</li>
              <li>Weight tracking</li>
              <li>Sputum tests at 2, 5, and 6 months</li>
            </ul>
          </div>
          <div className="monitoring-card">
            <h4>Lab Monitoring</h4>
            <ul>
              <li>Liver function tests (for hepatotoxic drugs)</li>
              <li>Visual acuity tests (for Ethambutol)</li>
              <li>Audiometry (for Streptomycin)</li>
            </ul>
          </div>
          <div className="monitoring-card">
            <h4>Adherence Support</h4>
            <ul>
              <li>Directly Observed Therapy (DOT)</li>
              <li>Medication reminders</li>
              <li>Support groups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;