import React from 'react'
import './style.css';


const AllBlogComments = () => {
    return (
        <div className="container my-5">
            <h3 className="fw-bold text-dark mb-4">Comments</h3>

            {/* Comment Card */}
            {[1, 2, 3].map((_, index) => (
                <div key={index} className="d-flex gap-3 p-4 mb-4 border rounded-4">

                    {/* Avatar */}
                    <img
                        src="https://via.placeholder.com/60"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />

                    {/* Comment Content */}
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted small">December 4, 2022 at 3:12 pm</span>
                            <span style={{ color: '#f7c94b', fontSize: '1rem' }}>★★★★☆</span>
                        </div>
                        <p className="mb-1 text-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
                            suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
                            facilis itaque modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt?
                        </p>
                        <p className="fw-semibold mt-2 mb-0 text-success">
                            {index === 0 ? 'Sienna' : index === 1 ? 'Brenna' : 'Gemma'}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default AllBlogComments