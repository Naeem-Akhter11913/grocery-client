'use client'
import React, { useEffect, useState } from 'react';
import './BrowserAllCategories.css'

const categories = [
  { name: "Milks and Dairies", icon: "category-1.svg" },
  { name: "Wines & Drinks", icon: "category-2.svg" },
  { name: "Clothing & beauty", icon: "category-3.svg" },
  { name: "Fresh Seafood", icon: "category-4.svg" },
  { name: "Pet Foods & Toy", icon: "category-5.svg" },
  { name: "Fast food", icon: "category-6.svg" },
  { name: "Baking material", icon: "category-7.svg" },
  { name: "Vegetables", icon: "category-8.svg" },
  { name: "Fresh Fruit", icon: "category-9.svg" },
  { name: "Bread and Juice", icon: "category-10.svg" },
  { name: "Milks and Dairies", icon: "icon-1.svg" },
  { name: "Wines and drinks", icon: "icon-2.svg" },
  { name: "Clothings and Beauty", icon: "icon-3.svg" },
  { name: "Fresh Seafood", icon: "icon-4.svg" },
];

interface itemsType { name: string; icon: string }

const BrowserAllCategories = () => {

  const [catItems, setCatItems] = useState<itemsType[]>([...categories].slice(0, 10));
  const [isMore, setIsMore] = useState<boolean>(false)

  const handleClick = (see: string) => {
    if (see === 'more') {
      setIsMore(true);
      setCatItems([...categories])
    } else {
      setIsMore(false);
      setCatItems([...categories].slice(0, 10))
    }
  }

  return (
    <div className='tooltip-box container py-1 w-100'>
      <div className="row g-1">
        {catItems.map(({ name, icon }, ind) => {
          return <div className="col-md-6" key={ind}>
            <div className="category-card">
              <img src={`all-browsers/${icon}`} alt="" width="35" />
              <span>{name}</span>
            </div>
          </div>
        })}
      </div>
      {!isMore ? <div className="show-more" onClick={() => handleClick('more')}>
        <span className="fs-4">+</span> Show more...
      </div> :
        <div className="show-more" onClick={() => handleClick('less')}>
          <span className="fs-4">-</span> Show less...
        </div>}
    </div>
  );
};

export default BrowserAllCategories;
