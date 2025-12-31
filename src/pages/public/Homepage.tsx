import React, {useState, useEffect} from 'react';
// import '../../assets/styles/HomePage.css';
import '../../assets/styles/homepage.css';
import HotInternships from '../../components/homepage/HotInternships';
import ProudPartners from '../../components/homepage/ProudPartners';

const slides = [
  {title:'Work on real projects with top startups', subtitle:'Paid & remote internships to kickstart your career'},
  {title:'Resume reviews & interview prep', subtitle:'Get noticed by recruiters'},
  {title:'Company hiring events this month', subtitle:'Join fairs & webinars'}
];

const HeroSlider: React.FC = () => {
  const [idx,setIdx] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i=> (i+1)%slides.length),4000);
    return ()=>clearInterval(t);
  },[]);
  return (
    <div className="hp-hero">
      <div className="hero-left">
        <h1 style={{margin:0}}>{slides[idx].title}</h1>
        <p style={{marginTop:8,color:'#334155'}}>{slides[idx].subtitle}</p>
        <div style={{marginTop:12}}>
          <button style={{background:'var(--primary)',color:'#fff',padding:'10px 14px',borderRadius:8,border:0,marginRight:8}}>Explore Internships</button>
          <button style={{background:'transparent',border:'1px solid var(--primary)',padding:'10px 14px',borderRadius:8}}>Post Internship</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-slide">
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:18,fontWeight:700}}>{slides[idx].title}</div>
            <div style={{marginTop:6,fontSize:14}}>{slides[idx].subtitle}</div>
          </div>
        </div>
        {/* <div className="hero-controls" style={{position:'absolute',right:40,top:'40%'}}>
          {slides.map((s,i)=> <div key={i} className={`hero-dot ${i===idx? 'active':''}`} onClick={()=>setIdx(i)} />)}
        </div> */}
      </div>
    </div>
  );
}

const Homepage: React.FC = () => {
  return (
    <div>
      <main style={{marginTop:18}}>
        <HeroSlider />
        <HotInternships />
        <ProudPartners />
      </main>
    </div>
  );
}

export default Homepage;
