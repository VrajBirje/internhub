import React from 'react'

const ApplicationCard: React.FC<{ applicant?: string }> = ({ applicant = 'Student Name' }) => (
  <div style={{border:'1px solid #eee', padding:12, borderRadius:6}}>
    <strong>{applicant}</strong>
    <div>Applied for: Internship</div>
  </div>
)

export default ApplicationCard
