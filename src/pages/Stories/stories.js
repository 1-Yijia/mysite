import React from "react";
import "./stories.css";
import { chapterTitles } from './DuanLian/ChapterTitle';

import { Link } from "react-router-dom";

export default function Stories() {
  return (
    <div className="stories-container">
      <div className="stories-sidebar">断链</div>
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
  );
}

