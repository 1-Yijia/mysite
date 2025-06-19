import { useState, useEffect, useRef } from "react";
import './ChapterSidebar.css';
import { Link } from "react-router-dom";
import { chapterTitles } from "../pages/Stories/DuanLian/ChapterTitle";
import { useOutletContext } from "react-router-dom";

export default function ChapterSidebar({ chapterId, variant = "full"}) {
  const { isHamburgerOpen } = useOutletContext();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTitleClick = () => setIsMobileDropdownOpen((prev) => !prev);

  const handleLinkClick = () => setIsMobileDropdownOpen(false);

  return (
    <div
      ref={sidebarRef}
      className={`chapter-sidebar ${variant} ${
        isHamburgerOpen ? "collapsed" : ""
      } ${isMobileDropdownOpen ? "mobile-expanded" : "mobile-collapsed"}`}
    >
      <h3 onClick={handleTitleClick} className="chapter-sidebar-title">断链</h3>

      {/* ✅ Only show the list when in full mode + not collapsed + dropdown open */}
      {variant === "full" && !isHamburgerOpen && isMobileDropdownOpen && (
        <ul className="chapter-sidebar-list">
          {chapterTitles.map(({ number, title }) => (
            <li
              key={number}
              className={chapterId === String(number) ? "active" : ""}
            >
              <Link to={`/stories/DuanLian/${number}`} onClick={handleLinkClick}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
