import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteFacultyMemberMutation,
  useGetFacultyMemberQuery,
} from "./FacultySlice";

export default function FacultyDetails() {
  const { facultyId } = useParams();
  const {
    data: faculty,
    isLoading,
    error,
  } = useGetFacultyMemberQuery(facultyId);

  const navigate = useNavigate();

  const [deleteFacultyMember] = useDeleteFacultyMemberMutation();
  async function removeFacultyMember() {
    try {
      await deleteFacultyMember(faculty.id);
      navigate("/");
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
      <p>{party.contactInfo}</p>
      <p>{faculty.email}</p>
      <button onClick={removeFacultyMember}>Delete Faculty Member</button>
    </>
  );
}
