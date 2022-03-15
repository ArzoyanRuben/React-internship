import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    add: (state: string, action:PayloadAction<string>): string => {
      return action.payload;
    },
  },
});

export default errorSlice;