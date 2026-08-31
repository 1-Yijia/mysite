import { useState, useEffect, useRef, useContext } from "react";
import { SidebarContext } from "./SharedSectionLayout";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


export default function Sidebar({
  variant = "full",
  title = "",
  sectionLabel = "Section",
  links = [],
  currentId = null,
  basePath = "",
  alwaysExpanded = false,
}) {
  const { isHamburgerOpen } = useContext(SidebarContext);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Click outside to close dropdown
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

  const shouldShowList =
  alwaysExpanded ||
  (variant === "full" && !isHamburgerOpen && isMobileDropdownOpen);

  return (
    <div
      ref={sidebarRef}
      className={`chapter-sidebar ${variant} ${isHamburgerOpen ? "collapsed" : ""
        } ${isMobileDropdownOpen ? "mobile-expanded" : "mobile-collapsed"}`}
    >
      <div onClick={handleTitleClick} className="chapter-sidebar-header">
        <div className="chapter-sidebar-label">{sectionLabel}</div>
        <h3 className="chapter-sidebar-title">{title}</h3>
        <div className="chapter-sidebar-tick"></div>
      </div>

      {shouldShowList && (
        <ul className="chapter-sidebar-list">
          {links.map(({ id, displayName }, index) => (
            <li
              key={id}
              className={currentId === String(id) ? "active" : ""}
            >
              <span className="idx-num">{String(index + 1).padStart(2, "0")}</span>
              <Link to={`${basePath}/${id}`} onClick={handleLinkClick}>
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      )}


    </div>
  );
}
