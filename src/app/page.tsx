'use client'
// import DailyBestSells from "@/components/dailyBestSells";
const DailyBestSells = dynamic(() => import("@/components/dailyBestSells"), {
  ssr: false, // This disables server-side rendering
});
import dynamic from "next/dynamic";
import DealsOfTheDay from "@/components/dealsOfTheDay";
import FeaturedCategories from "@/components/featuredCategories";
import FeatureCart from "@/components/featuredCategories/featureCart";
import HeroSlider from "@/components/heroSlider";
import PopularProducts from "@/components/popularProducts";
import { ChevronRight, LeftArrow, RightArrow } from "@/utils/Arrows";
import { CategoryItem } from "@/utils/types";
import TrendingProducts from "@/components/trending";
import SliderComponent from "@/components/sliderComponent";
import ServiceProvide from "@/components/service-provide/ServiceProvide";

const items: CategoryItem[] = [
  { image: '/feature-category/cat-1.png', title: 'Mango Madness', items: 12 },
  { image: '/feature-category/cat-2.png', title: 'Banana Bonanza', items: 5 },
  { image: '/feature-category/cat-3.png', title: 'Orange Zest', items: 17 },
  { image: '/feature-category/cat-4.png', title: 'Pineapple Paradise', items: 8 },
  { image: '/feature-category/cat-5.png', title: 'Grapes Galore', items: 3 },
  { image: '/feature-category/cat-9.png', title: 'Cherry Cheer', items: 20 },
  { image: '/feature-category/cat-11.png', title: 'Blueberry Burst', items: 16 },
  { image: '/feature-category/cat-12.png', title: 'Peach Perfection', items: 11 },
  { image: '/feature-category/cat-14.png', title: 'Plum Pleasure', items: 18 },
  { image: '/feature-category/cat-13.png', title: 'Apricot Aroma', items: 6 },
  { image: '/feature-category/cat-14.png', title: 'Plum Pleasure', items: 18 },
  { image: '/feature-category/cat-9.png', title: 'Cherry Cheer', items: 20 },
  { image: '/feature-category/cat-15.png', title: 'Watermelon Wave', items: 4 },
  { image: '/feature-category/cat-14.png', title: 'Plum Pleasure', items: 18 },
];

export default function Home() {

  // if (typeof window !== 'undefined') {
  //   return;
  // }

  return (
    <>
      <HeroSlider />
      <>
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
          <div className="d-flex gap-2 ">
            <div className="d-flex justify-content-center align-items-center p-1 rounded-5 custom-colored">
              <LeftArrow />
            </div>
            <div className="d-flex justify-content-center align-items-center p-1 rounded-5 custom-colored">
              <RightArrow />
            </div>
          </div>
        </div>

        <FeaturedCategories items={items} />
        <FeatureCart />
      </>

      <>
        <div className="d-flex justify-content-between align-items-center  mx-4 my-4">
          <h3>Popular Products</h3>
          <ul className="d-flex justify-content-between align-items-center gap-4 list-unstyled popular-custom-style">
            <li className="">
              All
            </li>
            <li className="">
              Milks &amp; Dairies
            </li>
            <li className="">
              Coffes &amp; Teas
            </li>
            <li className="">
              Pet Foods
            </li>
            <li className="">
              Meats
            </li>
            <li className="">
              Vegetables
            </li>
            <li className="">
              Fruits
            </li>
          </ul>
        </div>

        <PopularProducts />
      </>

      <>
        <div className="d-flex justify-content-between mx-3 my-3">
          <h2>Daily Best Sells</h2>
          <ul className="d-flex gap-3 list-unstyled">
            <li>Featured</li>
            <li>Popular</li>
            <li>New added</li>
          </ul>
        </div>
        <DailyBestSells />
      </>

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
    </>
  );
}
