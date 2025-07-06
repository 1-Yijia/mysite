import React from "react";
import SectionPage from "../../components/SectionPage";
import { journeyMap, journeyList } from "./JourneyConfig";

export default function JourneySectionPage() {
  return (
    <SectionPage
      componentMap={journeyMap}
      linkList={journeyList}
      basePath="/journeys"
      sidebarTitle="旅程"
      idParam="journeyId"
    />
  );
}
