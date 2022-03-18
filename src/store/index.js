import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersApi } from "./../services/usersAPI";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(usersApi.middleware),
});
