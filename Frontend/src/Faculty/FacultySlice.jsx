import api from "../store/api";

const facultyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFaculty: build.query({
      query: () => "/faculties",
      transformErrorResponse: (response) => response.data,
      providesTags: ["Faculty"],
    }),
    getFacultyMember: build.query({
      query: (id) => "/faculties/" + id,
      transformErrorResponse: (response) => response.data,
      providesTags: ["Faculty"],
    }),
    addFacultyMember: build.mutation({
      query: (id) => ({
        url: "/faculties/",
        method: "POST",
        body: ({ name, bio, email, contactInfo }),
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ["Faculty"],
    }),
    updateFacultyMember: build.mutation({
        query: ({id, token}) => ({
          url: `faculties/${id}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body:({ name, bio, contactInfo, departmentId }),
        }),
        invalidatesTags: ["Faculty"],
      }),
    
    deleteFacultyMember: build.mutation({
      query: ({id, token}) => ({
        url: "/faculties/" + id,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ["Faculty"],
    }),
  }),
});
export const {
  useGetFacultyQuery,
  useGetFacultyMemberQuery,
  useUpdateFacultyMemberQuery,
  useAddFacultyMemberMutation,
  useDeleteFacultyMemberMutation,
} = facultyApi;
