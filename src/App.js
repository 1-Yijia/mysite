import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories/stories";
import LightShadow from "./pages/light&shadow/light&shadow";
import Journeys from "./pages/journeys/journeys";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import Chapters from "./pages/Stories/DuanLian/ChapterPage";


function App() {
  const location = useLocation();
  const showMenu = location.pathname !== "/";

  return (
    <>
      {showMenu && <HamburgerMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/light&shadow" element={<LightShadow />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/stories/DuanLian/:chapterId" element={<Chapters />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
