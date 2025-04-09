import React from 'react';

const SupportGroups = () => {
  const groups = [
    {
      name: "Tebelopele Wellness Center",
      description: "Established in 2000, Tebelopele is Botswana's largest Voluntary Counseling and Testing (VCT) provider. They offer a range of services, including TB treatment, HIV testing, STI screening, and sexual reproductive health services.",
      services: [
        "TB treatment",
        "HIV testing",
        "STI screening",
        "Sexual reproductive health services"
      ]
    },
    {
      name: "University of Botswana TB Clinic",
      description: "The University of Botswana provides comprehensive TB services, including screening, diagnostic tests, medications, and counseling.",
      services: [
        "TB screening",
        "Diagnostic tests",
        "Medications",
        "Counseling",
        "Community TB care services"
      ]
    },
    {
      name: "Botswana Network on Ethics, Law, and HIV/AIDS (BONELA)",
      description: "BONELA works to ensure that all community members have equal access to TB and HIV services. They focus on providing services to vulnerable groups.",
      focus: [
        "Women",
        "Children",
        "People with disabilities"
      ]
    }
  ];

  return (
    <section className="support-groups">
      <h2>TB Support Groups</h2>
      
      <div className="support-content">
        <h3>Key Elements of Support Groups</h3>
        <ul>
          <li>Understanding TB's symptoms, prevention and treatment</li>
          <li>Emotional and peer support: Sharing personal experiences</li>
          <li>Community and family engagement</li>
          <li>Question and answer sessions</li>
        </ul>
      </div>
      
      <div className="group-list">
        <h3>Examples of Support Groups</h3>
        
        {groups.map((group, index) => (
          <div key={index} className="group-card">
            <h4>{group.name}</h4>
            <p>{group.description}</p>
            
            {group.services && (
              <div className="services">
                <h5>Services:</h5>
                <ul>
                  {group.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {group.focus && (
              <div className="focus">
                <h5>Focus Groups:</h5>
                <ul>
                  {group.focus.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportGroups;