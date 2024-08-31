import React from "react";
import "./Review.css"; // Import the CSS file

export default function ReviewCard({ name, picture, review }) {
  return (
    <div className="review-card">
      <img src={picture} alt={`${name}'s picture`} className="review-picture" />
      <div className="review-content">
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
}
