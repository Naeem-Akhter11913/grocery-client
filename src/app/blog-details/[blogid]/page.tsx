'use client'

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import './style.css'

import Loader from "@/components/loader/loader";
const SliderComponent = dynamic(() => import("@/components/sliderComponent"),{ssr:false, loading: () => <Loader />});
const ServiceProvide = dynamic(() => import("@/components/service-provide/ServiceProvide"),{ssr:false, loading: () => <Loader />});
const BlogDetails = dynamic(() => import("@/components/blogDetails"), { ssr: false, loading: () => <Loader /> });
const PostCommentReview = dynamic(() => import("@/components/blogDetails/addReview"), { ssr: false, loading: () => <Loader /> });
const AllBlogComments = dynamic(() => import("@/components/blogDetails/AllComments"), { ssr: false, loading: () => <Loader /> });
const BlogAuth = dynamic(() => import("@/components/blogDetails/blogAtuh"), { ssr: false, loading: () => <Loader /> });
const CategoryCard = dynamic(() => import("@/components/categoryCard"), { ssr: false, loading: () => <Loader /> });
const FillPrice = dynamic(() => import("@/components/fillPrice"), { ssr: false, loading: () => <Loader /> });
const NewProducts = dynamic(() => import("@/components/newProducts"), { ssr: false, loading: () => <Loader /> });
const SideBanner = dynamic(() => import("@/components/sideBanner"), { ssr: false, loading: () => <Loader /> });



const MainBlogDetails = () => {

    return (
        <Suspense fallback={<Loader />}>
            <div className="row">
                <div className="col-9">
                    <BlogDetails />
                    <BlogAuth />
                    <PostCommentReview />
                    <AllBlogComments />
                </div>

                <div className={`col-3 d-flex flex-column gap-3 `}>
                    <CategoryCard />
                    <FillPrice />
                    <NewProducts />
                    <SideBanner />
                </div>

                <div className='mt-3'>
                    <SliderComponent />

                </div>
                <div className='mt-3'>
                    <ServiceProvide />

                </div>
            </div>
        </Suspense>

    )
}

export default MainBlogDetails;