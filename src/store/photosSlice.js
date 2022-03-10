import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default photosSlice;