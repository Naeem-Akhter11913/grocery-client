'use client'

import React, { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { productsItems } from "@/components/popularProducts/productsArray";
import { homeItems } from "./items";
import { ChevronRight } from "@/utils/Arrows";
import { CategoryItem, ProductItem } from "@/utils/types";
import Loader from "@/components/loader/loader";
import { useMediaQuery } from "@mui/material";
let Isotope: any = null;

const PaginationComponenet = dynamic(() => import("@/components/pagination/Pagination"), { ssr: false, loading: () => <Loader /> });

const DailyBestSells = dynamic(() => import('@/components/dailyBestSells'), {
  ssr: false,
  loading: () => <Loader />, // Show loader while loading
});
const DealsOfTheDay = dynamic(() => import('@/components/dealsOfTheDay'), {
  loading: () => <Loader />,
});
const FeaturedCategories = dynamic(() => import('@/components/featuredCategories'), {
  loading: () => <Loader />,
});
const FeatureCart = dynamic(() => import('@/components/featuredCategories/featureCart'), {
  loading: () => <Loader />,
});
const HeroSlider = dynamic(() => import('@/components/heroSlider'), {
  loading: () => <Loader />,
});
const PopularProducts = dynamic(() => import('@/components/popularProducts'), {
  loading: () => <Loader />,
});
const TrendingProducts = dynamic(() => import('@/components/trending'), {
  loading: () => <Loader />,
});
const SliderComponent = dynamic(() => import('@/components/sliderComponent'), {
  loading: () => <Loader />,
});
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'), {
  loading: () => <Loader />,
});


export default function Home() {

  const [items, setItems] = useState<CategoryItem[]>([...homeItems]);
  const [filterKeys, setFilterKeys] = useState<string[]>([]);


  const [popularProduct, setPopularProduct] = useState<ProductItem[] | []>([...productsItems]);



  useEffect(() => {
    if (productsItems.length) {
      setFilterKeys(Array.from(new Set(productsItems.map(({ type }) => type))));
    }
  }, [])


  return (
    <Suspense fallback={<Loader />}>
      <HeroSlider />

      <div className="position-relative">
        <div className="d-flex  mx-4 my-4 featured-categories-container">

          <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5 ">
            <h3 className="mb-0">Featured Categories</h3>
            <ul className="d-flex justify-content-center align-items-center gap-3 mb-0 list-unstyled flex-nowrap ">
              <li><a className="nav-link text-nowrap" href="#">Cake &amp; Milk</a></li>
              <li><a className="nav-link text-nowrap" href="#">Coffes &amp; Teas</a></li>
              <li><a className="nav-link active text-nowrap" href="#">Pet Foods</a></li>
              <li><a className="nav-link text-nowrap" href="#">Vegetables</a></li>
            </ul>
          </div>

          <div className="d-flex justify-content-between gap-3 align-items-center custom-swipper-button">
            <div className="custom-prev">
              <i className="bi bi-chevron-left" style={{ fontSize: 27 }} />
            </div>
            <div className="custom-next">
              <i className="bi bi-chevron-right " style={{ fontSize: 27 }} />
            </div>
          </div>
        </div>

        <FeaturedCategories items={items} />
      </div>
      <FeatureCart />

      <>
        <div className="popular-products-container px-3 my-4">
          <h3>Popular Products</h3>
          <ul className="d-flex justify-content-between align-items-center gap-4 list-unstyled popular-custom-style">
            <li className="" /*onClick={() => handleFilter('*')}*/>
              All
            </li>
            {filterKeys.map((keys) => <li key={keys} className="" /*onClick={() => handleFilter(keys)} */>
              {keys}
            </li>)}
          </ul>
        </div>

        <PopularProducts items={popularProduct} />
        <PaginationComponenet />
      </>

      <div className="mt-3">
        <div className="d-flex justify-content-between mx-3 my-3">
          <h2>Daily Best Sells</h2>
          <ul className="d-flex gap-3 list-unstyled">
            <li>Featured</li>
            <li>Popular</li>
            <li>New added</li>
          </ul>
        </div>
        <DailyBestSells />
      </div>

      <>
        <div className="d-flex justify-content-between mx-3 my-3">
          <h2>Deals Of The Day</h2>
          <p>All See <ChevronRight /></p>
        </div>
        <DealsOfTheDay />
      </>
      <>
        <TrendingProducts />
      </>

      <>
        <SliderComponent />
      </>

      <>
        <ServiceProvide />
      </>
    </Suspense>
  );
}
