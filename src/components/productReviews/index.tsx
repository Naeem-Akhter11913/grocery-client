import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Form, ProgressBar } from "react-bootstrap"; // keeping only form & progress bar
import "./style.css";

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<null | number>(null);

  const reviews = [
    {
      name: "Sienna",
      date: "December 4, 2022 at 3:12 pm",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
      img: "/user1.jpg",
      rating: 5,
    },
    {
      name: "Brenna",
      date: "December 4, 2022 at 3:12 pm",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
      img: "/user2.jpg",
      rating: 4,
    },
    {
      name: "Gemma",
      date: "December 4, 2022 at 3:12 pm",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
      img: "/user3.jpg",
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
    <div className="review-wrapper">
      <div className="review-container">
        <div className="review-left">
          <h5 className="section-title">Customer questions & answers</h5>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <img
                  src={review.img}
                  alt={review.name}
                  className="review-avatar"
                />
                <div>
                  <small className="review-date">{review.date}</small>
                  <h6 className="review-name">{review.name}</h6>
                </div>
              </div>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star-active" />
                ))}
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="review-right">
          <h5 className="section-title">Customer reviews</h5>

          <div className="review-summary">
            <div className="star-row">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-active" />
              ))}
            </div>
            <span className="summary-score">4.8 out of 5</span>
          </div>

          {ratings.map((rating, index) => (
            <div key={index} className="rating-row">
              <span className="rating-label">{rating.stars} star</span>
              <div className="rating-bar">
                <ProgressBar
                  now={rating.percentage}
                  label={`${rating.percentage}%`}
                  style={{ height: "10px" }}
                  variant="success"
                />
              </div>
            </div>
          ))}

          <p className="rating-info">How are ratings calculated?</p>
        </div>
      </div>

      <div className="review-form">
        <h5 className="section-title">Add a review</h5>

        <div className="rating-input">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                  style={{ display: "none" }}
                />
                <FaStar
                  size={24}
                  className="star"
                  color={
                    starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "pointer" }}
                />
              </label>
            );
          })}
        </div>

        <Form className="form-box">
          <Form.Group className="form-group">
            <Form.Control as="textarea" rows={4} placeholder="Write Comment" />
          </Form.Group>

          <div className="form-row">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="email" placeholder="Email" />
          </div>

          <Form.Group className="form-group">
            <Form.Control type="text" placeholder="Website" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit Review
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProductReview;
