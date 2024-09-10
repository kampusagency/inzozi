import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Whatsapp from "./whatsapp";
import BackToTop from "./backtotop";

function Layout() {
  return (
    <>
      <Outlet />
      <Whatsapp />
      <BackToTop />
      <Footer />
    </>
  );
}

export default Layout;
