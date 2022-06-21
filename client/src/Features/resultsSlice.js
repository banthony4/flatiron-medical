import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk("results/fetchResults", () => {
  return fetch("/results")
    .then((response) => response.json())
    .then((data) => data);
});

const ResultsSlice = createSlice({
  name: 'results',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchResults.pending](state) {
      state.status = 'loading';
    },
    [fetchResults.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default ResultsSlice.reducer