import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

export default function ProdCard({ cardTitle, cardPrice, image }) {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img src={image} alt="sunset-and-glass-mug" className="img" />
          <div className="img-badge">
            <AiTwotoneHeart />
          </div>
        </div>
        <div className="text text-align-center">
          <p className="small-text">{cardTitle}</p>
          <p className="large-text">Rs.{cardPrice}</p>
        </div>
        <div className="card-buttons">
          <button type="submit" className="btn card-btn-items">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
