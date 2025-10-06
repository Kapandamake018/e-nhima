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
            <li className="home-link">
              <Link to="/home" onClick={onClose}>
                <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/></svg>
                <span>Home</span>
              </Link>
            </li>
            <li className="divider" aria-hidden="true" />
            <li>
              <Link to="/dashboard" onClick={onClose}>
                <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/contributions" onClick={onClose}>
                <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.48 2 2 5.58 2 10s4.48 8 10 8 10-3.58 10-8-4.48-8-10-8zm1 13h-2v-2h2v2zm0-4h-2V6h2v5z"/></svg>
                <span>Contributions</span>
              </Link>
            </li>
            <li>
              <Link to="/beneficiaries" onClick={onClose}>
                <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 2c-.29 0-.62.02-.99.05 1.16.84 1.99 1.97 1.99 3.45V20h4v-1.5C21 16.17 18.33 15 16 15z"/></svg>
                <span>Beneficiaries</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={onClose}>
                <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.2c-3 0-9 1.5-9 4.5V21h18v-2.3c0-3-6-4.5-9-4.5z"/></svg>
                <span>Manage Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
