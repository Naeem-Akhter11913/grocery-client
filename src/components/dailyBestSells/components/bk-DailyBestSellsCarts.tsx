// 'use client'
// import React, { useState } from 'react'
// import { CartIcon, Compare, View, WishList } from '@/utils/Arrows'

// interface Price {
//     current: number;
//     original: number;
//     currency: string;
// }

// interface DailySellItem {
//     tag: string;
//     type: string;
//     frontImage: string;
//     backImage: string;
//     desc: string;
//     stars: number;
//     brand: string;
//     price: Price;
// }

// interface DailyBestSellsCartsProps {
//     item: DailySellItem;
//     index: number;
// }

// const DailyBestSellsCarts: React.FC<DailyBestSellsCartsProps> = ({ item, index }) => {
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//     return (

//         <div
//             className={`shadow-sm position-relative custom-cart-hover-effect position-relative-custom`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             style={{ height: '500px', }}
//         >
//             <span className="custom-badge bg-danger position-absolute top-0 start-0">
//                 {item.tag}
//             </span>

//             <div className="product-image-container mt-5">
//                 <img
//                     src={hoveredIndex === index ? item.backImage : item.frontImage}
//                     alt={item.desc}
//                     width={200}
//                     height={200}
//                     className="product-image"
//                 />
//                 {hoveredIndex === index && (
//                     <div className='custom-tootip-style'>
//                         <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
//                             <WishList />
//                         </button>
//                         <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"><Compare /></button>
//                         <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
//                             <View />
//                         </button>
//                     </div>
//                 )}
//             </div>

//             <div className="card-body">
//                 <p className="text-muted text-muted-custom mb-1">{item.type}</p>
//                 <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none'>{item.desc}</a></h5>

//                 <div className="mb-2">
//                     <span className="text-warning">{'★'.repeat(item.stars)}</span>
//                     <span className="text-muted ms-1">({item.stars})</span>
//                 </div>

//                 <p className="mb-2">
//                     By <span className="text-success custom-brand">{item.brand}</span>
//                 </p>

//                 <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
//                     <div>
//                         {item.price.currency}{item.price.current.toFixed(2)}{' '}
//                         <small className="text-muted text-decoration-line-through">
//                             {item.price.currency}{item.price.original.toFixed(2)}
//                         </small>
//                     </div>
//                 </h5>
//                 <button className="btn btn-success custom-button-css w-100">
//                     <CartIcon /> Add
//                 </button>


//             </div>
//         </div>
//     )
// }

// export default DailyBestSellsCarts;