import { useNavigate } from "react-router-dom";
import { useAddFacultyMemberMutation } from "./FacultySlice";
import { useState } from "react";

export default function FacultyForm() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    contactInfo: "",
    departmentId: "",
  });

  const navigate = useNavigate();
  const [addFacultyMember] = useAddFacultyMemberMutation();
  const [error, setError] = useState(null); 

  async function postFacultyMember(event) {
    event.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("Authentication token is missing. Please log in.");
      return;
    }

   
    if (!formData.name || !formData.bio || !formData.email || !formData.contactInfo || !formData.departmentId) {
      setError("All fields must be filled out.");
      return;
    }

    try {
      const faculty = await addFacultyMember({
        formData,
        departmentId: parseInt(formData.departmentId, 10),
        token,
      });
    } catch (e) {
      console.error("Error adding faculty member:", e);
      setError("There was an error adding the faculty member. Please try again.");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={postFacultyMember}>
      <h2>Add a Faculty Member</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} 

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Bio
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Contact Info
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Department Id
        <input
          type="number" 
          name="departmentId"
          value={formData.departmentId}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Add Faculty Member</button>
    </form>
  );
}
