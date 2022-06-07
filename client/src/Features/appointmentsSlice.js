import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", () => {
  // return a Promise containing the data we want
  return fetch("/appointments")
    .then((response) => response.json())
    .then((data) => data);
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchAppointments.pending](state) {
      state.status = 'loading';
    },
    [fetchAppointments.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default appointmentsSlice.reducer