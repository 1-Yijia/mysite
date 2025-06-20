import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Stories from "./pages/Stories/stories";
import About from "./pages/about/about";
import Journeys from "./pages/journeys/journeys";
import Chapters from "./pages/Stories/DuanLian/ChapterPage";
import './App.css';

function App() {
  return (
    <Routes>
      {/* Layout wraps all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stories" element={<Stories />} />
        <Route path="about" element={<About />} />
        <Route path="journeys" element={<Journeys />} />
        <Route path="stories/DuanLian/:chapterId" element={<Chapters />} />
      </Route>
    </Routes>
  );
}

export default App;
