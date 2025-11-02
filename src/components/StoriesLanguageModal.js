import React, { useEffect, useRef } from "react";
import "../styles/StoriesLanguageModal.css";

export default function StoriesLanguageModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="stories-modal-overlay">
      <div className="stories-modal-content" ref={modalRef}>
        <button className="stories-modal-close" onClick={onClose}>
          ×
        </button>
        <p className="stories-modal-message">
          Stories only available in Chinese only for now
        </p>
      </div>
    </div>
  );
}

