import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";
import photosSlice from "./photosSlice";
import usersSlice from "./usersSlice";
import postsSlice from "./postsSlice";
import tableSlice from "./tableSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    albums: albumsSlice.reducer,
    photos: photosSlice.reducer,
    posts: postsSlice.reducer,
    table: tableSlice.reducer,
  },
});
