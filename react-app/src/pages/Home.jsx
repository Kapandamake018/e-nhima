import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner container">
          <h1>National Health Insurance — Zambia</h1>
          <p className="lede">Reliable healthcare financing for every Zambian household.</p>
          <div style={{marginTop:16}}>
            <Link to="/dashboard" className="btn primary" style={{padding:'10px 16px',borderRadius:8}}>Go to Dashboard</Link>
          </div>
        </div>
      </section>

      <section className="features container">
        <h2>Why NHIMA</h2>
        <div className="cards">
          <div className="card"><h3>Universal Coverage</h3><p>NHIMA provides broad healthcare financing to ensure access for all.</p></div>
          <div className="card"><h3>Transparent Contributions</h3><p>Clear records for employers and members with a simple digital experience.</p></div>
          <div className="card"><h3>Secure & Compliant</h3><p>Modern security and compliance best-practices protect member data.</p></div>
        </div>
      </section>
    </div>
  )
}
