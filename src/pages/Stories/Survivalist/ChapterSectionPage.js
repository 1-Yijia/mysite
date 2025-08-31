import React from "react";
import SectionPage from "../../../components/SectionPage";
import { chapterMap, getChapterLinks } from "./ChapterConfig";


export default function ChapterSectionPage() {
  const links = getChapterLinks();
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
