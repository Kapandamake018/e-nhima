import React, {useState, useRef, useEffect} from 'react'
import { useAuth } from '../state/auth'

// Utility: get all focusable selectors inside an element
const FOCUSABLE = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function LoginForm(){
  const [open,setOpen] = useState(false)
  const [memberId,setMemberId] = useState('')
  const {login} = useAuth()
  const triggerRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(()=>{
    if(!open) return
    const dialog = dialogRef.current
    if(!dialog) return

    // focus first focusable element
    const focusables = dialog.querySelectorAll(FOCUSABLE)
    if(focusables.length) focusables[0].focus()

    // trap focus
    function handleKey(e){
      if(e.key === 'Escape'){
        e.preventDefault(); setOpen(false)
      }
      if(e.key === 'Tab'){
        const nodes = Array.from(focusables)
        if(nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length-1]
        if(e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus()
        } else if(!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    // prevent background from being focused by setting inert on main (simple approach)
    const main = document.getElementById('main')
    if(main) main.setAttribute('aria-hidden','true')

    return ()=>{
      document.removeEventListener('keydown', handleKey)
      if(main) main.removeAttribute('aria-hidden')
      // restore focus to trigger
      if(triggerRef.current) triggerRef.current.focus()
    }
  }, [open])

  const submit = (e)=>{
    e.preventDefault()
    login(memberId || '10128438110111')
    setOpen(false)
  }

  return (
    <div className="login-form">
      <button ref={triggerRef} className="btn outline" onClick={()=>setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>Login</button>

      {open && (
        <div className="modal" role="presentation" aria-hidden={!open}>
          <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="loginTitle" ref={dialogRef}>
            <h2 id="loginTitle">Member Login</h2>
            <form onSubmit={submit}>
              <label htmlFor="member">Member ID</label>
              <input id="member" value={memberId} onChange={e=>setMemberId(e.target.value)} />
              <label htmlFor="pwd">Password</label>
              <input id="pwd" type="password" />
              <div className="actions">
                <button className="btn primary" type="submit">Login</button>
                <button className="btn outline" type="button" onClick={()=>setOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
