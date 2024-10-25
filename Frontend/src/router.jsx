import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import FacultyList from "./Faculty/FacultyList";
import FacultyDetails from "./Faculty/FacultyDetails";
import FacultyForm from "./Faculty/FacultyForm";
import Home from "./Home";
import DepartmentList from "./Department/DepartmentList";
import DepartmentDetails from "./Department/DepartmentDetails";
import DepartmentForm from "./Department/DepartmentForm";
import Register from "../users/register";
import Login from "../users/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Faculty",
        element: <FacultyList />,
      },
      {
        path: "/Faculty/:Id",
        element: <FacultyDetails />,
      },
      {
        path: "/Faculty/New",
        element: <FacultyForm />,
      },
      {
        path: "/Departments/",
        element: <DepartmentList />,
      },
      {
        path: "/Departments/:Id",
        element: <DepartmentDetails />,
      },
      {
        path: "Department/New",
        element: <DepartmentForm />,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "Login",
        element: <Login />,
      }
    ],
  },

]);

export default router;