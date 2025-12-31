import { createBrowserRouter } from "react-router-dom";
import {Navigate} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Settings from "../pages/Settings/Settings.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  }
]);

export default router;