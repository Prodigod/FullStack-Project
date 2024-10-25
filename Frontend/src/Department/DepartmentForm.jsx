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
    event.preventDefault();

   
    try {
      const department = await addDepartment({
        ...formData,
        date: isoDate,
      }).unwrap();
      navigate(`/departments/${department.id}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={postDepartment}>
      <h2>Add a Department</h2>
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
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
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
      <button>Add Department</button>
    </form>
  );
}