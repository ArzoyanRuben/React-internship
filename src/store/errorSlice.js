import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default errorSlice;