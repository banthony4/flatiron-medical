import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <h1 className='mission'>Our Mission:</h1>
      <p>We are committed to improving health by attaining the highest standard of quality in care delivery, education, and research initiatives.</p>
      <img src="https://medicallegalexperts.com/wp-content/uploads/2015/09/homeslide.jpg" alt='docimg'/>
      <h1 className='about'>Our Vision:</h1>
      <p className='about'>To best serve the needs of our communities, the Flatiron Med Health System will deliver its Mission by means of a structure that will be, and remain, autonomous and self-governing.</p>
      <h1 className='about'>Our Values:</h1>
      <ul className='about'>
        <li>Excellence and continuous improvement</li>
        <li>Integrity in every decision we make</li>
        <li>Compassion and respect for the dignity of every person</li>
        <li>A diverse, equitable, inclusive and welcoming System</li>
        <li>Collaboration throughout our System</li>
        <li>Responsiveness to the people of our communities</li>
        <li>Fiscal accountability</li>
      </ul>
      <h1 className='about'>Our Purpose:</h1>
      <ul className='about'>
        <li>Health care of the highest quality in a cost-effective, readily available and equitable manner</li>
        <li>Education in the health sciences, allowing the region to have assured access to trained health professionals to deliver such care</li>
        <li>Biomedical and clinical research in order to contribute to the body of medical knowledge thus creating new ideas, procedures and drugs that advance the quality of such care</li>
      </ul>
    </div>
  )
}

export default AboutUs