import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import ChapterSidebar from "../../../components/ChapterSidebar";
import './ChapterPage.css';
import { chapterMap } from './ChapterTitle';

export default function Chapters() {
  const { chapterId } = useParams();

  const ChapterComponent = chapterMap[Number(chapterId)];

  if (!ChapterComponent) {
    return <div>章节不存在</div>;
  }

  return (
    <div className="chapter-page">
      <ChapterSidebar chapterId={chapterId} />
      <div className="chapter-content">
        <Suspense fallback={<div>加载中...</div>}>
          <ChapterComponent />
        </Suspense>
      </div>
    </div>
  );
}