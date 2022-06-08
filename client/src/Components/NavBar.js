import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/'>
        Home
      </Link>
      <Link to='/departments'>
        Our Team
      </Link>
      <Link to='/'>
        About Us
      </Link>
      <Link to='/login'>
        Login
      </Link>
    </div>
  )
}

export default NavBar