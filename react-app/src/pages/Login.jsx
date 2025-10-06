import React, {useState} from 'react'
import { useAuth } from '../state/auth'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login(){
  const [memberId,setMemberId] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('member')
  const [employerAccount,setEmployerAccount] = useState('')
  const [error,setError] = useState('')
  const {login,user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/home'

  const submit = (e)=>{
    e.preventDefault()
    setError('')
    if(role === 'employer' && !employerAccount){
      setError('Employer account number is required for employer login.')
      return
    }

    // build login payload
    const payload = {
      id: memberId || (role === 'member' ? '10128438110111' : role === 'employer' ? 'EMP-1000' : 'AGT-500'),
      role,
      name: role === 'member' ? 'Member User' : role === 'employer' ? 'Employer User' : 'Agent User'
    }
    if(role === 'employer') payload.employerAccount = employerAccount

    login(payload)
    navigate(from, {replace:true})
  }

  // if already logged in redirect
  if(user) { navigate('/home'); return null }

  function quick(selected){
    // populate fields with sample values per role but do not auto-submit
    setRole(selected)
    setError('')
    if(selected === 'member'){
      setMemberId('10128438110111')
      setPassword('')
      setEmployerAccount('')
      return
    }
    if(selected === 'employer'){
      setMemberId('EMP-1000')
      setPassword('')
      setEmployerAccount('ACCT-200')
      return
    }
    if(selected === 'agent'){
      setMemberId('AGT-500')
      setPassword('')
      setEmployerAccount('')
      return
    }
  }

  return (
    <div className="page login-page">
      <div className="login-panel card">
        <h1>Sign in to eNHIMA</h1>
        <p className="muted">Choose Sign In Option</p>

        <div style={{display:'flex',gap:12,margin:'12px 0',flexWrap:'wrap'}}>
          <button type="button" className={`role-btn ${role === 'employer' ? 'selected' : ''}`} onClick={()=>quick('employer')}>Employer</button>
          <button type="button" className={`role-btn ${role === 'member' ? 'selected' : ''}`} onClick={()=>quick('member')}>Member</button>
          <button type="button" className={`role-btn ${role === 'agent' ? 'selected' : ''}`} onClick={()=>quick('agent')}>Agent</button>
        </div>

        <hr style={{borderColor:'rgba(255,255,255,0.04)'}} />

        <form onSubmit={submit} className="form">
          <label htmlFor="member">ID</label>
          <input id="member" value={memberId} onChange={e=>setMemberId(e.target.value)} placeholder="Member / Employer / Agent ID" />

          {role === 'employer' && (
            <>
              <label htmlFor="employerAccount">Employer account number</label>
              <input id="employerAccount" value={employerAccount} onChange={e=>setEmployerAccount(e.target.value)} placeholder="Employer account number" />
            </>
          )}

          <label htmlFor="pwd">Password</label>
          <input id="pwd" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          {error && <div style={{color:'#ffbaba',marginTop:8}}>{error}</div>}
          <div className="form-actions">
            <button className="btn primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
