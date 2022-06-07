import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPatients = createAsyncThunk("patients/fetchPatients", () => {
  // return a Promise containing the data we want
  return fetch("/patients")
    .then((response) => response.json())
    .then((data) => data);
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchPatients.pending](state) {
      state.status = 'loading';
    },
    [fetchPatients.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default patientsSlice.reducer