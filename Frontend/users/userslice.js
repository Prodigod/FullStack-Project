import api from "../src/store/api";
const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: ({ email, password }) => ({
        url: "users/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: build.mutation({
      query: ({ email, password }) => ({
        url: "users/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("authToken", data.token);
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userAPI;
