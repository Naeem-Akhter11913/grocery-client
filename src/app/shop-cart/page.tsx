'use client'
import React from 'react'
import Loader from '@/components/loader/loader'
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { Rating } from '@mui/material';


const YourCartTable = dynamic(() => import('./components/YourCartTable'), { ssr: false, loading: () => <Loader /> });
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'), { ssr: false, loading: () => <Loader /> });
const SliderComponent = dynamic(() => import('@/components/sliderComponent'), { ssr: false, loading: () => <Loader /> });
const CheckoutCarts = dynamic(() => import('./components/CheckoutCart'), { ssr: false, loading: () => <Loader /> });
const ShippingAndCoupon = dynamic(() => import('./components/ShippingAndCoupon'), { ssr: false, loading: () => <Loader /> });

const ShopCartPage = () => {
  return (
    <>
      <div className="px-3"><h3>Your Cart</h3></div>
      <div className="row px-3">
        <div className="col-12 col-lg-8 order-1 order-lg-1 d-flex justify-content-between align-items-center mb-3">
          <p>There are 3 products in your cart</p>
          <button type="button" className="btn btn-outline-success"> <i className="bi bi-trash3"></i> Clear Cart</button>
        </div>
        <div className="col-12 col-lg-8 order-1 order-lg-1" style={{height:500}}>
          <YourCartTable />
        </div>

        <div className="col-12 col-lg-4 order-3 order-lg-2">
          <CheckoutCarts />
        </div>

        <div className="col-12 col-lg-8 order-2 order-lg-3 mt-3 mt-lg-0">
          <ShippingAndCoupon />
        </div>
      </div>

      <SliderComponent />
      <ServiceProvide />
    </>


  )
}

export default ShopCartPage


// https://restcountries.com/v3.1/all?fields=name,flags