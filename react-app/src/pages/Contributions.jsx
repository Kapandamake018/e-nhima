import React from 'react'

export default function Contributions(){
  return (
    <div className="page">
      <h1>Contributions</h1>
      <p>Contributions list will appear here.</p>

      <section className="card table-card" style={{marginTop:18}}>
        <h2>My Contributions</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employer Number</th>
                <th>Period</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Employer Number">1000</td>
                <td data-label="Period">9 - 2025</td>
                <td data-label="Amount">0.00</td>
              </tr>
              <tr>
                <td data-label="Employer Number">1000</td>
                <td data-label="Period">7 - 2025</td>
                <td data-label="Amount">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
