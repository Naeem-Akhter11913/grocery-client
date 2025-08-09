'use client'
import React, { useEffect, useState } from 'react'
import { dailySelsItems } from './json'
import { ProductItem } from '@/utils/types'
import './ss.css'
import DailyBestSellsCarts from './DailyBestSellsCarts'

const DailyBestSellsCardSlider = () => {
    const [items] = useState<ProductItem[]>([...dailySelsItems]);
 
    useEffect(() => {
        // if (typeof window !== 'undefined') return ;
        const interval = setTimeout(() => {
            // @ts-ignore
            if (typeof window !== 'undefined' && window.Swiper) {
                // @ts-ignore
                new window.Swiper('.slide-content-custom', {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    loop: true,
                    centeredSlides: true,
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        520: {
                            slidesPerView: 2,
                        },
                        950: {
                            slidesPerView: 3,
                        },
                    },
                });
            }
        }, 100); // Delay initialization to ensure DOM is ready

        return () => clearTimeout(interval);
    }, []);

    return (
        <div className="slide-container-custom swiper">

            <div className="slide-content-custom">
                <div className="card-wrapper swiper-wrapper">
                    {items.map((item, index) => (
                        <div className="card-custom swiper-slide" key={index}>
                            <DailyBestSellsCarts item={item} index={index} />
                        </div>
                    ))}
                </div>


            </div>
            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default DailyBestSellsCardSlider;
