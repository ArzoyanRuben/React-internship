import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../config/api";

const initialState = null;

const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});

export default photosSlice;