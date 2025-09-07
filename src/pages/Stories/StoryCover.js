import React from "react";
import SectionCover from "../../components/SectionCover";
import { getChapterLinks } from "./Survivalist/ChapterConfig";
import { useLang } from "../../components/ToggleLang";

export default function StoryCover() {
  const items = getChapterLinks();
  const { lang } = useLang();
  return (
    <SectionCover
      sidebarTitle={lang === "en" ? "Survivialist" : "以生为证"}
      items={items}
      basePath="/stories/Survivalist"
      getLinkPath={(id) => `/stories/Survivalist/${id}`}
    />
  );
}
