import api from "../store/api";

const facultyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFaculty: build.query({
      query: () => "/Faculty",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Faculty"],
    }),
    getFacultyMember: build.query({
      query: (id) => "/Faculty/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Faculty"],
    }),
    addFacultyMember: build.mutation({
      query: (professor) => ({
        url: "/Faculty",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Faculty"],
    }),
    deleteFacultyMember: build.mutation({
      query: (id) => ({
        url: "/departments/" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Faculty"],
    }),
  }),
});

export const {
  useGetFacultyQuery,
  useGetFacultyMemberQuery,
  useAddFacultyMemberMutation,
  useDeleteFacultyMemberMutation,
} = facultyApi;
