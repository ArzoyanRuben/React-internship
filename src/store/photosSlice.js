import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default photosSlice;