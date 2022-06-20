import React from 'react'
import PortalNav from '../PortalNav/PortalNav.js'
import ApptCollapsible from '../ApptCollapsible/ApptCollapsible.js'

const PortalAppts = ({ patientAppts, user }) => {
  return (
    <div className='portal-appts'>
      <PortalNav user={user} />
      <div className='appt-list'>
      { patientAppts.map(appt => {
        return (
          <ApptCollapsible key={appt.id} appt={appt} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalAppts