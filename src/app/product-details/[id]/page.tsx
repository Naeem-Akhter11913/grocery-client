'use client'
import CategoryCard from '@/components/categoryCard';
import FillPrice from '@/components/fillPrice';
import NewProducts from '@/components/newProducts';
import ProductDescription from '@/components/productDescription';
import ProductInfo from '@/components/productInfo/ProductInfo';
import ProductReview from '@/components/productReviews';
import RelatedProducts from '@/components/relatedProducts';
import ServiceProvide from '@/components/service-provide/ServiceProvide';
import ShowAllProducts from '@/components/showAllProducts';
import SideBanner from '@/components/sideBanner';
import SliderComponent from '@/components/sliderComponent';
import AdditionalInfo from '@/components/specsTable';
import VendorDetails from '@/components/vendor';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const imgs = [
  '/trending_product/thumbnail-1.jpg',
  '/trending_product/thumbnail-2.jpg',
  '/trending_product/thumbnail-3.jpg',
  '/trending_product/thumbnail-4.jpg',
  '/trending_product/thumbnail-5.jpg',
  '/trending_product/thumbnail-6.jpg',
  '/trending_product/thumbnail-7.jpg',
  '/trending_product/thumbnail-8.jpg',
  '/trending_product/thumbnail-9.jpg',
  '/trending_product/thumbnail-10.jpg',
  '/trending_product/thumbnail-11.jpg',
  '/trending_product/thumbnail-12.jpg',
]

const PurchageDetails = () => {
  const params = useParams();
  const [tabType, setTabType] = useState<string>('description');
  const handleTabs = (parameter: string) => {
    setTabType(parameter)
  }

  return (
    <div>
      <div className='row mx-5 my-3'>
        <div className='col-9'>
          <div className='d-flex gap-3'>
            <ShowAllProducts productArray={imgs} />
            <ProductInfo />
          </div>

          <div className='shadow-sm mt-4'>
            <div>
              <button type='button' className='btn border-0 ' onClick={() => handleTabs('description')}>Description</button>
              <button type='button' className='btn border-0' onClick={() => handleTabs('additional_info')}>Additional info</button>
              <button type='button' className='btn border-0' onClick={() => handleTabs('vendor')}>Vendor</button>
              <button type='button' className='btn border-0' onClick={() => handleTabs('review')}>Review(3)</button>
            </div>
            <div className=''>
              {tabType === 'description' ? (
                <ProductDescription />
              ) : tabType === 'additional_info' ? (
                <AdditionalInfo />
              ) : tabType === 'vendor' ? (
                <VendorDetails />
              ) : tabType === 'review' ? (
                <ProductReview />
              ) : (
                <div>Invalid tab</div>
              )}

            </div>
          </div>
          <RelatedProducts />

        </div>

        <div className='col-3 d-flex flex-column gap-3'>
          <CategoryCard />
          <FillPrice />
          <NewProducts />
          <SideBanner />
        </div>
      </div>
      <SliderComponent />
      <ServiceProvide />
    </div>
  )
}

export default PurchageDetails