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
      sidebarTitle={lang === "en" ? "Projects" : "项目"}
      items={itemsWithLabel}
      basePath="/applications"
      getLinkPath={(id) => `/applications/${id}`}
      comingSoonMessage={comingSoonMessage}
      gallery
    />
  );
}
