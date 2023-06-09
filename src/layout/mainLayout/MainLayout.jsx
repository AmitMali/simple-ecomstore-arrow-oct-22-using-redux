import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
