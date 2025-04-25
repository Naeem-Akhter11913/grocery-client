import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import './style.css'

const ProductReview = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState<number | null>(null);
    const reviews = [
        {
            name: 'Sienna',
            date: 'December 4, 2022 at 3:12 pm',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
            img: '/user1.jpg', // place your user images inside /public
            rating: 5,
        },
        {
            name: 'Brenna',
            date: 'December 4, 2022 at 3:12 pm',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
            img: '/user2.jpg',
            rating: 5,
        },
        {
            name: 'Gemma',
            date: 'December 4, 2022 at 3:12 pm',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
            img: '/user3.jpg',
            rating: 5,
        },
    ];
    const ratings = [
        { stars: 5, percentage: 50 },
        { stars: 4, percentage: 25 },
        { stars: 3, percentage: 45 },
        { stars: 2, percentage: 65 },
        { stars: 1, percentage: 85 },
    ];

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-4">Customer questions & answers</h5>
                <h5>Customer reviews</h5>
            </div>
            <div className="row">
                <div className="col-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="card border-0 shadow-sm mb-4 p-3">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="rounded-circle me-3"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                                <div>
                                    <small className="text-muted">{review.date}</small>
                                    <h6 className="mb-0">{review.name}</h6>
                                </div>
                            </div>
                            <div className="mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-warning me-1" />
                                ))}
                            </div>
                            <p className="text-muted">{review.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="col-4">
                    <div className="container">

                        <div className="d-flex align-items-center mb-3">
                            <div className="text-warning d-flex align-items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <span className="ms-2 fw-bold">4.8 out of 5</span>
                        </div>

                        {ratings.map((rating, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <div className="me-2" style={{ width: '50px' }}>
                                    {rating.stars} star
                                </div>
                                <div className="flex-grow-1">
                                    <ProgressBar
                                        now={rating.percentage}
                                        label={`${rating.percentage}%`}
                                        style={{ height: '10px', backgroundColor: '#e9ecef' }}
                                        variant="success"
                                    />
                                </div>
                            </div>
                        ))}

                        <p className="text-muted mt-3" style={{ fontSize: '14px' }}>
                            How are ratings calculated?
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <h5>Add a review</h5>

                    <div className="mb-3 d-flex">
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={starValue}
                                        onClick={() => setRating(starValue)}
                                        style={{ display: 'none' }}
                                    />
                                    <FaStar
                                        size={24}
                                        className="star"
                                        color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(null)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    <Form className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={4} placeholder="Write Comment" />
                        </Form.Group>

                        <div className="d-flex mb-3 gap-2">
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="email" placeholder="Email" />
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Website" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit Review
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ProductReview