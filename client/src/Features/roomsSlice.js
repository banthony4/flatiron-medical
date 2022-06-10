import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", () => {
  return fetch("/rooms")
    .then((response) => response.json())
    .then((data) => data);
});

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchRooms.pending](state) {
      state.status = 'loading';
    },
    [fetchRooms.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default roomsSlice.reducer