import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
      let interval = null;

      if (!isHovered) {
            interval = setInterval(() => {
              nextSlide();
            }, 2000);
          }
  
      return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

  return (
    <div className={styles.carousel} 
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div className={styles['carousel-image-container']}>
        <img src={images[currentIndex]} alt="carousel-slide" />
        <button className={`${styles['carousel-button']} ${styles['prev-button']}`} onClick={prevSlide}>
          Previous
        </button>
        <button className={`${styles['carousel-button']} ${styles['next-button']}`} onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;