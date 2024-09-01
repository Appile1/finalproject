import React from "react";
import "./reviews.css";
import ReviewCard from "../../componets/ReviewCard/Reviewcard.js";

export default function ReviewsPage() {
  // Sample reviews data
  const reviews = [
    {
      name: "John Doe",
      picture: "/images/john-doe.jpg",
      review: "This platform has been a game-changer for my career!",
    },
    {
      name: "Jane Smith",
      picture: "/images/jane-smith.jpg",
      review:
        "I’ve connected with so many professionals through Networking Hub.",
    },
    {
      name: "Michael Johnson",
      picture: "/images/michael-johnson.jpg",
      review: "The community here is supportive and inspiring.",
    },
  ];

  return (
    <div className="reviews-page">
      <h1>Fellow Reviews</h1>
      {reviews.length === 0 ? (
        <p className="no-reviews">
          No reviews yet. Be the first to share your experience!
        </p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              picture={review.picture}
              review={review.review}
            />
          ))}
        </div>
      )}
    </div>
  );
}
