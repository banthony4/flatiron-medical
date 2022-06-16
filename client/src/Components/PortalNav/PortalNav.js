import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFilePerson, BsCalendarPlus } from "react-icons/bs";
import './PortalNav.css'

const PortalNav = () => {
  return (
    <div className='portal-nav'>
      <div className='nav-links'>
        <NavLink to='/appointments'><BsFilePerson /> Patients</NavLink>
        <NavLink to='/calendar'><BsCalendarPlus /> Calendar</NavLink>
      </div>
    </div>
  )
}

export default PortalNav