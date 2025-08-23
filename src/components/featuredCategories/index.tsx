

'use client'
import React, { RefObject, useEffect } from 'react';
import { CategoryItem } from "@/utils/types";
type Props = {
  items: CategoryItem[];
};
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './style.css'

const FeaturedCategories: React.FC<Props> = ({ items }) => {

  return (
    <div className="swiper-custom-wrapper px-3">

      <Swiper
        key={items.length}
        modules={[Navigation, Pagination]}
        grabCursor
        spaceBetween={10}
        loop
        slidesPerView={4}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        breakpoints={{
          0: { slidesPerView: 2 },
          520: { slidesPerView: 3 },
          950: { slidesPerView: 5 },
          1200: { slidesPerView: 6 }
        }}
        className="swapper-overfollow"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="category-item card-custom">
              <img src={item.image} alt={item.title} />
              <h3><a href="#">{item.title}</a></h3>
              <p>{item.items} items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination" />
    </div>
  )
}

export default FeaturedCategories