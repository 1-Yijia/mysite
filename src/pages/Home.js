import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
// import "../components/HeroCarousel.css";
import "./Home.css";
import "../styles/HeroCarousel.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hero-container">
                <HeroCarousel />
                <div className="catalog-bar">
                    <button onClick={() => navigate("/stories")}>故事</button>
                    <button onClick={() => navigate("/journeys")}>旅程</button>
                    <button onClick={() => navigate("/about")}>关于</button>
                </div>
            </div>
        </div>
    );
}

export default Home;