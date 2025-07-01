import React from "react";
import { journeyList } from "./JourneyConfig";
import SectionCover from "../../components/SectionCover";

export default function JourneyCover() {
  return (
    <SectionCover
      items={journeyList}
      basePath="/journeys"
      getLinkPath={(id) => `/journeys/${id}`}
    />
  );
}
