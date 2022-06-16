import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='section'>
        <h5>Services</h5>
        <p>Patient Billing</p>
        <p>Interpreting Services</p>
        <p>Find a Doctor</p>
      </div>
      <div className='section'>
        <h5>Information</h5>
        <p>Career Opportunities</p>
        <p>Patients and Family</p>
        <p>Vendors</p>
        <p>Editors</p>
      </div>
      <div className='section'>
        <h5>About Us</h5>
        <p>About Flatiron Med</p>
        <p>Flatiron Health System</p>
        <p>Directions & Locations</p>
        <p>Policies, Notices, & Terms</p>
        <p>Flatiron Leadership</p>
      </div>
      <div className='section'>
        <h5>What's New</h5>
        <p>Latest News</p>
        <p>Flatiron Med Publications</p>
        <p>Events & Classes</p>
      </div>

    </div>
  )
}

export default Footer