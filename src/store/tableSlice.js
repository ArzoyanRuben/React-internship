import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    add: (state, action) => action.payload,
  },
});

export default tableSlice;