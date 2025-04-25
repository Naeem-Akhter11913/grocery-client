'use client';
import React from 'react';
import Image from 'next/image';
import './style.css'

const categories = [
  { name: 'Milks & Dairies', count: 30, icon: '/icons/milk.png' },
  { name: 'Clothing', count: 35, icon: '/icons/clothing.png' },
  { name: 'Pet Foods', count: 42, icon: '/icons/pet.png' },
  { name: 'Baking material', count: 68, icon: '/icons/baking.png' },
  { name: 'Fresh Fruit', count: 4, icon: '/icons/fruit.png' },
];

const CategoryCard = () => {
  return (
    <div className="shadow-sm rounded-4 p-4">
      <h5 className="fw-bold">Category</h5>
      <hr className="mb-3 mt-1" style={{ borderTop: '3px solid #d1e7dd', width: '30%' }} />

      {categories.map((cat, index) => (
        <div
          className="d-flex align-items-center justify-content-between mb-3 p-2 rounded-3 border"
          key={index}
        >
          <div className="d-flex align-items-center">
            <Image
              src={cat.icon}
              alt={cat.name}
              width={40}
              height={40}
              className="me-3"
            />
            <span className="fw-medium">{cat.name}</span>
          </div>
          <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-3 py-2 rounded-pill">
            {cat.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
