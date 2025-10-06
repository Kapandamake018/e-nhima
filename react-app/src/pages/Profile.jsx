import React from 'react'
import { useAuth } from '../state/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const doLogout = ()=>{
    logout()
    navigate('/')
  }

  if(!user) return (
    <div className="page">
      <h1>My Profile</h1>
      <p>Please sign in to view or edit your profile.</p>
    </div>
  )

  return (
    <div className="page">
      <h1>My Profile</h1>
      <p className="muted">Welcome back, {user.name}</p>

      <div style={{marginTop:20,display:'flex',flexDirection:'column',gap:10,maxWidth:360}}>
        <button className="btn" onClick={()=>navigate('/profile')}>Manage Profile</button>
        <button className="btn" onClick={()=>alert('Change password flow coming soon')}>Change Password</button>
        <button className="btn outline" onClick={doLogout}>Logout</button>
      </div>
    </div>
  )
}
