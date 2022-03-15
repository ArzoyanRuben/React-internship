import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: object[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state: object[], action: PayloadAction<object[]>): object[] => {
      return action.payload;
    },
  },
});

export default postsSlice;
