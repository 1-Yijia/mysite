import React, { Suspense } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import ChapterSidebar from "../../../components/ChapterSidebar";
import './ChapterPage.css';
import { chapterMap } from './ChapterTitle';

export default function Chapters() {
  const { chapterId } = useParams();
  const { isSidebarOpen } = useOutletContext();

  const ChapterComponent = chapterMap[Number(chapterId)];

  if (!ChapterComponent) {
    return <div>章节不存在</div>;
  }

  return (
    <div className="container">
      <div className="chapter-page">
        <ChapterSidebar chapterId={chapterId} className={isSidebarOpen ? "" : "collapsed"} />
        <div className="chapter-content">
          <Suspense fallback={<div>加载中...</div>}>
            <ChapterComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}