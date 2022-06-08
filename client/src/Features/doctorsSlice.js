import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", () => {
  return fetch("/doctors")
    .then((response) => response.json())
    .then((data) => data);
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchDoctors.pending](state) {
      state.status = 'loading';
    },
    [fetchDoctors.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default doctorsSlice.reducer