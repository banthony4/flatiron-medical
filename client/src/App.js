import './App.css';

import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login.js';
import Calendar from './Components/Calendar/Calendar.js';
import Departments from './Components/Departments/Departments.js';
import DepartmentProfile from './Components/DepartmentProfile/DepartmentProfile.js';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import Portal from './Components/Portal/Portal';

function App() {
  const [user, setUser] = useState(null)
  console.log('user: ', user);
  
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route path = '/calendar' element={<Calendar/>}/>
        <Route exact path = '/departments' element={<Departments />}/>
        <Route path = '/departments/:id' element={<DepartmentProfile />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile />}/>
        <Route path = '/portal' element={<Portal />}/>
      </Routes>
    </div>
  );
}

export default App;