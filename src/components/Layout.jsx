import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const location = useLocation(); // Get the current location

  // Define routes where the footer should be displayed
  const footerVisibleRoutes = ["/", "/App"];
  const mainVisibleRoutes = ["/", "/App"];

  return (
    <>
      <Header />
      {mainVisibleRoutes.includes(location.pathname) ? (
        <main className="flex-grow text-gray-900 dark:text-white dark:bg-gray-900">
          <Outlet />
        </main>
      ) : (
        <Outlet />
      )}
      {/* Conditionally render the footer */}
      {footerVisibleRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default Layout;
