import React from 'react'
import { Link } from 'react-router-dom';
import './PortalNav.css'

const PortalNav = () => {
  return (
    <div className='portal-nav'>
      <div className='nav-links'>
        <Link to='/appointments'>Appointments</Link>
      </div>
      <div className='nav-links'>
        <Link to='/calendar'>Calendar</Link>
      </div>
    </div>
  )
}

export default PortalNav