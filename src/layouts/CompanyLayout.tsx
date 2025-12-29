import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const CompanyLayout: React.FC = () => (
  <div>
    <header style={{padding:10, borderBottom:'1px solid #ddd'}}>
      <Link to="/company">Company Dashboard</Link>
    </header>
    <main style={{padding:20}}>
      <Outlet />
    </main>
  </div>
)

export default CompanyLayout
