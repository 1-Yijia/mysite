import { useState, useEffect, useRef, useContext } from "react";
import { SidebarContext } from "./SharedSectionLayout";
import { Link } from "react-router-dom";
import "./Sidebar.css";


export default function Sidebar({ 
  variant = "full",
  title = "",
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
      <h3 onClick={handleTitleClick} className="chapter-sidebar-title">{title}</h3>

      {shouldShowList && (
        <ul className="chapter-sidebar-list">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className={currentId === String(id) ? "active" : ""}
            >
              <Link to={`${basePath}/${id}`} onClick={handleLinkClick}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}


    </div>
  );
}
