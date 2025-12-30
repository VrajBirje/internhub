import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import AnnouncementStrip from '../components/homepage/AnnouncementStrip'
import HomepageNavbar from '../components/homepage/HomepageNavbar'
import HomepageFooter from '../components/homepage/HomepageFooter'

const headerStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderBottom: '1px solid #eee' }
const navStyle: React.CSSProperties = { display: 'flex', gap: 12, alignItems: 'center' }

const MainLayout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AnnouncementStrip />
      <HomepageNavbar />

      <main style={{ flex: 1, padding: '20px 5vw' }}>
        <Outlet />
      </main>

      <HomepageFooter />
    </div>
  )
}

export default MainLayout
