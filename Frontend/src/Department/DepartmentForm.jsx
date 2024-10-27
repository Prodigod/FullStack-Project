import { useNavigate } from "react-router-dom";
import { useAddDepartmentMutation } from "./DepartmentSlice";
import { useState } from "react";

export default function DepartmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contactInfo: "",
  });

  const navigate = useNavigate();
  const [addDepartment] = useAddDepartmentMutation();
  
  async function postDepartment(event) {
    const token = localStorage.getItem('authToken');
    event.preventDefault();
    navigate("/departments");
    try {
      const department = await addDepartment(formData, token);
    } catch (e) {
      console.error(e);
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
    <form onSubmit={postDepartment}>
      <h2>Add a Department</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Info
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Department</button>
    </form>
  );
}
