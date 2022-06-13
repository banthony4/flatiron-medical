import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = ({ user, setUser }) => {

  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    }).then(() => {
        setUser(null)
    });
  }

  return (
    <div className='NavBar'>
      <Link to='/'>Home</Link>
      <Link to='/departments'>Our Team</Link>
      <Link to='/aboutus'>About Us</Link>
      <Link to='/portal'>{user ? 'Portal' : null}</Link>
      {user ? 
        <Link to='/' onClick={handleLogout}>Log Out</Link>
        :
        <Link to='/login'>Login</Link>
    }
    </div>
  )
}

export default NavBar