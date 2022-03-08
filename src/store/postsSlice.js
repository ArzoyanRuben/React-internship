import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = null;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default postsSlice;