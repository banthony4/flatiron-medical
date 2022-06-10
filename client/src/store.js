import { configureStore } from "@reduxjs/toolkit";

import departmentsReducer from './Features/departmentsSlice'
import doctorsReducer from './Features/doctorsSlice'
import patientsReducer from './Features/patientsSlice'
import appointmentsReducer from './Features/appointmentsSlice'
import roomsReducer from './Features/roomsSlice'

const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    doctors: doctorsReducer,
    patients: patientsReducer,
    appointments: appointmentsReducer,
    rooms: roomsReducer
  },
});

export default store;