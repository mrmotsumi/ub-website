import React from 'react';

const Prevention = () => {
  return (
    <section className="prevention">
      <h2>Preventative Strategies</h2>
      
      <div className="prevention-section">
        <h3>Reduce Transmission</h3>
        <ul>
          <li>Good hygiene: washing hands after coughing and sneezing</li>
          <li>Ventilation: ensuring good ventilation in your home</li>
          <li>Avoiding close contact with other people when infected: isolate oneself to avoid transmission</li>
          <li>Wearing a mask</li>
        </ul>
      </div>
      
      <div className="prevention-section">
        <h3>Treating Inactive TB</h3>
        <ul>
          <li>Take all TB medicines exactly as prescribed</li>
        </ul>
      </div>
      
      <div className="prevention-section">
        <h3>Vaccination</h3>
        <ul>
          <li>The BCG (Bacillus Calmette Guerin) vaccine can help prevent TB</li>
        </ul>
      </div>
      
      <div className="prevention-section">
        <h3>Other Strategies</h3>
        <ul>
          <li>Contact tracing</li>
          <li>Treatment of HIV-infected persons with ARV</li>
        </ul>
      </div>
    </section>
  );
};

export default Prevention;