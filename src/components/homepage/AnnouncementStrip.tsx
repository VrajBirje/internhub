import React from 'react'

const AnnouncementStrip: React.FC = () => {
  return (
    <div className="homepage-announce">
      <span>🔥 New: Internship Fair this week — Apply to featured roles now!</span>
      <button onClick={() => { /* dismiss logic can be added */ }}>✕</button>
    </div>
  )
}

export default AnnouncementStrip
