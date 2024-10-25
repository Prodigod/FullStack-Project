import api from "../store/api";

const departmentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "/departments",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Departments"],
    }),
    getDepartment: build.query({
      query: (id) => "/departments/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Department"],
    }),
    addDepartment: build.mutation({
      query: (department) => ({
        url: "/departments",
        method: "POST",
        body: department,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: "/departments/" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentsApi;
