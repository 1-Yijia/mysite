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
  sectionLabel = "Section",
  items,
  basePath,
  getLinkPath,
  comingSoonMessage = null,
  showIndex = true,
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
          sectionLabel={sectionLabel}
          links={sidebarLinks}
          currentId={null}
          basePath={basePath}
        />
      }
    >
      <div className="section-grid-wrapper">
        <div className="section-grid">
          {items.map(({ id, displayName, description, externalUrl }, index) => {
            const idxNum = showIndex ? (
              <span className="idx-num">{String(index + 1).padStart(2, "0")}</span>
            ) : null;
            const label = <span className="card-label">{idxNum}{displayName}</span>;
            const content = description ? (
              <>
                <span className="card-title">{label}</span>
                <span className="card-desc">{description}</span>
              </>
            ) : (
              label
            );

            return externalUrl ? (
              <a
                key={id}
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="section-card"
              >
                {content}
              </a>
            ) : (
              <Link key={id} to={getLinkPath(id)} className="section-card">
                {content}
              </Link>
            );
          })}
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
