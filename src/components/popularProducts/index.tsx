'use client';
import React, { RefObject, useState } from 'react';
import { ProductItem } from '@/utils/types';
import { CartIcon, Compare, WishList, View } from '@/utils/Arrows';
import './style.css';

import Link from 'next/link';

type prpularProductProbsTyep = {
  items: ProductItem[];
}

const PopularProducts: React.FC<prpularProductProbsTyep> = ({ items }) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
      {items.slice(0,12).map((item, index) => (
        <div
          key={index}
          className={`card shadow-sm position-relative custom-cart-hover-effect position-relative-custom`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
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
            <h5 className="card-title"> <Link href={`/product-details/${item.type}`} className="text-decoration-none" key={index}>{item.desc.length > 15
              ? `${item.desc.slice(0, 15)}...`
              : item.desc}</Link></h5>

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
      ))}
    </div>
  );
};

export default PopularProducts;
