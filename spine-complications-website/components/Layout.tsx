import React from "react";
import Header from "./Header"; // Assuming you have a Header component
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
