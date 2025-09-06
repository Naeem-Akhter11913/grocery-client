'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dailySelsItems } from './json';
import { ProductItem } from '@/utils/types';
import './dailySellCard.css';
import { CartIcon, Compare, View, WishList } from '@/utils/Arrows';
import Image from 'next/image';
import Link from 'next/link';

const DailyBestSellsCardSlider = () => {
    const [items] = useState<ProductItem[]>([...dailySelsItems]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides
            grabCursor
            spaceBetween={50}
            loop
            slidesPerView={4}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            breakpoints={{
                0: { slidesPerView: 1 },
                520: { slidesPerView: Math.min(items.length, 2) },
                950: { slidesPerView: Math.min(items.length, 2) },
                1200: { slidesPerView: Math.min(items.length, 4) }
            }}
            className="slide-content-custom"
        > 
            {items.map((item, index) => (
                <SwiperSlide key={index} className='swipper-slide-css cart-style'>
                    <div
                        className={`card shadow-sm position-relative custom-cart-hover-effect position-relative-custom`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span className="custom-badge bg-danger position-absolute top-0 start-0">
                            {item.tag}
                        </span>

                        <div className="product-image-container mt-5">
                            <Image
                                src={hoveredIndex === index ? item.backImage : item.frontImage}
                                alt={item.desc}
                                width={200}
                                height={200}
                                className="product-image"
                            />
                            {hoveredIndex === index && (
                                <div className='custom-tootip-style'>
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                        <WishList />
                                    </button>
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"><Compare /></button>
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                        <View />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="card-body">
                            <p className="text-muted text-muted-custom mb-1">{item.type}</p>
                            <h5 className="card-title"> <Link href={`/product-details/${item.type}`} className="text-decoration-none" key={index}>{item.desc.length > 15
                                ? `${item.desc.slice(0, 15)}...`
                                : item.desc}</Link></h5>

                            <div className="mb-2">
                                <span className="text-warning">{'★'.repeat(item.stars)}</span>
                                <span className="text-muted ms-1">({item.stars})</span>
                            </div>

                            <p className="mb-2">
                                By <span className="text-success custom-brand">{item.brand}</span>
                            </p>

                            <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
                                <div>
                                    {item.price.currency}{item.price.current.toFixed(2)}{' '}
                                    <small className="text-muted text-decoration-line-through">
                                        {item.price.currency}{item.price.original.toFixed(2)}
                                    </small>
                                </div>
                                <button className="btn btn-success custom-button-css">
                                    <CartIcon /> Add
                                </button>
                            </h5>


                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DailyBestSellsCardSlider;
