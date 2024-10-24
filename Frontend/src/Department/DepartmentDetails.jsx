import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "./DepartmentSlice";

export default function DepartmentDetails() {
  const { departmentId } = useParams();
  const {
    data: department,
    isLoading,
    error,
  } = useGetDepartmentQuery(departmentId);

  const navigate = useNavigate();

  const [deleteDepartment] = useDeleteDepartmentMutation();
  async function removeDepartment() {
    try {
      await deleteDepartment(department.id);
      navigate("/");
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
      <p>{party.description}</p>
      <p>{party.contactInfo}</p>
      <button onClick={removeDepartment}>Delete Department</button>
    </>
  );
}
