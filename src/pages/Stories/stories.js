import React from "react";
import "./stories.css";
import { chapterTitles } from './DuanLian/ChapterTitle';
import ChapterSidebar from "../../components/ChapterSidebar";

import { Link } from "react-router-dom";

export default function Stories() {
  return (
    <div className="container">
      <div className="stories-container">
        <ChapterSidebar variant="minimal" />
        <div className="stories-grid-wrapper">
          <div className="stories-grid">
            {chapterTitles.map(({ number, title }) => (
              <Link
                key={number}
                to={`/stories/DuanLian/${number}`}
                className="chapter-card"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

