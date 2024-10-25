import api from "../store/api";

const facultyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFaculty: build.query({
      query: () => "/faculties",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Faculties"],
    }),
    getFacultyMember: build.query({
      query: (id) => "/faculties" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Faculty"],
    }),
    addFacultyMember: build.mutation({
      query: (professor) => ({
        url: "/faculties",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["faculty"],
    }),
    deleteFacultyMember: build.mutation({
      query: (id) => ({
        url: "/faculties/" + id,
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
