'use client'
import React, { useEffect, useState } from "react";
import '../popularProducts/style.css';
import { Compare, View, WishList } from "@/utils/Arrows";
import Link from "next/link";
import { ProductItem } from "@/utils/types";
import { productsItems } from "../popularProducts/productsArray";
import GreyLine from "../greyLine";
import './style.css';


const RelatedProducts = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [items, setItem] = useState<ProductItem[] | []>([]);

    useEffect(() => {
        const array = JSON.stringify(productsItems);
        const splittedArray = JSON.parse(array).splice(0, 4)
        setItem([...splittedArray]);
    }, []);

    return (
        <>
            <GreyLine title="Related products" />

            <div className="d-grid-custom">
                {items.map((item, index) => (
                    <div key={index}>
                        <div
                            className="card shadow-sm position-relative custom-cart-hover-effect position-relative-custom"
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
                                <h5 className="card-title"> <Link href={`/product-details/${item.type}`} className="text-decoration-none" key={index}>{item.desc.slice(0,20)}...</Link></h5>

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
                                </h5>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RelatedProducts