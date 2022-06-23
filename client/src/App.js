import './App.css';

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice.js'
import { fetchPatients } from './Features/patientsSlice.js'
import { fetchDepartments } from './Features/departmentsSlice.js'
import { fetchDoctors } from './Features/doctorsSlice.js'
import { fetchResults } from './Features/resultsSlice.js'

import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Login from './Components/Login/Login.js';
import Departments from './Components/Departments/Departments.js';
import DepartmentProfile from './Components/DepartmentProfile/DepartmentProfile.js';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import Portal from './Components/Portal/Portal.js';
import PortalPatients from './Components/PortalPatients/PortalPatients.js'
import PortalAppts from './Components/PortalAppts/PortalAppts.js';
import PortalLabResults from './Components/PortalLabResults/PortalLabResults.js';
import PortalCalendar from './Components/PortalCalendar/PortalCalendar.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState(null)
  const [doc, setDoc] = useState(null)
  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAppointments())
    .then(dispatch(fetchDepartments()))
    .then(dispatch(fetchPatients()))
    .then(dispatch(fetchDoctors()))
    .then(dispatch(fetchResults()))
  }, [dispatch]);

  
  const departments = useSelector(state => state.departments.entities)
  const patients = useSelector(state => state.patients.entities)
  const doctors = useSelector(state => state.doctors.entities)
  const results = useSelector(state => state.results.entities)
  const docAppointments = useSelector(state => state.appointments.entities)
  
  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    } 
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
  

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/departments' element={<Departments departments={departments} setDept={setDept} />}/>
        <Route path = '/aboutus' element={<AboutUs  />}/>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route path = '/departments/:id' element={<DepartmentProfile dept={dept} doctors={doctors} setDoc={setDoc} />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile doc={doc} />}/>
        <Route path = '/portal' element={<Portal user={user} />}/>
        <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
        <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
        <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
        <Route path='/portal/labresults' element={<PortalLabResults user={user} results={results} /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;