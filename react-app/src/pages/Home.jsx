import React from 'react'
import LoginForm from '../ui/LoginForm'

export default function Home(){
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner container">
          <h1>National Health Insurance — Zambia</h1>
          <p className="lede">Reliable healthcare financing for every Zambian household.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="/dashboard">Member Dashboard</a>
            <LoginForm />
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
