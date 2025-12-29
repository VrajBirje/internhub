import React from 'react'

const CompanyCard: React.FC<{ name?: string }> = ({ name = 'Company Name' }) => (
  <div style={{border:'1px solid #eee', padding:12, borderRadius:6}}>
    <h4>{name}</h4>
    <p>Verified • Industry</p>
  </div>
)

export default CompanyCard
