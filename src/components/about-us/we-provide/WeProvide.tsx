'use client'
import React, { FC, useEffect } from 'react';
import './style.css';
import $ from '@/utils/jquery'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { offercType } from '@/utils/types';
import Link from 'next/link';

type Props = {
    serviceImage: offercType[]
}
const WeProvide: FC<Props> = ({ serviceImage }) => {
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
        <>
            <div className='text-center'>
                <h1>What We Provide?</h1>
                <img src="/about-us/wave.png" alt="" />
            </div>
            <div className=" container d-flex flex-wrap gap-4 justify-content-center">
                {serviceImage.map((item, index) => (
                    <div className={`p-4 bg-white rounded-4 shadow-sm card`} key={index}>
                        <div className="text-center mb-3">
                            <img
                                src={item.icon}
                                alt="Best Prices Icon"
                                width={100}
                                height={100}
                            />
                        </div>
                        <h5 className="text-center fw-bold text-dark">{item.title}</h5>
                        <p className="text-center text-muted">{item.description}</p>
                        <Link href={'#'} className="text-center text-success mt-3 mb-0 text-decoration-none" style={{ cursor: 'pointer' }}>
                            {item.linkText}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeProvide