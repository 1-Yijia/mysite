import React from "react";
import { chapterTitles } from "./DuanLian/ChapterConfig";
import SectionCover from "../../components/SectionCover";

export default function StoryCover() {
  return (
    <SectionCover
      sidebarTitle="断链"
      items={chapterTitles.map(({ number, title }) => ({
        id: number,
        name: title,
      }))}
      basePath="/stories/DuanLian"
      getLinkPath={(id) => `/stories/DuanLian/${id}`}
    />
  );
}
