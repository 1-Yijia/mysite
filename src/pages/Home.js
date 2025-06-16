import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hero-container">
                <img src="/images/hero.jpeg" alt="hero" className="hero-image" />
                <div className="catalog-bar">
                    <button onClick={() => navigate("/stories")}>STORIES</button>
                    <button onClick={() => navigate("/light&shadow")}>LIGHT&SHADOW</button>
                    <button onClick={() => navigate("/journeys")}>JOURNEYS</button>
                </div>
            </div>
        </div>
    );
}

export default Home;