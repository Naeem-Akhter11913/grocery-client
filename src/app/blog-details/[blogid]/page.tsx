import BlogDetails from "@/components/blogDetails"
import PostCommentReview from "@/components/blogDetails/addReview"
import AllBlogComments from "@/components/blogDetails/AllComments"
import BlogAuth from "@/components/blogDetails/blogAtuh"
import CategoryCard from "@/components/categoryCard"
import FillPrice from "@/components/fillPrice"
import NewProducts from "@/components/newProducts"
import SideBanner from "@/components/sideBanner"


const MainBlogDetails = () => {
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <BlogDetails />
                    <BlogAuth />
                    <PostCommentReview />
                    <AllBlogComments />

                </div>

                <div className='col-3 d-flex flex-column gap-3'>
                    <CategoryCard />
                    <FillPrice />
                    <NewProducts />
                    <SideBanner />
                </div>
            </div>
        </>
    )
}

export default MainBlogDetails