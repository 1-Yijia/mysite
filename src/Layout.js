import { Outlet, useLocation } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import './App.css';

export default function Layout() {
  const location = useLocation();
  const showMenu = location.pathname !== "/";

  return (
    <>
      {showMenu && (
        <div className="hamburger-aligned">
          <HamburgerMenu />
        </div>
      )}
      <Outlet />  {/* Routed pages insert their own container if needed */}
      <Footer />
    </>
  );
}
