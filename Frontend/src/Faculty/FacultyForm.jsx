import { useNavigate } from "react-router-dom";
import { useAddFacultyMemberMutation } from "./FacultySlice";
import { useState } from "react";

export default function FacultyForm() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    contactInfo: "",
  });

  const navigate = useNavigate();
  const [addFacultyMember] = useAddFacultyMemberMutation();
  async function postFacultyMember(event) {
    event.preventDefault();

   
    try {
      const faculty = await addFacultyMember({
        ...formData,
        date: isoDate,
      }).unwrap();
      navigate(`/Faculties/${faculty.id}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={postFacultyMember}>
      <h2>Add a Faculty Member</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Bio
        <input
          type="text"
          name="Bio"
          value={formData.bio}
          onChange={(e) =>
            setFormData({ ...formData, bio: e.target.value })
          }
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </label>
      <label>
        Contact Info
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={(e) =>
            setFormData({ ...formData, contactInfo: e.target.value })
          }
        />
      </label>
      <button>Add Faculty Member</button>
    </form>
  );
}