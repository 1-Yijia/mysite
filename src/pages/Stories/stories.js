import React from "react";
import "./stories.css";
import { chapterTitles } from './DuanLian/ChapterTitle';
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

export default function Stories() {
  const links = chapterTitles.map(({ number, title }) => ({
    id: number,
    name: title,
  }));

  return (
    <div className="container">
      <div className="stories-container">

        <Sidebar
          variant="minimal"
          title="断链"
          links={links}
          currentId={null}
          basePath="/stories/DuanLian"
        />

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

