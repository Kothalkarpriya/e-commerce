import React from "react";
import { ItemInWishListCheck } from "../backend/utils/wishListReducer";
import { useWishList } from "../context/wishListContext";

export default function ProdCard({ id, cardTitle, cardPrice, image }) {
  const { dispatchWish } = useWishList();
  const defaultState = {
    id: id,
    imageUrl: image,
    title: cardTitle,
    price: cardPrice,
  };
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="sunset-and-glass-mug" className="img" />
      </div>
      <div className="text text-align-center">
        <p className="large-text">{cardTitle}</p>
        <p className="small-text">Rs.{cardPrice}</p>
      </div>
      <div className="card-buttons text-align-center">
        <button type="submit" className="btn card-btn-items">
          Add to Cart
        </button>
        {ItemInWishListCheck(id) === false ? (
          <button
            className="btn card-btn-items"
           onChange={() =>
              dispatchWish({ type: "WISH_ADD", payload: defaultState })
            } defaultChecked
          >
            Add To wishlist
          </button>
        ) : (
          <button
            className="btn card-btn-items"
            onChange={() =>
              dispatchWish({ type: "WISH_DEL", payload: defaultState })
            }
            defaultChecked
          >
            Add To wishlist
          </button>
        )}
      </div>
    </div>
  );
}
