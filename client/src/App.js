import './App.css';

import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice'

import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login.js';
import Departments from './Components/Departments/Departments.js';
import DepartmentProfile from './Components/DepartmentProfile/DepartmentProfile.js';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import Portal from './Components/Portal/Portal';
import Appts from './Components/PortalAppts/Appts.js'
import Calendar from './Components/PortalCalendar/Calendar.js'

function App() {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch();

  const appointments = useSelector(state => state.appointments.entities)
  console.log('appointments: ', appointments);
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route exact path = '/departments' element={<Departments />}/>
        <Route path = '/departments/:id' element={<DepartmentProfile />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile />}/>
        <Route path = '/portal' element={<Portal />}/>
        <Route path = '/appointments' element={<Appts />}/>
        <Route path = '/calendar' element={<Calendar appointments={appointments}/>}/>
      </Routes>
    </div>
  );
}

export default App;