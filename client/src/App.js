import './App.css';

import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments } from './Features/departmentsSlice';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Calendar from './Components/Calendar';
import Departments from './Components/Departments';

function App() {
  const [user, setUser] = useState(null)
  const departments = useSelector(state => state.departments.entities)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  console.log('docs:', departments)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/login' element={<Login setUser={setUser} />}/>
        <Route exact path = '/calendar' element={<Calendar/>}/>
        <Route exact path = '/departments' element={<Departments />}/>
      </Routes>
    </div>
  );
}

export default App;
