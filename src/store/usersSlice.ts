import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: object[] = []

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state: object[], action:PayloadAction<object[]>): object[] => {
      return action.payload;
    },
  },
});

export const { add } = usersSlice.actions;
export default usersSlice;
