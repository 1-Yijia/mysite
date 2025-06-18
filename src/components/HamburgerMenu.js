import React from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./HamburgerMenu.css";

export default function HamburgerMenu( { isOpen, setIsOpen } ) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
  navigate(path);
  setIsOpen(false); // Collapse the menu after navigation
};

  return (
    <div className="hamburger-container">
      <FaBars
        className="hamburger-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleNavigate("/stories")}>故事</button>
          <button onClick={() => handleNavigate("/light&shadow")}>光影</button>
          <button onClick={() => handleNavigate("/journeys")}>旅程</button>
        </div>
      )}
    </div>
  );
}
