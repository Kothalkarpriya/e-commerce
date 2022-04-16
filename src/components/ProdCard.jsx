import React from "react";
import { ItemInCart } from "../backend/utils/cartReducer";
import { ItemInWishListCheck } from "../backend/utils/wishListReducer";
import { useWishList } from "../context/wishListContext";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function ProdCard({ id, cardTitle, cardPrice, image }) {
  const { dispatchWish } = useWishList();
  const { dispatchCart } = useCart();
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
            Add to Cart
          </button>
        ) : (
          <Link to="/Cart" className="btn card-btn-items">
            Go to Cart
          </Link>
        )}
        ;
        {console.log("hello")}
        {ItemInWishListCheck(id) === false ? (
          <button
            className="btn card-btn-items"
            onClick={() =>
              dispatchWish({ type: "WISH_ADD", payload: defaultState })
            }
            defaultChecked
          >
            Add To wishlist
          </button>
        ) : (
          <button
            className="btn card-btn-items"
            onClick={() =>
              dispatchWish({ type: "WISH_DEL", payload: defaultState })
            }
            defaultChecked
          >
            Delete from WishList
          </button>
        )}
      </div>
    </div>
  );
}
