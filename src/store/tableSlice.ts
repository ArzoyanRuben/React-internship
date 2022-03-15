import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: object[] = [];

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    add: (state: object[], action:PayloadAction<object[]>): object []  => action.payload,
  },
});

export default tableSlice;