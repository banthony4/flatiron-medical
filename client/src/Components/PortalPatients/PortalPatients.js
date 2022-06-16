import React from 'react'
import PortalNav from '../PortalNav/PortalNav'
import Collapsible from '../Collapsible/Collapsible.js'
import './PortalPatients.css'

function PortalAppts({ search, setSearch, patients, docAppointments }) { 

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <PortalNav />
      <div className='search'>
        <label>
          Search Patient:
          <input type='text' placeholder='patient name...' className='patientSearch' onChange={handleChange} value={search} />
        </label>
      </div>
      <br></br>
      <div className='appt-list' >
      { patients.map(p => {
        return (
          <Collapsible key={p.id} patient={p} docAppointments={docAppointments} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalAppts