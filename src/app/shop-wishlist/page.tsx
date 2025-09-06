'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader/loader'
const GridTable = dynamic(() => import('./components/GridTable'),{ssr:false,loading:() => <Loader />})
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'), { ssr: false, loading: () => <Loader /> })
const SliderComponent = dynamic(() => import('@/components/sliderComponent'), { ssr: false, loading: () => <Loader /> });



function WishLists() {
  
  return (
    <>
      <div style={{ height: 400, width: '100%' }} className='mx-3'>
        <GridTable />
      </div>

      <div className='mt-3'>
        <SliderComponent />
      </div>
      <div className='mt-3'>
        <ServiceProvide />
      </div>
    </>
  )
}

export default WishLists;
