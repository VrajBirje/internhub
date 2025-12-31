import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <div>
      {/* <header style={{marginBottom:12}}>
        <Link to="/">InternHub</Link>
      </header> */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default AuthLayout
