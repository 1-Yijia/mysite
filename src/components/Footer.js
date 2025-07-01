import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-bar">
      <span>Connect with me</span>
      <a href="https://www.linkedin.com/in/yijiayuan93/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>
    </footer>
  );
}

export default Footer;