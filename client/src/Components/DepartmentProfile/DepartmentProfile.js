import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DepartmentProfile = () => {
  const [dept, setDept] = useState({})
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/departments/${id}`)
    .then(r => r.json())
    .then((data) => setDept(data));
  }, [id]);
  
  return (
    <div>DepartmentProfile:
      <h1>{dept.name}</h1>
      <ol>
        {dept.doctors ? dept.doctors.map(doc => <li key={doc.id} onClick={() => navigate(`/doctors/${doc.id}`)}>{`Dr. ${doc.name}, ${doc.title}`}</li>) 
        : null}
      </ol>
    </div>
  )
}

export default DepartmentProfile