'use client'
import React, { useEffect, useState } from 'react';

import $ from '@/utils/jquery'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AboutUsDesc from '@/components/about-us/desc/AboutUsDesc';
import WeProvide from '@/components/about-us/we-provide/WeProvide';
import { offercType } from '@/utils/types';
import OurPerformance from '@/components/about-us/our-performance/OurPerformance';
import StatsSection from '@/components/about-us/stats-section/StatsSection';
import TeamSection from '@/components/about-us/team-section/TeamSection';


const AboutUsPage = () => {
  const [images, setImages] = useState<string[] | null>(['/about-us/about-2.png', '/about-us/about-4.png', '/about-us/about-3.png', '/about-us/about-4.png']);
  const [serviceImage, setServiceImage] = useState<offercType[]>([
    {
      icon: 'services-image/icon-1.svg',
      title: "Best Prices & Offers",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    },
    {
      icon: 'services-image/icon-2.svg',
      title: "Wide Assortment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    },
    {
      icon: 'services-image/icon-3.svg',
      title: "Free Delivery",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    },
    {
      icon: 'services-image/icon-4.svg',
      title: "Easy Returns",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    },
    {
      icon: 'services-image/icon-5.svg',
      title: "100% Satisfaction",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    }, {
      icon: "services-image/icon-6.svg", // replace with actual file name
      title: "Great Daily Deal",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      linkText: "Read more"
    }]
  );

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
    }, 100);

    return () => clearTimeout(timeout); // Clean up on component unmount
  }, []);
  return (
    <>
      <AboutUsDesc images={images} />
      <WeProvide serviceImage={serviceImage} />
      <OurPerformance />
      <StatsSection />
      <TeamSection />

    </>
  )
}

export default AboutUsPage