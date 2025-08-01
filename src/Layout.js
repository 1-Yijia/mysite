import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import GAListener from "./components/GAListener";
import './App.css';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <GAListener />
      <Outlet />
      <div className={isHome ? "footer-overlay" : ""}>
        <Footer />
      </div>
    </>
  );
}
