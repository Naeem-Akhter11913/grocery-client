'use client'
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react';
import Loader from '@/components/loader/loader';

const AboutUsDesc = dynamic(() => import('@/components/about-us/desc/AboutUsDesc'), { ssr: false, loading: () => <Loader /> });
const WeProvide = dynamic(() => import('@/components/about-us/we-provide/WeProvide'), { ssr: false });
import { offercType } from '@/utils/types';
import { serviceArray, sliderImage } from './aboutsCpntents';
const OurPerformance = dynamic(() => import('@/components/about-us/our-performance/OurPerformance'), { ssr: false, loading: () => <Loader /> });
const StatsSection = dynamic(() => import('@/components/about-us/stats-section/StatsSection'), { ssr: false, loading: () => <Loader /> });
const TeamSection = dynamic(() => import('@/components/about-us/team-section/TeamSection'), { ssr: false, loading: () => <Loader /> });


const AboutUsPage = () => {
  const [images, setImages] = useState<string[] | null>([...sliderImage]);
  const [serviceProvide, setServiceProvide] = useState<offercType[]>([...serviceArray]);



  return (
    <Suspense fallback={<Loader />}>
      <AboutUsDesc images={images} />
      <WeProvide serviceProvide={serviceProvide} />
      <OurPerformance />
      <StatsSection />
      <TeamSection />
    </Suspense>
  )
}

export default AboutUsPage