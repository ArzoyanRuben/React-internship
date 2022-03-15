import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: object [] = [];

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    add: (state: object [], action:PayloadAction<object[]>): object [] => {
      return action.payload;
    },
  },
});

export default photosSlice;