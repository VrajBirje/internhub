import React, {useState} from 'react'
import DetailedInternshipCard from './DetailedInternshipCard'

const categories = ['All','Web Development','App Development','Content','Design','Data Science']

const dummy = [
  {title:'Frontend Intern', company:'Acme Corp', location:'Bengaluru', stipend:'₹15,000', tags:['React','CSS','HTML']},
  {title:'Data Analyst Intern', company:'DataCo', location:'Mumbai', stipend:'₹12,000', tags:['Python','Pandas']},
  {title:'Content Writer', company:'WriteNow', location:'Remote', stipend:'₹8,000', tags:['Writing','SEO']},
  {title:'Mobile App Intern', company:'AppWorks', location:'Delhi', stipend:'₹10,000', tags:['Flutter','Dart']}
]

const HotInternships: React.FC = () =>{
  const [active,setActive] = useState('All')
  return (
    <section className="hot-section">
      <h3>Hot Internships</h3>
      <div className="category-filters">
        {categories.map(cat => (
          <button key={cat} className={`cat-btn ${active===cat? 'active':''}`} onClick={() => setActive(cat)}>{cat}</button>
        ))}
      </div>

      <div className="hot-grid">
        {dummy.map((d,idx) => (
          <DetailedInternshipCard key={idx} title={d.title} company={d.company} location={d.location} stipend={d.stipend} tags={d.tags} />
        ))}
      </div>
    </section>
  )
}

export default HotInternships
