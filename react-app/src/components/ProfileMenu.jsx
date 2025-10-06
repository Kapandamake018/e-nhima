import React, {useState, useRef, useEffect} from 'react'
import { useAuth } from '../state/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function ProfileMenu(){
  const [open,setOpen] = useState(false)
  const {user,logout} = useAuth()
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    function onClick(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return ()=>document.removeEventListener('mousedown', onClick)
  },[])

  const doLogout = ()=>{
    logout();
    navigate('/')
  }

  if(!user) return null

  return (
    <div className="profile-menu" ref={ref}>
      <button className="icon-btn" onClick={()=>setOpen(v=>!v)} aria-haspopup="menu" aria-expanded={open} aria-label="Profile menu">{user.name.split(' ')[0]}</button>
      {open && (
        <div className="profile-dropdown" role="menu" aria-label="Profile options">
          <Link to="/profile" role="menuitem" className="menu-item">Manage Profile</Link>
          <Link to="/profile" role="menuitem" className="menu-item">Change Password</Link>
          <button onClick={doLogout} role="menuitem" className="menu-item">Logout</button>
        </div>
      )}
    </div>
  )
}
