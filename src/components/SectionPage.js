import React from "react";
import { useParams } from "react-router-dom";
import SharedSectionLayout from "./SharedSectionLayout";
import Sidebar from "./Sidebar";
import "../styles/SectionPage.css";

/**
 * Generic page renderer for section detail views (About, Journey, Chapters).
 *
 * @param {Object} props
 * @param {Object} props.componentMap - map of ID to component
 * @param {Array} props.linkList - array of { id, name }
 * @param {string} props.basePath - base URL path for sidebar
 * @param {string} props.sidebarTitle - optional title in sidebar
 * @param {string} props.idParam - name of the param in URL (default: 'id')
 * @param {string} props.fallbackMessage - error fallback message
 */
export default function SectionPage({
  componentMap,
  linkList,
  basePath,
  sidebarTitle = "",
  idParam = "id",
  fallbackMessage = "内容不存在",
}) {
  const params = useParams();
  const id = params[idParam];
  const SectionComponent = componentMap[id] || componentMap[Number(id)];

  if (!SectionComponent) {
    return <div>{fallbackMessage}</div>;
  }

  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          title={sidebarTitle}
          variant="full"
          links={linkList}
          currentId={id}
          basePath={basePath}
          alwaysExpanded
        />
      }
    >
      <div className="section-content">
        <SectionComponent />
      </div>
    </SharedSectionLayout>
  );
}
