import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setActiveSlideIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setActiveSlideIndex(newIndex);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setActiveSlideIndex(index);
  };

  useEffect(() => {
    let interval = null;

    if (!isHovered) {
      interval = setInterval(nextSlide, 2000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles['carousel-image-container']}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel-slide"
            className={`${styles['carousel-image']} ${
              index === currentIndex ? styles['fade-in'] : styles['fade-out']
            }`}
          />
        ))}
        <div className={styles['carousel-indicators']}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles['carousel-indicator']} ${
                index === activeSlideIndex ? styles['active'] : ''
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <button className={`${styles['carousel-button']} ${styles['prev-button']}`} onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className={`${styles['carousel-button']} ${styles['next-button']}`} onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;