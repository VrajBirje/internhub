import React from 'react'

const ProudPartners: React.FC = () => (
  <section className="partners-section">
    <h3>🤝 Proud Partners</h3>
    <div className="partners-logos">
      {['Startup India','AICTE','MSME','TechGuild','CampusWorks'].map((p,i)=> (
        <div key={i} className="partner-card">{p}</div>
      ))}
    </div>
  </section>
)

export default ProudPartners
