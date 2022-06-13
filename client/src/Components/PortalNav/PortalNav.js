import React from 'react'
import { Link } from 'react-router-dom';
import './PortalNav.css'

const PortalNav = () => {
  return (
    <div className='portal-nav'>
      <Link to='/appointments'>Appointments</Link>
      <br></br>
      <Link to='/calendar'>Calendar</Link>
    </div>
  )
}

export default PortalNav