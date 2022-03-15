import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: object[] = [];

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    add: (state: object[], action:PayloadAction<object[]>): object [] => {
      return action.payload;
    },
  },
});

export default albumsSlice;