// src/components/HamburgerMenu.js
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // collapse after clicking a link
  };

  return (
    <div className="hamburger-container">
      <FaBars
        className="hamburger-icon"
        onClick={() => {
          console.log("Hamburger clicked");
          setIsOpen(!isOpen);
        }}
      />

      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => handleNavigate("/stories")}>STORIES</button>
          <button onClick={() => handleNavigate("/light&shadow")}>LIGHT & SHADOW</button>
          <button onClick={() => handleNavigate("/journeys")}>JOURNEYS</button>
        </div>
      )}
    </div>
  );
}
