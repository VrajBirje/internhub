import React from 'react'
import InternshipCard from '../../components/InternshipCard'

const StudentDashboard: React.FC = () => (
  <div>
    <h2>Student Dashboard</h2>
    <section>
      <h3>Recommended Internships</h3>
      <InternshipCard />
    </section>
  </div>
)

export default StudentDashboard
