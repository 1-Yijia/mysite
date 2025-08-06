import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeroCarousel.css";

const imageData = [
  { src: "/images/1.jpg", id: "project1" },
  { src: "/images/2.jpg", id: "project2" },
  { src: "/images/3.jpg", id: "project3" },
  { src: "/images/4.jpg", id: "project4" },
  { src: "/images/5.jpg", id: "project4" },
  { src: "/images/6.jpg", id: "project5" },
  { src: "/images/7.jpg", id: "project5" },
  { src: "/images/8.jpg", id: "project6" },
  { src: "/images/9.jpg", id: "project6" },
  { src: "/images/10.jpg", id: "project6" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  return (
    <div className="hero-carousel">
      {imageData.map(({ src, id }, index) => (
        <Link
          to={`/about/about_content/architecture/${id}`}
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        </Link>
      ))}

      {/* Navigation Arrows */}
      <button className="carousel-arrow left" onClick={goToPreviousSlide} aria-label="Previous Slide">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="carousel-arrow right" onClick={goToNextSlide} aria-label="Next Slide">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

    </div>
  );
}
