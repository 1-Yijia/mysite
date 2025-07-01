import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import StoryCover from "./pages/Stories/StoryCover";
import AboutCover from "./pages/about/AboutCover";
import AboutSectionPage from "./pages/about/AboutSectionPage";
import JourneyCover from "./pages/journeys/JourneyCover";
import JourneyPage from "./pages/journeys/JourneyPage";
import Chapters from "./pages/Stories/DuanLian/ChapterPage";
import './App.css';

function App() {
  return (
    <Routes>
      {/* Layout wraps all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutCover />} />
        <Route path="/about/:sectionId" element={<AboutSectionPage />} />
        <Route path="journeys" element={<JourneyCover />} />
        <Route path="journeys/:journeyId" element={<JourneyPage />} />
        <Route path="stories" element={<StoryCover />} />
        <Route path="stories/DuanLian/:chapterId" element={<Chapters />} />
      </Route>
    </Routes>
  );
}

export default App;
