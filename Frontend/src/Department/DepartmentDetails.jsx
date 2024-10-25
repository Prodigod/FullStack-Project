import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "./DepartmentSlice";

export default function DepartmentDetails() {
  const { Id } = useParams();
  const {
    data: department,
    isLoading,
    error,
  } = useGetDepartmentQuery(Id, { skip: !Id });

  const navigate = useNavigate();

  const [deleteDepartment] = useDeleteDepartmentMutation();
  async function removeDepartment() {
    try {
      const token = localStorage.getItem('authToken');
      await deleteDepartment({id: Id, token});
      navigate("/departments");
    } catch (e) {
      console.error(e);
    }
  }

  if (isLoading) return <p>Loading departments...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>
        {department.name} #{department.id}
      </h1>
      <p>{department.description}</p>
      <p>{department.contactInfo}</p>
      <button onClick={removeDepartment}>Delete Department</button>
    </>
  );
}
