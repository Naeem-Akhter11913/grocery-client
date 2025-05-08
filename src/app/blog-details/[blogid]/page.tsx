'use client'
import BlogDetails from "@/components/blogDetails"
import PostCommentReview from "@/components/blogDetails/addReview"
import AllBlogComments from "@/components/blogDetails/AllComments"
import BlogAuth from "@/components/blogDetails/blogAtuh"
import CategoryCard from "@/components/categoryCard"
import FillPrice from "@/components/fillPrice"
import NewProducts from "@/components/newProducts"
import SideBanner from "@/components/sideBanner"
import { useEffect, useRef, useState } from "react";

import './style.css'


const MainBlogDetails = () => {
    const detectDOMHeight = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry)
                setIsInView(entry.isIntersecting);
            }, {
            root: null, // use viewport
            threshold: 0.1, // trigger when 10% is visible
        }
        );

        if (detectDOMHeight.current) {
            observer.observe(detectDOMHeight.current);
        }

        return () => {
            if (detectDOMHeight.current) {
                observer.unobserve(detectDOMHeight.current);
            }
        };
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-9">
                    <BlogDetails />
                    <BlogAuth />
                    <PostCommentReview />
                    <AllBlogComments />
                </div>

                <div className={`col-3 d-flex flex-column gap-3 ${isInView ? 'ssss':''}`}>
                    <CategoryCard />
                    <FillPrice />
                    <NewProducts />
                    <SideBanner />
                    <div ref={detectDOMHeight} >fgdfg</div>
                </div>


            </div>

            <style>
                {`
                .ssss{
                 position: fixed;
                 right: 0 
                }
                `}
            </style>
        </>
    )
}

export default MainBlogDetails