import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default albumsSlice;