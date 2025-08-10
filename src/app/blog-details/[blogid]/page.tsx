'use client'

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import './style.css'

import Loader from "@/components/loader/loader";
const BlogDetails = dynamic(() => import("@/components/blogDetails"), { ssr: false, loading: () => <Loader /> });
const PostCommentReview = dynamic(() => import("@/components/blogDetails/addReview"), { ssr: false, loading: () => <Loader /> });
const AllBlogComments = dynamic(() => import("@/components/blogDetails/AllComments"), { ssr: false, loading: () => <Loader /> });
const BlogAuth = dynamic(() => import("@/components/blogDetails/blogAtuh"), { ssr: false, loading: () => <Loader /> });
const CategoryCard = dynamic(() => import("@/components/categoryCard"), { ssr: false, loading: () => <Loader /> });
const FillPrice = dynamic(() => import("@/components/fillPrice"), { ssr: false, loading: () => <Loader /> });
const NewProducts = dynamic(() => import("@/components/newProducts"), { ssr: false, loading: () => <Loader /> });
const SideBanner = dynamic(() => import("@/components/sideBanner"), { ssr: false, loading: () => <Loader /> });



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
        <Suspense fallback={<Loader />}>
            <div className="row">
                <div className="col-9">
                    <BlogDetails />
                    <BlogAuth />
                    <PostCommentReview />
                    <AllBlogComments />
                </div>

                <div className={`col-3 d-flex flex-column gap-3 ${isInView ? 'ssss' : ''}`}>
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
        </Suspense>
    )
}

export default MainBlogDetails