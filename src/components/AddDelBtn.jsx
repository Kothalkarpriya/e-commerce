import React from "react";
import { useWishList } from "../context/wishListContext";
import { useCart } from "../context/cartContext";
import { ItemInCart } from "../backend/utils/cartReducer";
import { Link } from "react-router-dom";

export default function AddDelBtn(defaultState) {
  const { dispatchWish } = useWishList();
  const { dispatchCart } = useCart();
  return (
    <div>
      {ItemInCart(defaultState.defaultState.id) === false ? (
        <button
          type="submit"
          className="btn card-btn-items"
          onClick={() =>
            dispatchCart({
              type: "CART_ADD",
              payload: defaultState.defaultState,
            })
          }
        >
          Add to Cart
        </button>
      ) : (
        <Link to="/Cart" className="btn card-btn-items">
          Go to Cart
        </Link>
      )}
      <button
        type="submit"
        className="btn card-btn-items"
        onClick={() =>
          dispatchWish({ type: "WISH_DEL", payload: defaultState.defaultState })
        }
      >
        Delete From WishList
      </button>
    </div>
  );
}
