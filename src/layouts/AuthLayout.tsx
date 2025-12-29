import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <div style={{maxWidth:800, margin:'24px auto', padding:20}}>
      <header style={{marginBottom:12}}>
        <Link to="/">InternHub</Link>
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default AuthLayout
