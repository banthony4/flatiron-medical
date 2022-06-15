import { configureStore } from "@reduxjs/toolkit";

import departmentsReducer from './Features/departmentsSlice'
import doctorsReducer from './Features/doctorsSlice'
import patientsReducer from './Features/patientsSlice'
import appointmentsReducer from './Features/appointmentsSlice'

const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    doctors: doctorsReducer,
    patients: patientsReducer,
    appointments: appointmentsReducer,
  },
});

export default store;