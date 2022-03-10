import { createSlice } from "@reduxjs/toolkit";

const initialState = null

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
  },
});

export const { add } = usersSlice.actions;
export default usersSlice;
