import React from 'react'

type Props = {
  title: string
  company?: string
  location?: string
  stipend?: string
  tags?: string[]
}

const DetailedInternshipCard: React.FC<Props> = ({ title, company='Company', location='Remote', stipend='Unpaid', tags = [] }) => {
  return (
    <div className="internship-card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div className="title">{title}</div>
          <div className="meta">{company} • {location} • {stipend}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:12,color:'var(--muted)'}}>Posted 3d ago</div>
          <button className="apply">Apply</button>
        </div>
      </div>
      <div style={{marginTop:10}} className="tags">
        {tags.map((t,i) => <div className="tag" key={i}>{t}</div>)}
      </div>
    </div>
  )
}

export default DetailedInternshipCard
