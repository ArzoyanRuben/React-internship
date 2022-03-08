import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import photosSlice from "./albumsSlice";
import usersSlice from "./albumsSlice";
import postsSlice from "./albumsSlice";
import tableSlice from "./tableSlice";

export const store = configureStore({
  reducer: {
    albums: albumsSlice.reducer,
    photos: photosSlice.reducer,
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    table: tableSlice.reducer
  },
});
