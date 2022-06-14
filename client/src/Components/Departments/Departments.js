import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Departments.css'

import { MdBloodtype } from "react-icons/md";
import { FaHeartbeat, FaMicroscope, FaBrain } from "react-icons/fa";
import { GiNightSleep, GiNoseSide, GiLoveInjection } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { GrEmergency } from "react-icons/gr";
import { IoIosBody } from "react-icons/io";


const Departments = ({ departments }) => {
  // console.log('departments: ', departments);
  let navigate = useNavigate();

  const handleClick = (dept) => {
    navigate(`/departments/${dept.id}`)
  }

  return (
    <div className='our-team'>
      <h1>Departments:</h1>
      <div className='departments'>
        <h3 className='dept' onClick={() => handleClick(departments[0])}>{<GiNightSleep />} {departments[0].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[1])}>{<FaHeartbeat />} {departments[1].name} </h3>
        <h3 className='dept' onClick={() => handleClick(departments[2])}>{<GiNoseSide />} {departments[2].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[3])}>{<TbMoodKid />} {departments[3].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[4])}>{<GrEmergency />} {departments[4].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[5])}>{<IoIosBody />} {departments[5].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[6])}>{<MdBloodtype />} {departments[6].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[7])}>{<FaMicroscope />} {departments[7].name}  </h3>
        <h3 className='dept' onClick={() => handleClick(departments[8])}>{<GiLoveInjection />} {departments[8].name} </h3>
        <h3 className='dept' onClick={() => handleClick(departments[9])}>{<FaBrain />} {departments[9].name} </h3>
        {/* <div className='column'>
          {departments.map(dept => {
            return (
              <div className='first' key={dept.id} onClick={() => navigate(`/departments/${dept.id}`)}>
                {dept.name}
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default Departments