import React from "react";
import SectionPage from "../../../components/SectionPage";
import { chapterMap, chapterTitles } from "./ChapterConfig";

const links = chapterTitles.map(({ number, title }) => ({
  id: number,
  name: title,
}));

export default function ChapterSectionPage() {
  return (
    <SectionPage
      componentMap={chapterMap}
      linkList={links}
      basePath="/stories/Survivalist"
      sidebarTitle="以生为证 Survivialist"
      idParam="chapterId"
      fallbackMessage="章节不存在"
    />
  );
}
