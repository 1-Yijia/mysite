import React, { useState, createContext } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../styles/SharedSectionLayout.css";

// Create context in case child components need it
export const SidebarContext = createContext();

export default function SharedSectionLayout({ sidebar, children }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isHamburgerOpen, setIsHamburgerOpen }}>
      <div className="container">
        <div className="shared-section-layout">
          {/* ✅ LEFT COLUMN: Hamburger stacked above sidebar */}
          <div className="shared-section-left">
            <div className="hamburger-aligned">
              <HamburgerMenu
                isOpen={isHamburgerOpen}
                setIsOpen={setIsHamburgerOpen}
              />
            </div>
            {sidebar}
          </div>
          {/* ✅ RIGHT COLUMN: Main Content */}
          <div className="shared-section-content">{children}</div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
