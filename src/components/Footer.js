import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import { ToggleLangButton } from "./ToggleLang";

function Footer() {
  return (
    <footer className="footer-bar">
      <span className="footer-label">Connect with me</span>
      <a href="https://www.linkedin.com/in/yijiayuan93/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>

      <div className="footer-lang">
        <ToggleLangButton />
      </div>
      
    </footer>
  );
}

export default Footer;