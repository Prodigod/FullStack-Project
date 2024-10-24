import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `http://localhost:3000/`

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;