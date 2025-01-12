import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Chat from "./components/Chat.jsx";
import Navbar from "./components/Navbar.jsx";

// Common layout to display Navbar and child routes
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This will render the child route components */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Default child route for "/"
        element: <Chat />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
