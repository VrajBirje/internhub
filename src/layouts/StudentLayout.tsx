import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const StudentLayout: React.FC = () => (
  <div>
    <header style={{padding:10, borderBottom:'1px solid #ddd'}}>
      <Link to="/student">Dashboard</Link> | <Link to="/student/profile">Profile</Link>
    </header>
    <main style={{padding:20}}>
      <Outlet />
    </main>
  </div>
)

export default StudentLayout
