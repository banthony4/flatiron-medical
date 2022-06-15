import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"

const NavBar = ({ user, setUser, isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    }).then(() => {
        setUser(null)
    });
  }

  return (
    <header className='nav-bar'>
      <nav className="branding">
        <Link to='/' style={{borderBottom: "none"}}> 
          <h1>
            <span className="logo">{"//"}</span>
            Flatiron Medical
          </h1>
        </Link>
        <div className="navigation">
          <NavLink to='/departments'>Our Team</NavLink>
          <NavLink to='/aboutus'>About Us</NavLink>
          <NavLink to='/portal'>{user ? 'Portal' : null}</NavLink>
          {user ? 
            <NavLink to='/' onClick={handleLogout}>Log Out</NavLink>
            :
            <NavLink to='/login'>Login</NavLink>
          }
          {/* <button onClick={onToggleDarkMode}>{buttonTextContent}</button> */}
        </div>
      </nav>
    </header>
  )
}

export default NavBar