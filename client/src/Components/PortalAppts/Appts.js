import React from 'react'
import PortalNav from '../PortalNav/PortalNav'
import './PortalAppts.css'

const Appts = ({ docAppointments }) => {


  return (
    <div>
      <PortalNav />
      <div className='appt-list'>
      { docAppointments.map(appt => {
        return (
          <div className='appt'>
            <p>{appt.startDate}</p>
            <label for="touch"><span className='title'>{appt.title}</span></label>
            <input type="checkbox" id="touch"/> 
            <ul className="slide">
              <li>{appt.patient}</li>
              <li>{appt.location}</li>
              <li>{appt.notes}</li>
            </ul>
          </div>
        )
      }) }
      </div>
    </div>
  )
}

export default Appts