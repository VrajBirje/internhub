import React from 'react'
import { Link } from 'react-router-dom'

const HomepageNavbar: React.FC = () => {
  return (
    <div className="hp-navbar">
      <div className="nav-left">
        <Link className="brand" to="/">InternHub</Link>

        <div className="dropdown">
          <button>Internships ▾</button>
          <div className="dropdown-menu">
            <div style={{display:'flex',gap:12}}>
              <div className="col">
                <strong>Top Categories</strong>
                <div>Web Development</div>
                <div>App Development</div>
                <div>Content Writing</div>
                <div>Design</div>
                <div>Marketing</div>
              </div>
              <div className="col">
                <strong>More</strong>
                <div>DevOps</div>
                <div>Data Science</div>
                <div>QA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button>Top Skills ▾</button>
          <div className="dropdown-menu">
            <div className="col">React</div>
            <div className="col">Node.js</div>
            <div className="col">Python</div>
            <div className="col">Django</div>
            <div className="col">Flutter</div>
            <div className="col">AWS</div>
          </div>
        </div>

        <div className="dropdown">
          <button>Locations ▾</button>
          <div className="dropdown-menu">
            <div className="col">Delhi</div>
            <div className="col">Mumbai</div>
            <div className="col">Bengaluru</div>
            <div className="col">Hyderabad</div>
            <div className="col">Kolkata</div>
            <div className="col">Chennai</div>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="hp-search">
          <input placeholder="Search internships, skills, companies..." />
          <button className="search-btn">Search</button>
        </div>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/register" style={{background:'var(--primary)',color:'#fff',padding:'8px 10px',borderRadius:8,textDecoration:'none'}}>Company Register</Link>
      </div>
    </div>
  )
}

export default HomepageNavbar
