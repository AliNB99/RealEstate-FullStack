import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-screen mt-12 mx-4">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
