import { createSlice } from "@reduxjs/toolkit";
import { initialUsersState } from "./initialState";

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState(),
  reducers: {
    addVal(state, action) {
      state.usersData = action.payload;
    },
  },
});

export const { addVal, decrement, incrementByAmount } = usersSlice.actions;
export default usersSlice.reducer;
