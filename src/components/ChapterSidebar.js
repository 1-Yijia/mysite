import './ChapterSidebar.css';
import { Link } from "react-router-dom";
import { chapterTitles } from "../pages/Stories/DuanLian/ChapterTitle";
import { useOutletContext } from "react-router-dom";

export default function ChapterSidebar({ chapterId, variant = "full"}) {
  const { isHamburgerOpen } = useOutletContext();

  return (
    <div
      className={`chapter-sidebar ${variant} ${
        isHamburgerOpen ? "collapsed" : ""
      }`}
    >
      <h3>断链</h3>
      {variant === "full" && !isHamburgerOpen &&  (
        <ul>
          {chapterTitles.map(({ number, title }) => (
            <li
              key={number}
              className={chapterId === String(number) ? "active" : ""}
            >
              <Link to={`/stories/DuanLian/${number}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
