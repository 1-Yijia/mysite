import React from "react";
import SectionPage from "../../components/SectionPage";
import { applicationsMap, getApplicationsListByLang } from "./ApplicationsConfig";
import { useLang } from "../../components/ToggleLang";

export default function ApplicationsSectionPage() {
  const { lang } = useLang();
  const itemsWithLabel = getApplicationsListByLang(lang);

  return (
    <SectionPage
      componentMap={applicationsMap}
      linkList={itemsWithLabel}
      basePath="/applications"
      sidebarTitle={lang === "en" ? "Projects" : "项目"}
      idParam="sectionId"
    />
  );
}
