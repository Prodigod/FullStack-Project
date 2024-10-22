import { Link } from "react-router-dom";

import { useGetDepartmentsQuery } from "./DepartmentSlice";

export default function DepartmentList() {
  const { data: departments = [] } = useGetDepartmentsQuery();

  return (
    <>
      <h1>List of Departments:</h1>
      <ul>
        {departments.map((d) => (
          <li key={d.id}>
            <h2>
              {d.name} #{d.id}
            </h2>
            <p>{d.description}</p>
            <Link to={`/departments/${d.id}`}>See details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
