import React from 'react'
import { Link } from 'react-router-dom'

const FooterHome: React.FC = () => (
  <footer className="home-footer">
    <div className="footer-cols">
      <div>
        <h4>About</h4>
        <p>Helping students find meaningful internships.</p>
      </div>
      <div>
        <h4>Legal</h4>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
      <div>
        <h4>Categories</h4>
        <p>Web Development</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Finance</p>
        <p>Content</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>contact@internhub.example</p>
      </div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} InternHub — All rights reserved</div>
  </footer>
)

export default FooterHome
