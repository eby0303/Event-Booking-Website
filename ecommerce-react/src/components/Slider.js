import React, { useState } from 'react';
import './Slider.css';  // Create this file for the CSS

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3"
  ];

  const totalSlides = images.length;

  const moveSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={() => moveSlide(-1)}>‹</button>
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="next" onClick={() => moveSlide(1)}>›</button>
    </div>
  );
};

export default Slider;
