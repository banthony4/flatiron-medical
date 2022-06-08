import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DoctorProfile = () => {
  const [doc, setDoc] = useState({})
  const { id } = useParams();

  useEffect(() => {
    fetch(`/doctors/${id}`)
    .then(r => r.json())
    .then((data) => setDoc(data));
  }, [id]);

  return (
    <div>DoctorProfile:
      <h1>{`Dr. ${doc.name}, ${doc.title}`}</h1>
      <h3>{doc.bio}</h3>
      <h5>Contact: {doc.email}</h5>
    </div>
  )
}

export default DoctorProfile