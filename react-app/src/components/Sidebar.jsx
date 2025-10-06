import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({open, onClose}){
  return (
    <aside className={`sidebar-panel ${open? 'open':''}`} aria-hidden={!open}>
      <div className="sidebar-inner">
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">×</button>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contributions">Contributions</Link></li>
            <li><Link to="/beneficiaries">Beneficiaries</Link></li>
            <li><Link to="/profile">Manage Profile</Link></li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-backdrop" onClick={onClose} />
    </aside>
  )
}
