import React from 'react'
import { Link } from 'react-router-dom'

const HomepageFooter: React.FC = () => (
  <footer className="hp-footer">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:24}}>
      <div className="col">
        <h4>InternHub</h4>
        <p style={{maxWidth:240,color:'#4b5563'}}>Connecting students with meaningful internships and employers.</p>
      </div>

      <div className="cols" style={{flex:1}}>
        <div className="col">
          <strong>Explore</strong>
          <ul style={{listStyle:'none',padding:0,marginTop:8}}>
            <li><Link to="/public/internships">Internships</Link></li>
            <li><Link to="/browse/companies">Companies</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="col">
          <strong>Legal</strong>
          <ul style={{listStyle:'none',padding:0,marginTop:8}}>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="col">
          <strong>Categories</strong>
          <ul style={{listStyle:'none',padding:0,marginTop:8}}>
            <li><Link to="/category/web">Web Development</Link></li>
            <li><Link to="/category/app">App Development</Link></li>
            <li><Link to="/category/content">Content Writing</Link></li>
            <li><Link to="/category/design">Design</Link></li>
            <li><Link to="/category/data">Data Science</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{marginTop:12,color:'#6b7280',fontSize:13}}>© {new Date().getFullYear()} InternHub. All rights reserved.</div>
  </footer>
)

export default HomepageFooter
