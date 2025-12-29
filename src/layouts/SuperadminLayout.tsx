import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const SuperadminLayout: React.FC = () => (
  <div>
    <header style={{padding:10, borderBottom:'1px solid #ddd'}}>
      <Link to="/superadmin">Superadmin</Link>
    </header>
    <main style={{padding:20}}>
      <Outlet />
    </main>
  </div>
)

export default SuperadminLayout
