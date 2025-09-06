'use client'
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { LeftArrow, RightArrow } from '@/utils/Arrows';

interface imgType {
  productArray: string[]
}

const ShowAllProducts: React.FC<imgType> = ({ productArray }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<string>(""); // <-- for animation
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToThumbnail = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const thumbnail = container.children[index] as HTMLElement;
      if (thumbnail) {
        const offsetLeft = thumbnail.offsetLeft;
        container.scrollTo({
          left: offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    scrollToThumbnail(currentIndex);
  }, [currentIndex]);

  const LeftSlide = () => {
    setAnimation("animate-left"); 
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productArray.length - 1 : prevIndex - 1
    );
  };

  const RightSlide = () => {
    setAnimation("animate-right");
    setCurrentIndex((prevIndex) =>
      prevIndex === productArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='main-container'>
      <div className='image'>
        <img
          src={productArray[currentIndex]}
          alt={`image ${currentIndex}`}
          className={`img-active ${animation}`}
          onAnimationEnd={() => setAnimation("")} 
        />
      </div>
      <div className='image-container'>
        <div className={`show-image-container`} ref={containerRef}>
          {productArray.map((url, index) => (
            <img
              src={url}
              alt={`image ${index}`}
              key={index}
              className={`${index === currentIndex && 'img-active'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className='left-rigth-arrow'>
          <div onClick={LeftSlide}>
            <LeftArrow />
          </div>
          <div onClick={RightSlide}>
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowAllProducts;
