import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import { useLang } from "../components/ToggleLang"; // your global hook
import { navLinks } from "../constants/NavLinks";
import "./Home.css";
import "../styles/HeroCarousel.css";

function Home() {
  const navigate = useNavigate();
  const { lang } = useLang();

  return (
    <div className="home-container">
      <div className="hero-container">
        <HeroCarousel />
        <div className="catalog-bar">
          {/* map through navLinks for relevant buttons */}
          {[navLinks.stories, navLinks.journeys, navLinks.about].map((link) => (
            <button key={link.path} onClick={() => navigate(link.path)}>
              {link[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
