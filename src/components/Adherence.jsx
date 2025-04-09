import React from 'react';

const Adherence = () => {
  return (
    <section className="adherence">
      <h2>Medication Adherence</h2>
      
      <div className="importance">
        <h3>Importance of TB Medication Adherence</h3>
        <ul>
          <li>
            <strong>Improved quality of life:</strong> Effective treatment improves patient's quality of life 
            allowing them to return to work, school and their normal activities more quickly also leads 
            to better mental health outcomes and social reintegration.
          </li>
          <li>
            <strong>Cure and recovery:</strong> TB treatment typically lasts 6-9 months and completing the 
            full course is essential for curing the disease.
          </li>
          <li>
            <strong>Preventing resistance:</strong> Non-adherence can lead to drug resistant TB which are 
            much harder and more expensive to treat.
          </li>
          <li>
            <strong>Community health:</strong> TB is contagious, so Non-adherence not only affects the 
            individual but also poses risk to public health.
          </li>
        </ul>
      </div>
      
      <div className="ensuring-adherence">
        <h3>Ensuring Adherence of TB Medication</h3>
        <ul>
          <li>Set a Routine: Take your medication at the same time every day</li>
          <li>Use Reminders: Set alarms or use a medication reminder app</li>
          <li>Keep a Medication Log: Write down when you take your medication</li>
          <li>Organize Your Medication: Use a pill organizer or blister pack</li>
          <li>Talk to Your Doctor: If you experience side effects</li>
          <li>Get Support: Ask a family member or friend to remind you</li>
          <li>Understand the Importance: Educate yourself about why the medication is important</li>
          <li>Address Barriers: Discuss challenges with your healthcare provider</li>
          <li>Directly Observed Therapy: Healthcare workers observe the patient take their medication</li>
          <li>Patient education: Providing clear tailored information about TB</li>
        </ul>
      </div>
      
      <div className="challenges">
        <h3>Challenges of TB Medication Adherence</h3>
        <ul>
          <li>The duration of treatment is long usually six months</li>
          <li>Combination therapy is required</li>
          <li>Side effects may be unpleasant</li>
          <li>Cost of medication can be a serious barrier</li>
          <li>Patients often experience rapid improvement in symptoms</li>
        </ul>
      </div>
    </section>
  );
};

export default Adherence;