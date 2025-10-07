import React, {useState} from 'react'

export default function Beneficiaries(){
  const [tab, setTab] = useState('active')
  const [query, setQuery] = useState('')
  const [pageSize, setPageSize] = useState(10)

  // No real data yet — show empty table state similar to screenshot
  const columns = ['National ID','Surname','First Name','Gender','Date of Birth','Relationship','Actions']

  return (
    <div className="page">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12,flexWrap:'wrap',gap:10}}>
        <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
          <button className="btn" style={{display:'flex',alignItems:'center',gap:8}}>☰ Add / Remove Beneficiary</button>
        </div>
        <div style={{color:'var(--color-muted)',fontSize:'0.9rem'}}>{new Date().toLocaleDateString(undefined,{weekday:'long', month:'long', day:'numeric', year:'numeric'})}</div>
      </div>

      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8,flexWrap:'wrap',gap:10}}>
          <h2 style={{margin:0,display:'flex',alignItems:'center',gap:8}}>My Beneficiaries</h2>
          <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
            <label style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{color:'var(--color-muted)',fontSize:'0.9rem'}}>Show</span>
              <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))} style={{padding:6,borderRadius:6}}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </label>
          </div>
        </div>

        <div style={{borderTop:'1px solid rgba(0,0,0,0.04)',paddingTop:12}}>
          <div style={{display:'flex',gap:12,alignItems:'flex-end',marginBottom:12,flexWrap:'wrap'}}>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <button className={`btn ${tab==='active' ? 'primary' : ''}`} onClick={()=>setTab('active')}>Active Beneficiaries</button>
              <button className={`btn ${tab==='pending' ? 'primary' : ''}`} onClick={()=>setTab('pending')}>Pending Beneficiaries</button>
            </div>

            <div style={{marginLeft:'auto',display:'flex',gap:8,alignItems:'center'}}>
              <div style={{position:'relative',width:'100%',maxWidth:280}}>
                <input placeholder="Search" value={query} onChange={e=>setQuery(e.target.value)} style={{padding:'8px 10px',borderRadius:6,border:'1px solid rgba(0,0,0,0.08)',width:'100%',boxSizing:'border-box'}} />
              </div>
            </div>
          </div>

          <div className="table-card">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    {columns.map(col => <th key={col}>{col}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={columns.length} style={{textAlign:'center',padding:40,color:'#ff66a6',fontSize:'1.2rem'}}>No data available in table</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
