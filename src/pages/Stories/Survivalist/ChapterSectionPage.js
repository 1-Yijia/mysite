import React from "react";
import SectionPage from "../../../components/SectionPage";
import { chapterMap, getChapterLinks } from "./ChapterConfig";
import { useLang } from "../../../components/ToggleLang";


export default function ChapterSectionPage() {
  const links = getChapterLinks();
  const { lang } = useLang();
  return (
    <SectionPage
      componentMap={chapterMap}
      linkList={links}
      basePath="/stories/Survivalist"
      sidebarTitle={lang === "en" ? "Survivialist" : "以生为证"}
      idParam="chapterId"
      fallbackMessage="章节不存在"
    />
  );
}
