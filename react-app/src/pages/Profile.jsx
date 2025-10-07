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
  const fullName = user.fullName || user.name || ''
  const username = user.username || user.id || ''
  const memberId = user.memberId || user.id || ''
  const nrcNumber = user.nrc || user.nrcNumber || user.nrc_no || ''
  const phone = user.phone || user.phoneNumber || user.msisdn || ''
  const email = user.email || ''
  const marital = user.maritalStatus || user.marital || ''
  const sex = user.sex || user.gender || ''
  const dobRaw = user.dob || user.dateOfBirth || user.dob_date || ''
  const createdRaw = user.createdAt || user.dateCreated || user.created || ''

  function fmtDate(s){
    if(!s) return ''
    try{
      const d = new Date(s)
      if(isNaN(d)) return s
      return d.toLocaleDateString()
    }catch(e){ return s }
  }

  const dob = fmtDate(dobRaw)
  const created = fmtDate(createdRaw)

  const viewDoc = (url)=>{
    if(!url) return alert('No document available')
    // open in new tab
    window.open(url, '_blank')
  }

  return (
    <div className="page">
      <div className="card" style={{padding:18}}>
        <h2 style={{marginTop:0,marginBottom:12}}>{(fullName || 'My Profile').toUpperCase()}</h2>
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',minWidth:320}}>
            <tbody>
              <tr>
                <td style={{padding:12,width:'35%',color:'var(--color-muted)'}}>Full Name:</td>
                <td style={{padding:12,wordWrap:'break-word'}}>{fullName}</td>
              </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Username:</td>
              <td style={{padding:12}}>{username}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Member ID:</td>
              <td style={{padding:12}}>{memberId}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>NRC Number:</td>
              <td style={{padding:12}}>{nrcNumber}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Phone Number:</td>
              <td style={{padding:12}}>{phone}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Email:</td>
              <td style={{padding:12}}>{email}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Marital Status:</td>
              <td style={{padding:12}}>{marital}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Sex:</td>
              <td style={{padding:12}}>{sex}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Date of Birth:</td>
              <td style={{padding:12}}>{dob}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>Date Created:</td>
              <td style={{padding:12}}>{created}</td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>NRC Front:</td>
              <td style={{padding:12}}>
                <button className="btn" onClick={()=>viewDoc(user.nrcFrontUrl || user.nrc_front || user.nrcFront)}>View Document</button>
              </td>
            </tr>
            <tr>
              <td style={{padding:12,color:'var(--color-muted)'}}>NRC Back:</td>
              <td style={{padding:12}}>
                <button className="btn" onClick={()=>viewDoc(user.nrcBackUrl || user.nrc_back || user.nrcBack)}>View Document</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>

        <div style={{marginTop:18,display:'flex',gap:10,flexWrap:'wrap'}}>
          <button className="btn" onClick={()=>alert('Change password flow coming soon')}>Change Password</button>
          <button className="btn outline" onClick={doLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
