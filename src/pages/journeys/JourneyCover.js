import React from "react";
import SectionCover from "../../components/SectionCover";
import { useLang } from "../../components/ToggleLang";
import { getJourneyListByLang } from "./JourneyConfig";

export default function JourneyCover() {
  const { lang } = useLang();
  const journeys = getJourneyListByLang(lang);
  const comingSoonMessage = lang === "en" 
    ? "More journey chapters to come" 
    : "敬请期待更多旅行篇章";

  return (
    <SectionCover
      items={journeys}
      basePath="/journeys"
      getLinkPath={(id) => `/journeys/${id}`}
      comingSoonMessage={comingSoonMessage}
    />
  );
}
