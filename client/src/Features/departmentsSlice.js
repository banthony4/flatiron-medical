import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDepartments = createAsyncThunk("departments/fetchDepartments", () => {
  return fetch("/departments")
    .then((response) => response.json())
    .then((data) => data);
});
export const fetchDepartment = createAsyncThunk("departments/fetchDepartment", (id) => {
  return fetch(`/departments/${id}`)
    .then((response) => response.json())
    .then((data) => data);
});

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchDepartments.pending](state) {
      state.status = 'loading';
    },
    [fetchDepartments.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
    [fetchDepartment.pending](state) {
      state.status = 'loading';
    },
    [fetchDepartment.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default departmentsSlice.reducer