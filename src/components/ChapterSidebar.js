import './ChapterSidebar.css';
import { Link } from "react-router-dom";
import { chapterTitles } from "../pages/Stories/DuanLian/ChapterTitle";

export default function ChapterSidebar({ chapterId }) {
  // console.log("Sidebar chapterId:", chapterId);
  return (
    <div className="chapter-sidebar">
      <h3>断链</h3>
      <ul>
        {chapterTitles.map(({ number, title }) => (
          <li key={number} className={chapterId === String(number) ? "active" : ""}>
            <Link to={`/stories/DuanLian/${number}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
