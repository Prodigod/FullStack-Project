import { Link } from "react-router-dom";

import { useGetDepartmentsQuery } from "./DepartmentSlice";

export default function DepartmentList() {
  const { data, error, isLoading } = useGetDepartmentsQuery();
  const token = localStorage.getItem('authToken');
  if (isLoading) return <p>Loading departments...</p>;
  if (error) return <p>{error.message}</p>;
  
  return (
    <>
      <h1>List of Departments:</h1>
      {data ? (
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <Link to={`/departments/${d.id}`}>
            <h3>{d.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
      ) : (
        <p>No departments available.</p>
      )}
      {token&& (
    
        <Link to="/departments/new">
          <button>Add a new department</button>
        </Link>
      )}
    
    </>
  );
}