'use client'
import React, { useEffect } from 'react'
import { CategoryItem } from "@/utils/types";
import './style.css';


type Props = {
  items: CategoryItem[];
};

const bgColors = [
  "#fff8e1", "#fff3f0", "#e8f8ec", "#f6fdea", "#fff9e6",
  "#eafff2", "#fff6f5", "#f9f6ff", "#f1fff5", "#fff0f6"
];

const FeaturedCategories: React.FC<Props> = ({ items }) => {

  useEffect(() => {

    
    // if (typeof window !== 'undefined') return ;
    const interval = setTimeout(() => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.Swiper) {
        // @ts-ignore
        new window.Swiper('.slide-content-custom-feature', {
          slidesPerView: 12,
          spaceBetween: 10,
          loop: true,
          centeredSlides: true,
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next-cusom',
            prevEl: '.swiper-button-prev-custom',
          },
          breakpoints: {
            0: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 4,
            },
            950: {
              slidesPerView: 6,
            },
          },
        });
      }
    }, 1000);

    return () => clearTimeout(interval);
  }, []);


  return (

    <div className="swiper swiper-custom">

      <div className="slide-content-custom-feature">
        <div className="card-wrapper swiper-wrapper">

          {items.map((item, index) => (
            <div
              key={index}
              className="category-item card-custom swiper-slide"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <img src={item.image} alt={item.title} />
              <h3><a href="#">{item.title}</a></h3>
              <p>{item.items} items</p>
            </div>
          ))}
        </div>


      </div>
      <div className="swiper-button-next swiper-navBtn custom-button-position swiper-button-next-cusom"></div>

      <div className="swiper-button-prev swiper-navBtn custom-button-position swiper-button-prev-custom"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default FeaturedCategories;
