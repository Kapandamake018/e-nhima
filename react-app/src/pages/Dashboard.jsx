import React from 'react'
import { useAuth } from '../state/auth'

export default function Dashboard(){
  const {user,logout} = useAuth()
  return (
    <div className="dashboard page">
      <div className="dashboard-header" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:10}}>
        <div className="header-left">
          <h1>Hello, {user?.name ?? 'User'}</h1>
          <p className="muted" style={{marginTop:4}}>Role: {user?.role ?? 'member'}</p>
        </div>
        <div className="header-right">
          {/* Logout moved to Profile menu; keep header-right reserved for actions */}
        </div>
      </div>

      <div className="summary-grid" style={{display:'flex',gap:18,marginTop:18,flexWrap:'wrap'}}>
        <div className="card summary" style={{flex:'1 1 280px'}}>
          <h3>Summary</h3>
          <dl style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            <dt>ID</dt><dd>{user?.id ?? user?.memberId ?? 'n/a'}</dd>
            <dt>Role</dt><dd>{user?.role ?? 'member'}</dd>
            <dt>No. of Beneficiaries</dt><dd>0</dd>
            <dt>Last contribution</dt><dd>2024-08-08</dd>
          </dl>
        </div>
        <div className="card compliance" style={{flex:'1 1 280px'}}>
          <h3>Compliance</h3>
          <p>Status: <strong>ACTIVE</strong></p>
          <p>Contributions: <strong>14</strong></p>
        </div>
      </div>

      {/* Contributions table moved to /contributions page */}
    </div>
  )
}
