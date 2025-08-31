import React from "react";
import SectionCover from "../../components/SectionCover";
import { getChapterLinks } from "./Survivalist/ChapterConfig";

export default function StoryCover() {
  const items = getChapterLinks();
  return (
    <SectionCover
      sidebarTitle="以生为证 Survivialist"
      items={items}
      basePath="/stories/Survivalist"
      getLinkPath={(id) => `/stories/Survivalist/${id}`}
    />
  );
}
