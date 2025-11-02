import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import StoriesLanguageModal from "./StoriesLanguageModal";
import "../styles/ToggleLang.css";


// 1️⃣ Create Context
const LangContext = createContext();

// 2️⃣ Hook to consume context
export const useLang = () => useContext(LangContext);

// 3️⃣ Provider + Toggle Component combined
export function ToggleLangProvider({ children }) {
  const [lang, setLang] = useState("en"); // default English

  const toggleLang = (newLang) => setLang(newLang);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

// 4️⃣ The visible toggle button
export function ToggleLangButton() {
  const { lang, toggleLang } = useLang();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const hasShownEntryPopup = useRef(false);
  const prevLocation = useRef(location.pathname);

  // Check if current route is a stories page
  const isStoriesRoute = location.pathname.startsWith("/stories");

  // Detect when user enters a stories page
  useEffect(() => {
    const prevIsStories = prevLocation.current.startsWith("/stories");
    const currentIsStories = isStoriesRoute;
    
    // If user just entered a stories page (wasn't on stories, now is on stories)
    if (!prevIsStories && currentIsStories) {
      // If they're in ENG mode and we haven't shown the popup yet
      if (lang === "en" && !hasShownEntryPopup.current) {
        setShowModal(true);
        hasShownEntryPopup.current = true;
      }
    }
    
    // Update previous location
    prevLocation.current = location.pathname;
  }, [location.pathname, isStoriesRoute, lang]);

  const handleToggleLang = (newLang) => {
    // If trying to switch to English on stories pages, show modal and prevent change
    if (isStoriesRoute && newLang === "en" && lang !== "en") {
      setShowModal(true);
      return;
    }
    // Otherwise, proceed with language change
    toggleLang(newLang);
  };

  return (
    <>
      <div className="lang-toggle">
        <span
          className={lang === "en" ? "active" : ""}
          onClick={() => handleToggleLang("en")}
        >
          ENG
        </span>
        <span>|</span>
        <span
          className={lang === "cn" ? "active" : ""}
          onClick={() => handleToggleLang("cn")}
        >
          中文
        </span>
      </div>
      <StoriesLanguageModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
