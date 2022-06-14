import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DepartmentProfile.css'

const DepartmentProfile = () => {
  const [dept, setDept] = useState({})
  console.log('dept: ', dept);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/departments/${id}`)
    .then(r => r.json())
    .then((data) => setDept(data));
  }, [id]);
  
  return (
    <div className='dept-profile'>
      <h1 className='dept-title'>{dept.name}</h1>
      <img src={dept.image} alt='img' className='dept-img'/>
      <div className='doc-list'>
        <h3 >Doctors:</h3>
        {dept.doctors ? dept.doctors.map(doc => <h4 key={doc.id} onClick={() => navigate(`/doctors/${doc.id}`)}>{`Dr. ${doc.name}, ${doc.title}`}</h4>) 
        : null}
      </div>
    </div>
  )
}

export default DepartmentProfile