import React from "react";
import { ItemInCart } from "../backend/utils/cartReducer";
import { ItemInWishListCheck } from "../backend/utils/wishListReducer";
import { useWishList, useCart } from "../context/context";
import { useNavigate } from "react-router-dom";
import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";

export default function ProdCard({ id, cardTitle, cardPrice, image }) {
  const { dispatchWish } = useWishList();
  const { dispatchCart } = useCart();
  const navigate = useNavigate();
  const defaultState = {
    id: id,
    imageUrl: image,
    title: cardTitle,
    price: cardPrice,
  };
  const cartDefault = {
    id: id,
    imageUrl: image,
    title: cardTitle,
    price: cardPrice,
    quantity: 1,
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
        {ItemInCart(id) === false ? (
          <button
            type="submit"
            className="btn card-btn-items"
            onClick={() =>
              dispatchCart({ type: "CART_ADD", payload: cartDefault })
            }
            defaultChecked
          >
            Add to <BsFillCartFill className="icon" />
          </button>
        ) : (
          <button
            onClick={() => navigate("/Cart")}
            className="btn card-btn-items"
          >
            Go to <BsFillCartFill />
          </button>
        )}
        ;
        {ItemInWishListCheck(id) === false ? (
          <button
            className="btn card-btn-items"
            onClick={() =>
              dispatchWish({ type: "WISH_ADD", payload: defaultState })
            }
            defaultChecked
          >
            Add To <BsFillHeartFill />
          </button>
        ) : (
          <button
            className="btn card-btn-items"
            onClick={() =>
              dispatchWish({ type: "WISH_DEL", payload: defaultState })
            }
            defaultChecked
          >
            Delete from <BsFillHeartFill />
          </button>
        )}
      </div>
    </div>
  );
}
