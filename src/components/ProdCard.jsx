import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
// import { BsStar } from "react-icons/bs";

export default function ProdCard({ cardTitle, cardRating, cardPrice, image }) {
  // const rounded = Math.round(cardRating * 2) / 2;
  // const hasDecimal = rounded % 1 !== 0;
  // const roundedWhole = Math.floor(rounded);
  // const stars = hasDecimal ? roundedWhole + 1 : roundedWhole;
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
        {/* <div>
          {[...Array(roundedWhole)].map((e, i) => (
            <BsStar key={i} />
          ))}
          {hasDecimal ? <i class="fas fa-star-half-alt"></i> : ``}
          {[...Array(5 - stars)].map((e, i) => (
            <BsStar key={i} />
          ))}
        </div> */}
        <div className="card-buttons">
          <button type="submit" className="btn card-btn-items">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
