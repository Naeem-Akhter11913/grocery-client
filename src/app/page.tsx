import FeaturedCategories from "@/components/featuredCategories";
import FeatureCart from "@/components/featuredCategories/featureCart";
import HeroSlider from "@/components/heroSlider";
import PopularProducts from "@/components/popularProducts";
import { LeftArrow, RightArrow } from "@/utils/Arrows";
import { CategoryItem } from "@/utils/types";

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

    </>
  );
}
