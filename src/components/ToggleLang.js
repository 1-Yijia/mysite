import React, { createContext, useContext, useState } from "react";
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

  return (
    <div className="lang-toggle">
      <span
        className={lang === "en" ? "active" : ""}
        onClick={() => toggleLang("en")}
      >
        ENG
      </span>
      <span>|</span>
      <span
        className={lang === "cn" ? "active" : ""}
        onClick={() => toggleLang("cn")}
      >
        中文
      </span>
    </div>
  );
}
