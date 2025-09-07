import React from "react";
import { Link } from "react-router-dom";
import { getArchitectureList } from "./architecture/ArchitecturePage";
import "../../../styles/ModelPhoto.css";
import { useLang } from "../../../components/ToggleLang";

export default function ModelPhoto() {
  const { lang } = useLang();
  const architectureList = getArchitectureList(lang);

  return (
    <div className="model-photo-container">
      {architectureList.map((project) => (
        <Link
          key={project.id}
          to={`/about/about_content/architecture/${project.id}`}
          className="model-photo-item"
        >
          <img src={project.image} alt={project.displayName} />
          <div className="model-photo-title">{project.displayName}</div>
        </Link>
      ))}
    </div>
  );
}
