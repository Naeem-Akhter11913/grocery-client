
'use client'

import { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/loader";
import { useParams } from "next/navigation";
import './style.css'
import { productArray } from "../productArray";

const CategoryCard = dynamic(() => import('@/components/categoryCard'), { ssr: false, loading: () => <Loader /> });
const FillPrice = dynamic(() => import('@/components/fillPrice'), { ssr: false, loading: () => <Loader /> });
const NewProducts = dynamic(() => import('@/components/newProducts'), { ssr: false, loading: () => <Loader /> });
const ProductDescription = dynamic(() => import('@/components/productDescription'), { ssr: false, loading: () => <Loader /> });
const ProductInfo = dynamic(() => import('@/components/productInfo/ProductInfo'), { ssr: false, loading: () => <Loader /> });
const ProductReview = dynamic(() => import('@/components/productReviews'), { ssr: false, loading: () => <Loader /> });
const RelatedProducts = dynamic(() => import('@/components/relatedProducts'), { ssr: false, loading: () => <Loader /> });
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'), { ssr: false, loading: () => <Loader /> });
const ShowAllProducts = dynamic(() => import('@/components/showAllProducts'), { ssr: false, loading: () => <Loader /> });
const SideBanner = dynamic(() => import('@/components/sideBanner'), { ssr: false, loading: () => <Loader /> });
const SliderComponent = dynamic(() => import('@/components/sliderComponent'), { ssr: false, loading: () => <Loader /> });
const AdditionalInfo = dynamic(() => import('@/components/specsTable'), { ssr: false, loading: () => <Loader /> });
const VendorDetails = dynamic(() => import('@/components/vendor'), { ssr: false, loading: () => <Loader /> });



const PurchageDetails = () => {
  const [tabType, setTabType] = useState<string>('description');
  const handleTabs = (parameter: string) => {
    setTabType(parameter)
  }
  const [previwImage,setPreviewImage] = useState([...productArray])

  return (
    <div className="purchase-details px-3">
      <div className="purchase-layout">
        {/* LEFT CONTENT */}
        <div className="purchase-main">
          <div className="product-overview">
            <ShowAllProducts productArray={previwImage} />
            <ProductInfo />
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <div className="tabs-header">
              <button
                type="button"
                className={`tab-btn ${tabType === 'description' ? 'active' : ''}`}
                onClick={() => handleTabs('description')}
              >
                Description
              </button>
              <button
                type="button"
                className={`tab-btn ${tabType === 'additional_info' ? 'active' : ''}`}
                onClick={() => handleTabs('additional_info')}
              >
                Additional info
              </button>
              <button
                type="button"
                className={`tab-btn ${tabType === 'vendor' ? 'active' : ''}`}
                onClick={() => handleTabs('vendor')}
              >
                Vendor
              </button>
              <button
                type="button"
                className={`tab-btn ${tabType === 'review' ? 'active' : ''}`}
                onClick={() => handleTabs('review')}
              >
                Review(3)
              </button>
            </div>

            <div className="tabs-content">
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

        {/* RIGHT CONTENT */}
        <div className="purchase-sidebar">
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
