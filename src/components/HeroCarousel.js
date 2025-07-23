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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    </div>
  );
}
