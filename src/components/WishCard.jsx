import React from "react";
import { AddDelBtn } from "./component";

export default function WishCard({ id, sr, img, prodName, price, Action }) {
  const defaultState = {
    id: id,
    imageUrl: img,
    title: prodName,
    price: price,
  };
  console.log("In wishcard");
  return (
    <div className={Action === "prod" ? "container shadows" : "shadows"}>
      <div>#{sr === "#" ? "" : sr}</div>
      <div className="image">
        {img === "Image" ? (
          <p>Image</p>
        ) : (
          <img src={img} alt="clothing" className="img" />
        )}
      </div>
      <div className="text text-align-center">
        <p className="large-text">{prodName}</p>

        {price === "Unit Price" ? (
          <>{price}</>
        ) : (
          <p className="large-text">{price}</p>
        )}
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
