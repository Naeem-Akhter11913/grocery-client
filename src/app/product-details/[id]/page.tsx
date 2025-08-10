'use client'

import dynamic from "next/dynamic";
import Loader from "@/components/loader/loader";
import { useParams } from "next/navigation";
import { useState } from "react";

const CategoryCard = dynamic(() => import('@/components/categoryCard'),{ssr:false,loading: () => <Loader/>});
const FillPrice = dynamic(() => import('@/components/fillPrice'),{ssr:false,loading: () => <Loader/>});
const NewProducts = dynamic(() => import('@/components/newProducts'),{ssr:false,loading: () => <Loader/>});
const ProductDescription = dynamic(() => import('@/components/productDescription'),{ssr:false,loading: () => <Loader/>});
const ProductInfo = dynamic(() => import('@/components/productInfo/ProductInfo'),{ssr:false,loading: () => <Loader/>});
const ProductReview = dynamic(() => import('@/components/productReviews'),{ssr:false,loading: () => <Loader/>});
const RelatedProducts = dynamic(() => import('@/components/relatedProducts'),{ssr:false,loading: () => <Loader/>});
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'),{ssr:false,loading: () => <Loader/>});
const ShowAllProducts = dynamic(() => import('@/components/showAllProducts'),{ssr:false,loading: () => <Loader/>});
const SideBanner = dynamic(() => import('@/components/sideBanner'),{ssr:false,loading: () => <Loader/>});
const SliderComponent = dynamic(() => import('@/components/sliderComponent'),{ssr:false,loading: () => <Loader/>});
const AdditionalInfo = dynamic(() => import('@/components/specsTable'),{ssr:false,loading: () => <Loader/>});
const VendorDetails = dynamic(() => import('@/components/vendor'),{ssr:false,loading: () => <Loader/>});

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