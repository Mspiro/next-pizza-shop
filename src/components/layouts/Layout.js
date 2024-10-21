import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-black dark:text-gray-100">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
