import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { ItemInWishListCheck } from "../backend/utils/wishListReducer";
import { useWishList } from "../context/wishListContext";

export default function ProdCard({
  id,
  cardTitle,
  cardPrice,
  image,
}) {
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
        <div className="text-align-center">
          {ItemInWishListCheck(id) === false ? (
            <AiTwotoneHeart
              className="img-badge"
              onClick={() =>
                dispatchWish({ type: "WISH_ADD", payload: defaultState })
              }
            />
          ) : (
            <AiTwotoneHeart
              className="img-badge"
              onClick={() =>
                dispatchWish({ type: "WISH_REMOVE", payload: defaultState })
              }
            />
          )}
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
  );
}
