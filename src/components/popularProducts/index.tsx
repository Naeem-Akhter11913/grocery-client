'use client';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { ProductItem } from '@/utils/types';
import { CartIcon, Compare, WishList, View } from '@/utils/Arrows';
import { productsItems } from './productsArray';
let Isotope: any = null;

import Link from 'next/link';

const PopularProducts: React.FC<{ filterType: string }> = ({ filterType }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [items, setItems] = useState<ProductItem[] | []>([...productsItems]);
  const isotopRef = useRef<HTMLDivElement | null>(null);
  const [isotopInstance, setIsotopInstance] = useState<Isotope | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;
    if (isotopRef.current && typeof window !== 'undefined') {
      import('isotope-layout').then((module) => {
        if (isMounted) {
          Isotope = module.default;
          const isoInstance = new Isotope(isotopRef.current, {
            itemSelector: ".grid-item",
            // layoutMode: "fitRows",
            // percentPosition: true,
          });
          setIsotopInstance(isoInstance);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  


  useEffect(() => {
    if (isotopInstance) {
      filterType === "*"
        ? isotopInstance.arrange({ filter: "*" })
        : isotopInstance.arrange({ filter: `.${filterType}` });
    }


  }, [filterType, isotopInstance])
  
  return (
    <div className="grid" ref={isotopRef}>
      {items.map((item, index) => (
        <div key={index} className={`grid-item ${item.type} `}>
          <div
            className={`card shadow-sm position-relative custom-cart-hover-effect position-relative-custom`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            // style={{marginBlock:10}}
          >
            <span className="custom-badge bg-danger position-absolute top-0 start-0">
              {item.tag}
            </span>

            <div className="product-image-container mt-5">
              <img
                src={hoveredIndex === index ? item.backImage : item.frontImage}
                alt={item.desc}
                width={200}
                height={200}
                className="product-image"
              />
              {hoveredIndex === index && (
                <div className='custom-tootip-style'>
                  <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <WishList />
                  </button>
                  <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"><Compare /></button>
                  <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <View />
                  </button>
                </div>
              )}
            </div>

            <div className="card-body">
              <p className="text-muted text-muted-custom mb-1">{item.type}</p>
              <h5 className="card-title"> <Link href={`/product-details/${item.type}`} className="text-decoration-none" key={index}>{item.desc}</Link></h5>

              <div className="mb-2">
                <span className="text-warning">{'★'.repeat(item.stars)}</span>
                <span className="text-muted ms-1">({item.stars})</span>
              </div>

              <p className="mb-2">
                By <span className="text-success custom-brand">{item.brand}</span>
              </p>

              <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
                <div>
                  {item.price.currency}{item.price.current.toFixed(2)}{' '}
                  <small className="text-muted text-decoration-line-through">
                    {item.price.currency}{item.price.original.toFixed(2)}
                  </small>
                </div>
                <button className="btn btn-success custom-button-css">
                  <CartIcon /> Add
                </button>
              </h5>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
