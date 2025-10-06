import React from 'react'
import { useAuth } from '../state/auth'

export default function Dashboard(){
  const {user,logout} = useAuth()
  return (
    <div className="dashboard">
      <div className="top">
        <h1>Hello, {user?.name ?? 'Member'}</h1>
        {user? <button onClick={logout} className="btn outline">Logout</button> : null}
      </div>

      <div className="summary-cards">
        <div className="card summary">
          <h3>Summary</h3>
          <dl>
            <dt>Member ID</dt><dd>{user?.memberId ?? '10128438110111'}</dd>
            <dt>National ID</dt><dd>370645/31/1</dd>
          </dl>
        </div>
        <div className="card compliance">
          <h3>Compliance</h3>
          <p>Status: <strong>ACTIVE</strong></p>
        </div>
      </div>

      <section className="card table-card">
        <h2>My Contributions</h2>
        <table>
          <thead><tr><th>Employer Number</th><th>Period</th><th>Amount</th></tr></thead>
          <tbody>
            <tr><td>1000</td><td>9 - 2025</td><td>0.00</td></tr>
            <tr><td>1000</td><td>7 - 2025</td><td>0.00</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
