import React from 'react'
import Slider from './carousel/Slider.js'
import { SiHtmlacademy } from 'react-icons/si'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { FaHospitalAlt } from 'react-icons/fa'
import './Home.css'

const Home = () => {

  return (
    <div>
      <Slider />
      <div className='information'>
        <div className='slide'>
          <h1><FaHospitalAlt /></h1>
          <p>Flatiron Med is a professional medical facility providing unscheduled medical treatments. We are equipped to treat all urgent and non-urgent illnesses and injuries.</p>
        </div>
        <div className='slide'>
          <h1><SiHtmlacademy /></h1>
          <p>Flatiron Med is the only academic medical center in the region. It is our commitment to provide the highest level of patient care, education and biomedical research to our community and beyond. </p>
        </div>
        <div className='slide'>
          <h1><HiOutlineUserGroup /></h1>
          <p>With over 9,000 employees, Flatiron Med is committed to advancing our workforce and providing exciting and fulfilling job opportunities. </p>
        </div>
      </div>
    </div>
  )
}

export default Home