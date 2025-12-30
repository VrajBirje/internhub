import React from 'react'

const partners = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon']

const ProudPartners: React.FC = () => (
  <section className="partners-section">
    <h3>Our Proud Partners</h3>
    <p className="partners-subtitle">
      Trusted by forward-thinking companies collaborating with student talent.
    </p>

    <div className="partners">
      {partners.map((p, i) => (
        <div key={i} className="partner-logo">
          {p}
        </div>
      ))}
    </div>
  </section>
)

export default ProudPartners
