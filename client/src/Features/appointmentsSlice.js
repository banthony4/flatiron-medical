import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", () => {
  // return a Promise containing the data we want
  return fetch("/appointments")
    .then((response) => response.json())
    .then((data) => data);
});
export const updateAppointments = createAsyncThunk(
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
    .then((data) => data);
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {
    appointmentRemoved(state, action){
      const index = state.entities.findIndex(a => a.id === action.payload)
      state.entities.splice(index, 1)
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
    [updateAppointments.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (appt) => appt.id !== action.payload['id']
      );
      state.entities = [...state.entities, action.payload];
    }
  }
})

export const { appointmentRemoved } = appointmentsSlice.actions
export default appointmentsSlice.reducer