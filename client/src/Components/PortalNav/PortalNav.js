import React from 'react'
import { Link } from 'react-router-dom';

const PortalNav = () => {
  return (
    <div className='side-nav'>
      <Link to='/appointments'>Appointments</Link>
      <Link to='/calendar'>Calendar</Link>
    </div>
  )
}

export default PortalNav