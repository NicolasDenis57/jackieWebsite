import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled, RxDot } from 'react-icons/rx';

const Carousel2 = ({ images }) => {

const [currentIndex, setCurrentIndex] = useState(0);

const [isHovered, setIsHovered] = useState(false);

const prevImage = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length -1 : currentIndex -1;
      setCurrentIndex(newIndex)
};

const nextImage = () => {
      const isLastImage = currentIndex === images.length -1 ;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
};

const goToImage = (imageIndex) => {
      setCurrentIndex(imageIndex)
};

useEffect(() => {
      const interval = setInterval(() => {
        if (!isHovered) {
          nextImage();
        }
      }, 3000);
    
      return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

  

  return (
  
  <div className='max-w-full h-[780px] w-full m-auto px4 relative group'
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  >
      <div style={{backgroundImage: `url(${images[currentIndex]})`}} className='w-full h-full bg-center bg-cover duration-1000'></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevImage} size={30} />
            
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextImage} size={30} />
      </div>
      <div className='flex justify-center absolute bottom-4 py-2 w-full'>
        {images.map((image, imageIndex) => (
          <div key={imageIndex} onClick={() => goToImage(imageIndex)} className='text-2xl cursor-pointer'>
            {imageIndex === currentIndex ? <RxDot style={{ marginRight: '4px', color:'white' }} /> : <RxDotFilled style={{ marginRight: '4px', color:'white' }} />}
          </div>
        ))}
      </div>
  </div>

  );

  
};

export default Carousel2;