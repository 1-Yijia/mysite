import React from "react";
import { Link } from "react-router-dom";
import { architectureList } from "./architecture/ArchitecturePage";
import "../../../styles/ModelPhoto.css";

export default function ModelPhoto() {
  return (
    <div className="model-photo-container">
      {architectureList.map((project) => (
        <Link
          key={project.id}
          to={`/about/architecture/${project.id}`}
          className="model-photo-item"
        >
          <img src={project.image} alt={project.title} />
          <div className="model-photo-title">{project.title}</div>
        </Link>
      ))}
    </div>
  );
}
