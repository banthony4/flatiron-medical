import React from 'react'
import PortalNav from '../PortalNav/PortalNav'
import PatientCollapsible from '../PatientCollapsible/PatientCollapsible.js'
import './PortalPatients.css'

function PortalAppts({ search, setSearch, patients, docAppointments, user }) { 

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <PortalNav user={user} />
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
          <PatientCollapsible key={p.id} patient={p} docAppointments={docAppointments} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalAppts