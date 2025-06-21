import React from "react";
import "./SharedSectionLayout.css";

export default function SharedSectionLayout({ sidebar, children }) {
  return (
    <div className="container">
      <div className="shared-section-layout">
        {sidebar}
        <div className="shared-section-content">
          {children}
        </div>
      </div>
    </div>
  );
}
