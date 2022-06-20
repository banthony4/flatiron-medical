import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFilePerson, BsCalendarPlus } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import './PortalNav.css'

const PortalNav = ({ user }) => {
  return (
    <div className='portal-nav'>
      {user.doc ? 
        <div className='nav-links'>
          <NavLink to='/portal/patients'><BsFilePerson /> Patients</NavLink>
          <NavLink to='/portal/calendar'><BsCalendarPlus /> Calendar</NavLink>
        </div>
      :
      <div className='nav-links'>
        <NavLink to='/portal/labresults'><BiTestTube /> Lab Results</NavLink>
        <NavLink to='/portal/appointments'><AiOutlineSchedule /> Appointments</NavLink>
        <NavLink to='/portal/calendar'><BsCalendarPlus /> Calendar</NavLink>
      </div>
      }
    </div>
  )
}

export default PortalNav