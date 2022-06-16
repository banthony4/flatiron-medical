import React from 'react';
import './DoctorProfile.css'


const DoctorProfile = ({ doc }) => {

  return (
    <div>
      <h1>{`Dr. ${doc[0].name}, ${doc[0].title}`}</h1>
      <h3>{doc[0].bio}</h3>
      <h5>Contact: {doc[0].email}</h5>
    </div>
  )
}

export default DoctorProfile