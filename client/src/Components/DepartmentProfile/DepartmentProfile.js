import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DepartmentProfile.css'

const DepartmentProfile = ({ dept, setDoc, doctors }) => {
  let navigate = useNavigate();

  const handleClick = (id) => {
    setDoc(doctors.filter(d => d.id === id))
    navigate(`/doctors/${id}`)
  }
  
  return (
    <div className='dept-profile'>
      <h1 className='dept-title'>{dept[0].name}</h1>
      <img src={dept[0].image} alt='img' className='dept-img'/>
      <div className='doc-list'>
        <h3 >Doctors:</h3>
        {dept[0].doctors ? dept[0].doctors.map(doc => <h4 key={doc.id} onClick={() => handleClick(doc.id)}>{`Dr. ${doc.name}, ${doc.title}`}</h4>) 
        : null}
      </div>
    </div>
  )
}

export default DepartmentProfile;