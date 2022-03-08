import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => action.payload,
  },
});

export default usersSlice;
