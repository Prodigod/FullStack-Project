import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import PartyList from "./Faculty/PartyList";
import FacultyDetails from "./Faculty/PartyDetails";
import PartyForm from "./parties/PartyForm";

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
        element: <PartyList />,
      },
      {
        path: "/Faculty/:partyId",
        element: <FacultyDetails />,
      },
      {
        path: "/parties/new",
        element: <PartyForm />,
      },
    ],
  },
]);

export default router;