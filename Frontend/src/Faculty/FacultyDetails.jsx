import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteFacultyMemberMutation,
  useGetFacultyMemberQuery,
} from "./FacultySlice";

export default function FacultyDetails() {
  const { Id } = useParams();
  const {
    data: faculty,
    isLoading,
    error,
  } = useGetFacultyMemberQuery(Id, { skip: !Id });

  const navigate = useNavigate();

  const [deleteFacultyMember] = useDeleteFacultyMemberMutation();
  async function removeFacultyMember() {
    try {
      const token = localStorage.getItem('authToken');
      await deleteFacultyMember({id: Id, token});
      navigate("/faculty");
    } catch (e) {
      console.error(e);
    }
  }

  if (isLoading) return <p>Loading faculty members...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>
        {faculty.name} #{faculty.id}
      </h1>
      <p>{faculty.bio}</p>
      <p>{faculty.contactInfo}</p>
      <p>{faculty.email}</p>
      <p>{faculty.departmentId}</p>
      <button onClick={removeFacultyMember}>Delete Faculty Member</button>
    </>
  );
}
