import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import "../styles/HamburgerMenu.css";

export default function HamburgerMenu({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Collapse the menu after navigation
  };

  return (
    <div className="hamburger-container">
      <div className="icon-row">
        <RxHamburgerMenu
          className="hamburger-icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <span
          className="home-text-link"
          onClick={() => navigate("/")}
        >
          HOME
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleNavigate("/stories")}>故事</button>
          <button onClick={() => handleNavigate("/about")}>关于</button>
          <button onClick={() => handleNavigate("/journeys")}>旅程</button>
        </div>
      )}
    </div>
  );
}
