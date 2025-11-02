import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useLang } from "./ToggleLang";
import { navLinks } from "../constants/NavLinks";
import "../styles/HamburgerMenu.css";

export default function HamburgerMenu({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { lang } = useLang();

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
          <button onClick={() => handleNavigate(navLinks.stories.path)}>
            {navLinks.stories[lang]}
          </button>
          <button onClick={() => handleNavigate(navLinks.about.path)}>
            {navLinks.about[lang]}
          </button>
          <button onClick={() => handleNavigate(navLinks.journeys.path)}>
            {navLinks.journeys[lang]}
          </button>
        </div>
      )}
    </div>
  );
}
