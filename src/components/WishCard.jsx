import React from "react";
import { AddDelBtn } from "./component";

export default function WishCard({ id, sr, img, prodName, price, Action }) {
  const defaultState = {
    id: id,
    img: img,
    title: prodName,
    price: price,
  };

  return (
    <div className="container">
      <div className="image">
        <img src={img} alt="clothing" className="img" />
      </div>
      <div className="text text-align-center">
        <p className="large-text">{prodName}</p>
        <p className="large-text">Rs. {price}</p>
      </div>
      <div className="card-buttons text-align-center">
        <AddDelBtn defaultState={defaultState} />
      </div>
    </div>
  );
}
