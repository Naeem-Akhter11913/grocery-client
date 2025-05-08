import React from 'react';
import './style.css';

const BlogDetails = () => {
    return (
        <>
            <div className="container py-5">

                {/* Section: Tag and Title */}
                <p className="text-muted">Receipts</p>
                <h1 className="fw-bold">Best smartwatch 2022: the top wearables you can buy today</h1>
                <p className="text-muted">
                    By <strong>Roger Roehr</strong> • 7 January • 5 min read
                </p>

                {/* Hero Image */}
                <div className="my-4">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-19.png" alt="Meat preparation" className="img-fluid rounded" />
                </div>

                {/* Intro Text */}
                <p className="lead">
                    Helping everyone live happier, healthier lives at home through their kitchen. Kitchen is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.
                </p>

                <p>
                    We’ve reviewed and tested a broad selection of the best smartwatches, and we’ve made a definitive list of the top models based on design, OS, display, battery performance, smart features and price.
                </p>

                <p>
                    That top spot is currently taken by the Apple Watch Series 7, thanks to the top-performing smartwatch features. However, the Samsung Galaxy Watch 4 is the greatest Android option, while Fitbit's Sense is best for wellness tracking.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo erat sed orci lacinia.</p>

                {/* Side-by-side Images */}
                <div className="row my-4">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-21.png" alt="Chef Cooking" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-21.png" alt="Healthy Breakfast" className="img-fluid rounded" />
                    </div>
                </div>

                <p>
                    Today, modern smartwatches offer more than just time-telling. From health and fitness tracking to cellular support and smart integrations, they’ve become essential gadgets in the modern world.
                </p>

                {/* Highlighted Box / Blockquote */}
                <div className="bg-light border-start border-4 border-primary p-4 my-4">
                    <p className="mb-0">
                        Integer eu faucibus dolor. Suspendisse in elementum turpis. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
                    </p>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin metus sit amet felis commodo, et tincidunt orci finibus.
                </p>

                {/* Footer Actions */}
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div>
                        <button className="btn btn-success me-2">Share</button>
                        <button className="btn btn-outline-dark">Like</button>
                    </div>
                    <span className="text-muted">Share this: 🔗</span>
                </div>

            </div>
        </>
    )
}

export default BlogDetails