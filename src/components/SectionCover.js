import React from "react";
import { Link } from "react-router-dom";
import SharedSectionLayout from "./SharedSectionLayout";
import Sidebar from "./Sidebar";
import "../styles/SectionCover.css";

/**
 * Generic cover grid component for sections like stories, journeys, about.
 *
 * @param {Object} props
 * @param {string} props.sidebarTitle - optional sidebar title (e.g., "断链")
 * @param {Array} props.items - array of { id, name }
 * @param {string} props.basePath - base path for sidebar link highlighting
 * @param {function} props.getLinkPath - function to generate link from item
 */
export default function SectionCover({
  sidebarTitle = "",
  items,
  basePath,
  getLinkPath,
}) {
  const sidebarLinks = items.map(({ id, name }) => ({
    id,
    name,
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
          {items.map(({ id, name }) => (
            <Link key={id} to={getLinkPath(id)} className="section-card">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </SharedSectionLayout>
  );
}
