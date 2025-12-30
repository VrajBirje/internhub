import React from 'react'
import { Link } from 'react-router-dom'

const HomepageFooter: React.FC = () => (
  <footer className="hp-footer">
    <div className="hp-footer-inner">
      <div className="col brand">
        <h4>InternHub</h4>
        <p>
          Connecting students with meaningful internships and employers.
        </p>
      </div>

      <div className="cols">
        <div className="col">
          <strong>Explore</strong>
          <ul>
            <li><Link to="/public/internships">Internships</Link></li>
            <li><Link to="/browse/companies">Companies</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="col">
          <strong>Legal</strong>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="col">
          <strong>Categories</strong>
          <ul>
            <li><Link to="/category/web">Web Development</Link></li>
            <li><Link to="/category/app">App Development</Link></li>
            <li><Link to="/category/content">Content Writing</Link></li>
            <li><Link to="/category/design">Design</Link></li>
            <li><Link to="/category/data">Data Science</Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="hp-footer-bottom">
      © {new Date().getFullYear()} InternHub. All rights reserved.
    </div>
  </footer>
)

export default HomepageFooter
