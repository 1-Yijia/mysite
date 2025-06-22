import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import SharedSectionLayout from "../../../components/SharedSectionLayout";
import './ChapterPage.css';
import { chapterMap, chapterTitles }  from './ChapterConfig';

export default function Chapters() {
  const { chapterId } = useParams();

  const ChapterComponent = chapterMap[Number(chapterId)];

  if (!ChapterComponent) {
    return <div>章节不存在</div>;
  }

  const links = chapterTitles.map(({ number, title }) => ({
    id: number,
    name: title,
  }));

  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          title="断链"
          variant="full"
          links={links}
          currentId={chapterId}
          basePath="/stories/DuanLian"
        />
      }
    >
      <div className="chapter-content">
        <Suspense fallback={<div>加载中...</div>}>
          <ChapterComponent />
        </Suspense>
      </div>
    </SharedSectionLayout>
  );
}