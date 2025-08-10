import CategoryCard from '@/components/categoryCard'
import FillPrice from '@/components/fillPrice'
import NewProducts from '@/components/newProducts'
import SideBanner from '@/components/sideBanner'
import Link from 'next/link'
import React from 'react'

const AllBlogs = () => {
    return (
        <div className="row">
            <div className="col-9">
                <div className='d-flex flex-wrap'>
                    {Array.from({ length: 12 }).map((items, index) => {
                        return (
                            <Link href={`/blog-details/${index + 1}`} key={index} className="card border-0 text-center text-decoration-none" style={{ width: "20rem", margin: "auto" }}>
                                <div className="position-relative rounded-4 overflow-hidden">
                                    <img src="/blog/blog-1.png" className="img-fluid w-100" alt="Healthy Food" />

                                    <div className="position-absolute top-0 start-0 m-2 bg-white rounded-circle p-1">
                                        <i className="bi bi-heart-fill text-warning"></i>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted small mb-1">Side Dish</p>
                                    <h5 className="card-title fw-bold">The Intermediate Guide to Healthy Food</h5>

                                    <div className="d-flex justify-content-center text-muted small gap-2 mt-2">
                                        <span>25 April 2022</span>
                                        <span>•</span>
                                        <span>126k Views</span>
                                        <span>•</span>
                                        <span>4 mins read</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='col-3 d-flex flex-column gap-3'>
                <CategoryCard />
                <FillPrice />
                <NewProducts />
                <SideBanner />
            </div>
        </div>
    )
}

export default AllBlogs