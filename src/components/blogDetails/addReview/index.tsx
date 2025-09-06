import React from 'react';
import './style.css';

const PostCommentReview = () => {
    return (
        <div className="container my-5">
            <h3 className="fw-bold text-dark">Leave a Comment</h3>

            {/* Star Rating Placeholder */}
            <div className="mb-3">
                <span style={{ fontSize: "1.5rem", color: "#aaa" }}>★★★★★</span>
            </div>

            {/* Comment Textarea */}
            <div className="mb-3">
                <textarea
                    className="form-control rounded-4 p-3"
                    rows={6}
                    placeholder="Write Comment"
                    style={{ borderColor: "#eee" }}
                ></textarea>
            </div>

            {/* Name and Email Inputs */}
            <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                    <input
                        type="text"
                        className="form-control rounded-4 p-3"
                        placeholder="Name"
                        style={{ borderColor: "#eee" }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="email"
                        className="form-control rounded-4 p-3"
                        placeholder="Email"
                        style={{ borderColor: "#eee" }}
                    />
                </div>
            </div>

            {/* Website Input */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control rounded-4 p-3"
                    placeholder="Website"
                    style={{ borderColor: "#eee" }}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn text-white fw-semibold px-4 py-2 rounded-3"
                style={{ backgroundColor: "#34b575" }}
            >
                Post Comment
            </button>
        </div>

    )
}

export default PostCommentReview