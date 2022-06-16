import React, { useState } from 'react'
import './Collapsible.css'

const Collapsible = ({ patient, docAppointments}) => {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <div className='patient'>
      <div className="container">
        <button className='bttn' onClick={handleClick}>
          {patient.name}
          <span className={expand ? 'hamburger cross' : 'hamburger'}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
      <div className='collapsible'>
        {docAppointments.map(appt => {
          if(appt.patient_id === patient.id) {
            return (
              <ul key={appt.id} className={expand ? "expanded" : 'collapsed'}>
                <li>{appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}:</li>
                <li>Procedure: {appt.title}</li>
                <li>Room: {appt.location}</li>
                <li>Notes: {appt.notes}</li>
              </ul>
            )
          } 
        })}
      </div>
    </div>
  )
}

export default Collapsible