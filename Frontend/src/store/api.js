import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `http://localhost:5000/`;

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;
