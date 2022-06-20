import React, { useState } from 'react'
import './ApptCollapsible.css'

const ApptCollapsible = ({ appt }) => {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <div className='appt'>
      <div className="container">
        <button className={expand ? 'bttn-clicked': 'bttn'} onClick={handleClick}>
        {appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}: <br></br> {appt.title}
          <span className={expand ? 'hamburger cross' : 'hamburger'}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
      <div className='collapsible'>
        <ul key={appt.id} className={expand ? "expanded" : 'collapsed'}>
          <li>Room: {appt.location}</li>
          <li>Notes: {appt.notes}</li>
        </ul>
      </div>
    </div>
  )
}

export default ApptCollapsible