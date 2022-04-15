import React from "react";
import { AddDelBtn } from "./component";

export default function WishCard({ id, img, prodName, unitPrice, Action }) {
  const defaultState = {
    id: id,
    imageUrl: img,
    title: prodName,
    price: unitPrice,
  };
  return (
    <div className="container">
      <div className="image">
        {img === "Image" ? (
          <p>Image</p>
        ) : (
          <img src={img} alt="clothing" className="img" />
        )}
      </div>
      <div className="text text-align-center">
        <p className="small-text">{prodName}</p>
        <p className="large-text">{unitPrice}</p>
      </div>
      <div className="card-buttons">
        {Action === "Actions" ? (
          <p>Actions</p>
        ) : (
          <AddDelBtn defaultState={defaultState} />
        )}
      </div>
    </div>
  );
}