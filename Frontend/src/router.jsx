import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import FacultyList from "./Faculty/FacultyList";
import FacultyDetails from "./Faculty/FacultyDetails";
import FacultyForm from "./Faculty/FacultyForm";

import DepartmentList from "./Department/FacultyList";
import DepartmentDetails from "./Department/FacultyDetails";
import DepartmentForm from "./Department/DepartmentForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <home />,
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
        path: "/DepartmentList/",
        element: <DepartmentList />,
      },
      {
        path: "/Department/:Id",
        element: <DepartmentDetails />,
      },
      {
        path: "Department/New",
        element: <DepartmentForm />,
      }
    ],
  },
]);

export default router;