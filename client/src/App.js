import './App.css';

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice'
// import { fetchPatients } from './Features/patientsSlice'
import { fetchDepartments } from './Features/departmentsSlice.js'

import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Login from './Components/Login/Login.js';
import Departments from './Components/Departments/Departments.js';
import DepartmentProfile from './Components/DepartmentProfile/DepartmentProfile.js';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import Portal from './Components/Portal/Portal.js';
import PortalAppts from './Components/PortalAppts/PortalAppts.js'
import Calendar from './Components/PortalCalendar/Calendar.js'

function App() {
  const [user, setUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true);
  const dispatch = useDispatch();

  const docAppointments = useSelector(state => state.appointments.entities)
  
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const departments = useSelector(state => state.departments.entities)
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  // const patients = useSelector(state => state.patients.entities)
  // useEffect(() => {
  //   dispatch(fetchPatients());
  // }, [dispatch]);
  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/departments' element={<Departments departments={departments}/>}/>
        <Route path = '/aboutus' element={<AboutUs  />}/>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route path = '/departments/:id' element={<DepartmentProfile />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile />}/>
        <Route path = '/portal' element={<Portal />}/>
        <Route path = '/appointments' element={<PortalAppts docAppointments={docAppointments} />}/>
        <Route path = '/calendar' element={<Calendar docAppointments={docAppointments} user={user} />}/>
      </Routes>
    </div>
  );
}

export default App;