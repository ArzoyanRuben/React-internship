import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/data/all_transactions.json`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
