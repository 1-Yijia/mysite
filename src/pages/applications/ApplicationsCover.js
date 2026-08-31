import React from "react";
import SectionCover from "../../components/SectionCover";
import { useLang } from "../../components/ToggleLang";
import { getApplicationsListByLang } from "./ApplicationsConfig";

export default function ApplicationsCover() {
  const { lang } = useLang();
  const itemsWithLabel = getApplicationsListByLang(lang);
  const comingSoonMessage = lang === "en"
    ? "More apps coming soon"
    : "敬请期待更多应用";

  return (
    <SectionCover
      sidebarTitle={lang === "en" ? "Applications" : "应用"}
      items={itemsWithLabel}
      basePath="/applications"
      comingSoonMessage={comingSoonMessage}
    />
  );
}
