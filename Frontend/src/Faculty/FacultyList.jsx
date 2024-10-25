import { Link } from "react-router-dom";

import { useGetFacultyQuery } from ".FacultySlice";

export default function FacultyList() {
  const { data: faculty = [] } = useGetFacultyQuery();
  return (
    <>
      <h1>List of Faculty Members:</h1>
      <ul>
        {faculty.map((f) => (
          <li key={f.id}>
            <h2>
              {f.name} #{f.id}
            </h2>
            <p>{f.description}</p>
            <Link to={`/faculties/${f.id}`}>See more</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
