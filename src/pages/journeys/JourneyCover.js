import React from "react";
import { Link } from "react-router-dom";
import SharedSectionLayout from "../../components/SharedSectionLayout";
import Sidebar from "../../components/Sidebar";
import { journeyList } from "./JourneyConfig";
import "./JourneyCover.css";

export default function JourneyCover() {
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
          {journeyList.map(({ id, name }) => (
            <Link key={id} to={`/journeys/${id}`} className="journey-card">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </SharedSectionLayout>
  );
}
