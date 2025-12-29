import React from 'react'

const InternshipCard: React.FC<{ title?: string }> = ({ title = 'Internship Title' }) => {
  return (
    <div style={{border:'1px solid #eee', padding:12, borderRadius:6}}>
      <h3>{title}</h3>
      <p>Company • Location • Stipend</p>
    </div>
  )
}

export default InternshipCard
