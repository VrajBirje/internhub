import React from 'react'

const partners = ['Alpha','Beta','Gamma','Delta','Epsilon']

const ProudPartners: React.FC = () => (
  <section style={{marginTop:20}}>
    <h3>Our Proud Partners</h3>
    <div className="partners">
      {partners.map((p,i) => (
        <div key={i} className="partner-logo">{p}</div>
      ))}
    </div>
  </section>
)

export default ProudPartners
