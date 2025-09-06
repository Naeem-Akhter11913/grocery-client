import React from "react";
import GreyLine from "../greyLine";

interface Product {
  image: string;
  title: string;
  price: string;
  rating: number;
}

const products: Product[] = [
  {
    image: "/trending_product/thumbnail-1.jpg", 
    title: "Chen Cardigan",
    price: "$99.50",
    rating: 5,
  },
  {
    image: "/trending_product/thumbnail-2.jpg",
    title: "Chen Sweater",
    price: "$89.50",
    rating: 4,
  },
  {
    image: "/trending_product/thumbnail-3.jpg",
    title: "Colorful Jacket",
    price: "$25",
    rating: 3,
  },
];

const NewProducts = () => {
  return (
    <div className="shadow-sm rounded-4 p-4">
      <GreyLine title="New products" />
      {products.map((product, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid rounded" 
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div className="ms-3">
            <h6 className="mb-1 text-success">{product.title}</h6>
            <p className="mb-1 fw-bold">{product.price}</p>
            <div className="text-warning">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
