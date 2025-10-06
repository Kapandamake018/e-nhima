import React from 'react'
import LoginForm from '../ui/LoginForm'

export default function Home(){
  return (
    <div className="home">
      <section className="hero">
        <h1>National Health Insurance — Zambia</h1>
        <p>Reliable healthcare financing for every Zambian household.</p>
        <div className="actions">
          <a className="btn primary" href="/dashboard">Member Dashboard</a>
          <LoginForm />
        </div>
      </section>

      <section className="features">
        <h2>Why NHIMA</h2>
        <div className="cards">
          <div className="card">Universal Coverage</div>
          <div className="card">Transparent Contributions</div>
          <div className="card">Secure & Compliant</div>
        </div>
      </section>
    </div>
  )
}
