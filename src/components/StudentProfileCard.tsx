import React from 'react'

const StudentProfileCard: React.FC<{ name?: string }> = ({ name = 'Student Name' }) => (
  <div style={{border:'1px solid #eee', padding:12, borderRadius:6}}>
    <h4>{name}</h4>
    <p>Branch • College</p>
  </div>
)

export default StudentProfileCard
