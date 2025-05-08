import React from 'react'

const BlogAuth = () => {
    return (
        <div className="container my-5">
            <div className="border rounded-4 p-4 d-flex align-items-start shadow-sm" style={{ backgroundColor: "#fff" }}>

                <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-1.png"
                    alt="Barbara Cartland"
                    className="rounded-circle me-4"
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />

                <div>
                    <h5 className="mb-1 fw-semibold text-dark">Barbara Cartland</h5>
                    <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                        306 posts <span className="mx-2">•</span> Since 2012
                    </p>

                    <p className="mb-0 text-dark">
                        Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes.
                        I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet,
                        cras elementum libero
                    </p>
                </div>

            </div>
        </div>

    )
}

export default BlogAuth