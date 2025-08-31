import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import StoryCover from "./pages/Stories/StoryCover";
import AboutCover from "./pages/about/AboutCover";
import AboutSectionPage from "./pages/about/AboutSectionPage";
import JourneyCover from "./pages/journeys/JourneyCover";
import JourneySectionPage from "./pages/journeys/JourneySectionPage";
import ChapterSectionPage from "./pages/Stories/Survivalist/ChapterSectionPage";
import ArchitectureProjectPage from "./pages/about/about_content/architecture/ArchitecturePage";
import { ToggleLangProvider } from "./components/ToggleLang";
import './App.css';

function App() {
  return (
    <ToggleLangProvider>
    <Routes>
      {/* Layout wraps all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutCover />} />
        <Route path="/about/:sectionId" element={<AboutSectionPage />} />
        <Route
          path="/about/about_content/architecture/:id"
          element={<ArchitectureProjectPage />}
        />
        <Route path="journeys" element={<JourneyCover />} />
        <Route path="journeys/:journeyId" element={<JourneySectionPage />} />
        <Route path="stories" element={<StoryCover />} />
        <Route path="stories/Survivalist/:chapterId" element={<ChapterSectionPage />} />
      </Route>
    </Routes>
    </ToggleLangProvider>
  );
}

export default App;
