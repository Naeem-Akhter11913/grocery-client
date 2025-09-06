// 'use client'
// import React, { useEffect, useState } from 'react';
// import './BrowserAllCategories.css'

// const categories = [
//   { name: "Milks and Dairies", icon: "category-1.svg" },
//   { name: "Wines & Drinks", icon: "category-2.svg" },
//   { name: "Clothing & beauty", icon: "category-3.svg" },
//   { name: "Fresh Seafood", icon: "category-4.svg" },
//   { name: "Pet Foods & Toy", icon: "category-5.svg" },
//   { name: "Fast food", icon: "category-6.svg" },
//   { name: "Baking material", icon: "category-7.svg" },
//   { name: "Vegetables", icon: "category-8.svg" },
//   { name: "Fresh Fruit", icon: "category-9.svg" },
//   { name: "Bread and Juice", icon: "category-10.svg" },
//   { name: "Milks and Dairies", icon: "icon-1.svg" },
//   { name: "Wines and drinks", icon: "icon-2.svg" },
//   { name: "Clothings and Beauty", icon: "icon-3.svg" },
//   { name: "Fresh Seafood", icon: "icon-4.svg" },
// ];

// interface itemsType { name: string; icon: string }

// const Browser: React.FC<{ showCategory: boolean }> = ({ showCategory }) => {
//   console.log(showCategory)

//   const [catItems, setCatItems] = useState<itemsType[]>([...categories].slice(0, 10));
//   const [isMore, setIsMore] = useState<boolean>(false);

//   const handleClick = (see: string) => {
//     if (see === 'more') {
//       setIsMore(true);
//       setCatItems([...categories])
//     } else {
//       setIsMore(false);
//       setCatItems([...categories].slice(0, 10))
//     }
//   }

//   return (
//     <div className={`tooltip-box container py-1 ${showCategory ? '':'show-categories'}`}>
//       <div className="row g-1">
//         {catItems.map(({ name, icon }, ind) => {
//           return <div className="col-md-6" key={ind}>
//             <div className="category-card">
//               <img src={`all-browsers/${icon}`} alt="" width="35" />
//               <span>{name}</span>
//             </div>
//           </div>
//         })}
//       </div>
//       {!isMore ? <div className="show-more" onClick={() => handleClick('more')}>
//         <span className="fs-4">+</span> Show more...
//       </div> :
//         <div className="show-more" onClick={() => handleClick('less')}>
//           <span className="fs-4">-</span> Show less...
//         </div>}
//     </div>
//   );
// };

// const BrowserAllCategories= React.memo(Browser);
// export default BrowserAllCategories;

'use client'
import React, { useRef, useState, useEffect } from 'react';
// import './BrowserAllCategories.css';

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

const Browser: React.FC<{ showCategory: boolean }> = ({ showCategory }) => {
  const [isMore, setIsMore] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle height animation
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      container.style.height = isMore ? `${scrollHeight}px` : `250px`; // 250px fits ~10 items
    }
  }, [isMore]);

  const displayedItems = isMore ? categories : categories.slice(0, 10);

  return (
    <div className={`tooltip-box container py-1 ${showCategory ? '' : 'show-categories'}`}>
      <div
        className="category-container"
        ref={containerRef}
        style={{ height: '250px' }}
      >
        <div className="row g-1">
          {displayedItems.map(({ name, icon }, ind) => (
            <div className="col-md-6" key={ind}>
              <div className="category-card">
                <img src={`all-browsers/${icon}`} alt="" width="35" />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="show-more" onClick={() => setIsMore(!isMore)}>
        <span className="fs-4">{isMore ? '-' : '+'}</span> {isMore ? 'Show less...' : 'Show more...'}
      </div>
    </div>
  );
};

const BrowserAllCategories = React.memo(Browser);
export default BrowserAllCategories;
