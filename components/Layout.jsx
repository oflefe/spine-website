import React from "react";
import Header from "./Header"; // Assuming you have a Header component

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
