import React from "react";
import SectionCover from "../../components/SectionCover";
import { useLang } from "../../components/ToggleLang";
import { getApplicationsListByLang } from "./ApplicationsConfig";

export default function ApplicationsCover() {
  const { lang } = useLang();
  const itemsWithLabel = getApplicationsListByLang(lang);

  return (
    <SectionCover
      items={itemsWithLabel}
      basePath="/applications"
    />
  );
}
