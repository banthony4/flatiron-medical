import './App.css';

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice'
import { fetchPatients } from './Features/patientsSlice'
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState(null)
  const [doc, setDoc] = useState(null)
  const [patientAppts, setPatientAppts] = useState([])
  const dispatch = useDispatch();

  const docAppointments = useSelector(state => state.appointments.entities)
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);
  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    } 
  },[user])

  const departments = useSelector(state => state.departments.entities)
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const patients = useSelector(state => state.patients.entities)
  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const doctors = useSelector(state => state.doctors.entities)
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const results = useSelector(state => state.results.entities)
  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);
  
  
  // const onToggleDarkMode = () => {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // };
  
  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      console.log('filtering', search)
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
  

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} isDarkMode={isDarkMode} />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/departments' element={<Departments departments={departments} setDept={setDept} />}/>
        <Route path = '/aboutus' element={<AboutUs  />}/>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route path = '/departments/:id' element={<DepartmentProfile dept={dept} doctors={doctors} setDoc={setDoc} />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile doc={doc} />}/>
        <Route path = '/portal' element={<Portal user={user} />}/>
        <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
        <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} />}/>
        <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
        <Route path='/portal/labresults' element={<PortalLabResults user={user} results={results} /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;