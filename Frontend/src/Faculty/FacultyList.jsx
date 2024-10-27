import { Link } from "react-router-dom";

import { useGetFacultyQuery } from "./FacultySlice";



export default function FacultyList() {
  const { data, error, isLoading } = useGetFacultyQuery();
  const token = localStorage.getItem('authToken');
  if (isLoading) return <p>Loading faculty members...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data ? (
        <ul>
          {data.map((f) => (
            <li key={f.id}>
              <Link to={`/Faculty/${f.id}`}>
                <h3>{f.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No faculty members loaded</p>
      )}
      {token&& (
      <Link to="/faculty/new">
      <button>Add a new faculty member</button></Link>
      )}
    </>
  );
}
  
