import React from 'react'
import InternshipCardDetailed from './InternshipCardDetailed'

const categories = ['All','Tech','Design','Marketing','Business']

const HotInternships: React.FC = () => {
  return (
    <section className="hot-section">
      <h2>🔥 Hot Internships</h2>
      <div className="category-filters">
        {categories.map((c) => (
          <button key={c} className={`filter-btn`}>{c}</button>
        ))}
      </div>

      <div className="hot-grid">
        <InternshipCardDetailed title="Frontend Intern" company="TechCorp" stipend="₹12k - ₹20k" location="Remote" />
        <InternshipCardDetailed title="Data Analyst Intern" company="DataCo" stipend="₹8k - ₹15k" location="Bangalore" />
        <InternshipCardDetailed title="Product Intern" company="BuildIt" stipend="₹10k - ₹18k" location="Mumbai" />
        <InternshipCardDetailed title="UI/UX Intern" company="DesignStudio" stipend="Stipend: Unpaid" location="Delhi" />
      </div>
    </section>
  )
}

export default HotInternships
