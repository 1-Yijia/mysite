import React from "react";
import SectionCover from "../../components/SectionCover";
import { useLang } from "../../components/ToggleLang";
import { getJourneyListByLang } from "./JourneyConfig";

export default function JourneyCover() {
  const { lang } = useLang();
  const journeys = getJourneyListByLang(lang);

  return (
    <SectionCover
      items={journeys}
      basePath="/journeys"
      getLinkPath={(id) => `/journeys/${id}`}
    />
  );
}
