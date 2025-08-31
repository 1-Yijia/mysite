import React from "react";
import SectionPage from "../../components/SectionPage";
import { journeyMap} from "./JourneyConfig";
import { useLang } from "../../components/ToggleLang";
import { getJourneyListByLang } from "./JourneyConfig";

export default function JourneySectionPage() {
  const { lang } = useLang();
  const journeys = getJourneyListByLang(lang);

  return (
    <SectionPage
      componentMap={journeyMap}
      linkList={journeys}
      basePath="/journeys"
      sidebarTitle={lang === "en" ? "Journey" : "旅程"}
      idParam="journeyId"
    />
  );
}
