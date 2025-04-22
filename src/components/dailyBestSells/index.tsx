'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
import $ from '@/utils/jquery'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProductItem } from '@/utils/types';
import { dailySelsItems } from './components/json';
import DailyBestSellsCarts from './components/DailyBestSellsCarts';
import { RightArrow } from '@/utils/Arrows';

const DailyBestSells = () => {

  const [items, setItems] = useState<ProductItem[] | []>([...dailySelsItems])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if ($('.slick-carousel').length > 0) {
        $('.slick-carousel').slick({
          slidesToShow: 3,
          dots: false,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          cssEase: 'ease-in-out',
          infinite: true
        });
      }
    }, 0);

    return () => clearTimeout(timeout); // Clean up on component unmount
  }, []);


  return (
    <div className='row mx-2 mt-3' style={{ height: '479px' }}>
      <div className='col-3'>
        <div className='cover-bg-image p-2'>
          <div className='daily-best-sale-text d-flex gap-5 flex-column mt-5'>
            <h1>Bring nature into your home</h1>
            <button type='button' className='mt-5'>Shop Now <span><RightArrow /></span></button>
          </div>
        </div>
      </div>


      <div className="slick-carousel d-flex col-9">
        {items.map((item, index) => (<DailyBestSellsCarts key={index} item={item} index={index} />))}
      </div>
    </div>
  )
}

export default DailyBestSells