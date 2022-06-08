import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { fetchDepartments } from '../../Features/departmentsSlice'

const Departments = () => {
  const departments = useSelector(state => state.departments.entities)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);


  return (
    <div>
      <h1>Departments:</h1>
      {departments.map(dept => {
        return (
          <h2 key={dept.id} onClick={() => navigate(`/departments/${dept.id}`)}>
            {dept.name}
          </h2>
        )
      })}
    </div>
  )
}

export default Departments