import React from "react";
import { Link } from "react-router-dom";
import SharedSectionLayout from "./SharedSectionLayout";
import Sidebar from "./Sidebar";
import "../styles/SectionCover.css";

/**
 * Generic cover grid component for sections like stories, journeys, about.
 *
 * @param {Object} props
 * @param {string} props.sidebarTitle 
 * @param {Array} props.items - array of { id, displayName }
 * @param {string} props.basePath - base path for sidebar link highlighting
 * @param {function} props.getLinkPath - function to generate link from item
 * @param {string} props.comingSoonMessage - optional message for unclickable "coming soon" card
 */
export default function SectionCover({
  sidebarTitle = "",
  items,
  basePath,
  getLinkPath,
  comingSoonMessage = null,
}) {
  const sidebarLinks = items.map(({ id, displayName }) => ({
    id,
    displayName,
  }));

  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          variant="minimal"
          title={sidebarTitle}
          links={sidebarLinks}
          currentId={null}
          basePath={basePath}
        />
      }
    >
      <div className="section-grid-wrapper">
        <div className="section-grid">
          {items.map(({ id, displayName }) => (
            <Link key={id} to={getLinkPath(id)} className="section-card">
              {displayName}
            </Link>
          ))}
          {comingSoonMessage && (
            <div className="section-card coming-soon-card">
              {comingSoonMessage}
            </div>
          )}
        </div>
      </div>
    </SharedSectionLayout>
  );
}
