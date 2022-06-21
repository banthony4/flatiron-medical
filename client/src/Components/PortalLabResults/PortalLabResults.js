import React from 'react'
import PortalNav from '../PortalNav/PortalNav.js'
import PortalResultCard from '../PortalResultCard/PortalResultCard.js'
import './PortalLabResults.css'

const PortalLabResults = ({ user, results }) => {

  const renderResults = results.filter(r => r.patient_id === user.id).map(r => {
    return <PortalResultCard key={r.id} result={r} />
  })

  return (
    <div>
      <div>
        <PortalNav user={user} />
      </div>
      <div className='result-list'>
        {renderResults}
      </div>
    </div>
  )
}

export default PortalLabResults