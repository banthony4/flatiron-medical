import logo from './logo.svg';
import './App.css';

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments } from './Features/departmentsSlice';

function App() {
  const departments = useSelector(state => state.departments.entities)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  console.log('docs:', departments)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
