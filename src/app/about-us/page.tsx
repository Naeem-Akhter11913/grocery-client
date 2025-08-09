'use client'
import React, { useState } from 'react';

import AboutUsDesc from '@/components/about-us/desc/AboutUsDesc';
const WeProvide = dynamic(() => import('@/components/about-us/we-provide/WeProvide'), { ssr: false });
import { offercType } from '@/utils/types';
import OurPerformance from '@/components/about-us/our-performance/OurPerformance';
import StatsSection from '@/components/about-us/stats-section/StatsSection';
import TeamSection from '@/components/about-us/team-section/TeamSection';
import dynamic from 'next/dynamic';


const AboutUsPage = () => {
  const [images, setImages] = useState<string[] | null>([ '/about-us/about-4.png','/about-us/about-2.png', '/about-us/about-4.png', '/about-us/about-3.png', '/about-us/about-4.png','/about-us/about-4.png', '/about-us/about-4.png']);
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