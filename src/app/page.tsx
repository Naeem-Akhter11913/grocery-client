'use client'
import DailyBestSells from "@/components/dailyBestSells";
// const DailyBestSells = dynamic(() => import("@/components/dailyBestSells"), {
//   ssr: false, // This disables server-side rendering
// });
// import dynamic from "next/dynamic";
import DealsOfTheDay from "@/components/dealsOfTheDay";
import FeaturedCategories from "@/components/featuredCategories";
import FeatureCart from "@/components/featuredCategories/featureCart";
import HeroSlider from "@/components/heroSlider";
import PopularProducts from "@/components/popularProducts";
// import { ChevronRight, LeftArrow, RightArrow } from "@/utils/Arrows";
import { CategoryItem } from "@/utils/types";
// import TrendingProducts from "@/components/trending";
// import SliderComponent from "@/components/sliderComponent";
// import ServiceProvide from "@/components/service-provide/ServiceProvide";
import { useState } from "react";
import { homeItems } from "./items";

export default function Home() {

  const [items, setItems] = useState<CategoryItem[]>([...homeItems]);
  const [filterType,setFilteType] = useState('*')

  function handleFilter(filterType: string){
    setFilteType(filterType);
  }

  return (
    <>
      <HeroSlider />
      <div className="position-relative">
        <div className="d-flex justify-content-between align-items-center mx-4 my-4">
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
            <h3 className="mb-0">Featured Categories</h3>
            <ul className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-0 list-unstyled">
              <li><a className="nav-link px-2" href="shop-grid-right.html">Cake &amp; Milk</a></li>
              <li><a className="nav-link px-2" href="shop-grid-right.html">Coffes &amp; Teas</a></li>
              <li><a className="nav-link px-2 active" href="shop-grid-right.html">Pet Foods</a></li>
              <li><a className="nav-link px-2" href="shop-grid-right.html">Vegetables</a></li>
            </ul>
          </div>
        </div>

        <FeaturedCategories items={items} />
      </div>
      <FeatureCart />

      <>
        <div className="d-flex justify-content-between align-items-center  mx-4 my-4">
          <h3>Popular Products</h3>
          <ul className="d-flex justify-content-between align-items-center gap-4 list-unstyled popular-custom-style">
            <li className="" onClick={() => handleFilter('*')}>
              All
            </li>
            <li className="" onClick={() => handleFilter('Milks_Dairies')}>
              Milks &amp; Dairies
            </li>
            <li className="" onClick={() => handleFilter('Coffees_Teas')}>
              Coffes &amp; Teas
            </li>
            <li className="" onClick={() => handleFilter('Pet_Foods')}>
              Pet Foods
            </li>
            <li className="" onClick={() => handleFilter('Meats')}>
              Meats
            </li>
            <li className="" onClick={() => handleFilter('Vegetables')}>
              Vegetables
            </li>
            <li className="" onClick={() => handleFilter('Fruits')}>
              Fruits
            </li>
          </ul>
        </div>

        <PopularProducts filterType={filterType} />
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
  {/* 
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
      </> */}
    </>
  );
}
