import { configureStore } from "@reduxjs/toolkit";

import departmentsReducer from './Features/departmentsSlice'
import doctorsReducer from './Features/doctorsSlice'
import patientsReducer from './Features/patientsSlice'
import appointmentsReducer from './Features/appointmentsSlice'
import resultsReducer from "./Features/resultsSlice";

const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    doctors: doctorsReducer,
    patients: patientsReducer,
    appointments: appointmentsReducer,
    results: resultsReducer
  },
});

export default store;