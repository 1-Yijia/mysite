import React from "react";
import { Link } from "react-router-dom";
import SharedSectionLayout from "../../components/SharedSectionLayout";
import Sidebar from "../../components/Sidebar";
import { aboutList } from "./AboutConfig";
// import "./JourneyCover.css";

export default function AboutCover() {
  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          variant="minimal"
          title=""
          links={[]} // No links yet
          currentId={null}
          basePath="/journeys"
        />
      }
    >
      <div className="journey-grid-wrapper"> 
        <div className="journey-grid">
          {aboutList.map(({ id, name }) => (
            <Link key={id} to={`/about/${id}`} className="journey-card">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </SharedSectionLayout>
  );
}
