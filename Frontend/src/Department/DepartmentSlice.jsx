import api from "../store/api";

const departmentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "/departments",
      transformErrorResponse: (response) => response.data,
      providesTags: ["Department"],
    }),
    getDepartment: build.query({
      query: (id) => "/departments/" + id,
      transformErrorResponse: (response) => response.data,
      providesTags: ["Department"],
    }),
    addDepartment: build.mutation({
      query: (department) => ({
        url: "/departments",
        method: "POST",
        body: department,
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ["Department"],
    }),
    updateDepartment: build.mutation({
      query: ({id, token}) => ({
        url: `departments/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: ({ name, bio, contactInfo, Id }),
      }),
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: ({id, token}) => ({
        url: "/departments/" + id,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentsApi;
