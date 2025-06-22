import React from "react";
import { useParams } from "react-router-dom";
import SharedSectionLayout from "../../components/SharedSectionLayout";
import Sidebar from "../../components/Sidebar";
import { journeyMap, journeyList } from "./JourneyConfig";
import "./JourneyPage.css";

export default function JourneyPage() {
  const { journeyId } = useParams();
  const JourneyComponent = journeyMap[journeyId];

  if (!JourneyComponent) {
    return <div>旅程不存在</div>;
  }

  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          variant="full"
          title="旅程"
          links={journeyList}
          currentId={journeyId}
          basePath="/journeys"
        />
      }
    >
      <div className="journey-content">
        <JourneyComponent />
      </div>
    </SharedSectionLayout>
  );
}
