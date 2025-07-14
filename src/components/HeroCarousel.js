import { useEffect, useState } from "react";
import "../styles/HeroCarousel.css";

const images = Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.jpg`);

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
