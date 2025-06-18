import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import './App.css';

export default function Layout() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();
  const showMenu = location.pathname !== "/";

  return (
    <>
      {showMenu && (
        <div className="hamburger-aligned">
          <HamburgerMenu 
          isOpen={isHamburgerOpen}
          setIsOpen={setIsHamburgerOpen}/>
        </div>
      )}
      <Outlet context={{ isHamburgerOpen }}/> 
      <Footer />
    </>
  );
}
