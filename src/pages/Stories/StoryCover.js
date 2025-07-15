import React from "react";
import { chapterTitles } from "./Survivalist/ChapterConfig";
import SectionCover from "../../components/SectionCover";

export default function StoryCover() {
  return (
    <SectionCover
      sidebarTitle="以生为证 Survivialist"
      items={chapterTitles.map(({ number, title }) => ({
        id: number,
        name: title,
      }))}
      basePath="/stories/Survivalist"
      getLinkPath={(id) => `/stories/Survivalist/${id}`}
    />
  );
}
