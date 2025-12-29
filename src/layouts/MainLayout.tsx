import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div>
      <header style={{padding:10, borderBottom:'1px solid #eee'}}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/auth/login">Login</Link>
        </nav>
      </header>
      <main style={{padding:20}}>
        <Outlet />
      </main>
      <footer style={{padding:10, borderTop:'1px solid #eee'}}>
        InternHub © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default MainLayout
