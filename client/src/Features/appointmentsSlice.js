import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", () => {
  return fetch("/appointments")
    .then((response) => response.json())
    .then((data) => data);
});
export const updateBEAppointment = createAsyncThunk(
  "newAppointments/updateAppointments",
  async (appt) => {
    return fetch(`/appointments/${appt.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(appt),
    })
    .then((res) => res.json())
  }
);
export const deleteBEAppointment = createAsyncThunk(
  "appointment/deleteAppointment",
  async (apptId) => {
    fetch(`/appointments/${apptId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
);
export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (newAppt) => {
    return fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppt),
    }).then((res) => res.json());
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {
    deleteFEAppointment(state, action){
      const index = state.entities.findIndex(a => a.id === action.payload)
      state.entities.splice(index, 1)
    },
    updateFEAppointment(state, action) {
      state.entities = state.entities.map(appt => appt.id === action.payload.id ? {...appt, ...action.payload} : appt)
    }
  },
  extraReducers: {
    [fetchAppointments.pending](state) {
      state.status = 'loading';
    },
    [fetchAppointments.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
    [updateBEAppointment.fulfilled](state, action) {
      state.entities.map(appt => appt.id === action.payload.id ? {...appt, ...action.payload} : appt)
    },
    [deleteBEAppointment.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (appt) => appt.id !== action.payload
      );
    },
    [createAppointment.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
  }
})

export const { deleteFEAppointment, updateFEAppointment } = appointmentsSlice.actions

export default appointmentsSlice.reducer