import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Stories from "./pages/Stories/stories";
import AboutPage from "./pages/about/AboutPage";
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
        <Route path="/about/:sectionId" element={<AboutPage />} />
        <Route path="journeys" element={<JourneyCover />} />
        <Route path="journeys/:journeyId" element={<JourneyPage />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/DuanLian/:chapterId" element={<Chapters />} />
      </Route>
    </Routes>
  );
}

export default App;
