import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({open, onClose}){
  const rootRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(()=>{
    const root = rootRef.current
    if(!root) return

    const focusableSelector = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

    function handleKeyDown(e){
      if(e.key === 'Escape'){
        e.preventDefault();
        onClose()
        return
      }

      if(e.key === 'Tab'){
        const focusables = Array.from(root.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null)
        if(focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length -1]

        if(e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus();
        } else if(!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus();
        }
      }
    }

    if(open){
      previouslyFocused.current = document.activeElement
      // lock scroll
      document.body.style.overflow = 'hidden'
      // focus first focusable inside sidebar
      const first = root.querySelector(focusableSelector)
      setTimeout(()=> first && first.focus(), 50)
      document.addEventListener('keydown', handleKeyDown)
    }

    return ()=>{
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      if(previouslyFocused.current && previouslyFocused.current.focus) previouslyFocused.current.focus()
    }
  },[open, onClose])

  return (
    <aside ref={rootRef} className={`sidebar-panel ${open? 'open':''}`} aria-hidden={!open}>
      <div className="sidebar-backdrop" onClick={onClose} />
      <div className="sidebar-inner" role="dialog" aria-modal={open} aria-label="Main navigation">
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">×</button>
        <nav>
          <ul>
            <li className="home-link"><Link to="/home" onClick={onClose}><span className="home-icon">🏠</span> Home</Link></li>
            <li className="divider" aria-hidden="true" />
            <li><Link to="/dashboard" onClick={onClose}>Dashboard</Link></li>
            <li><Link to="/contributions" onClick={onClose}>Contributions</Link></li>
            <li><Link to="/beneficiaries" onClick={onClose}>Beneficiaries</Link></li>
            <li><Link to="/profile" onClick={onClose}>Manage Profile</Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
