import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import './ChapterPage.css';
import { chapterMap, chapterTitles }  from './ChapterTitle';

export default function Chapters() {
  const { chapterId } = useParams();

  const ChapterComponent = chapterMap[Number(chapterId)];

  if (!ChapterComponent) {
    return <div>章节不存在</div>;
  }

  return (
    <div className="container">
      <div className="chapter-page">
        <Sidebar
          title="断链"
          variant="full" 
          links={chapterTitles.map(({ number, title }) => ({
            id: number,
            name: title,
          }))}
          currentId={chapterId}
          basePath="/stories/DuanLian"
        />
        <div className="chapter-content">
          <Suspense fallback={<div>加载中...</div>}>
            <ChapterComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}