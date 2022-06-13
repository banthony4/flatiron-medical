import React from 'react'
import PortalNav from '../PortalNav/PortalNav'

const Appts = ({ docAppointments }) => {
  return (
    <div>
    <PortalNav />
    { docAppointments.map(appt => <h1>{appt.title}</h1>) }
    </div>
  )
}

export default Appts