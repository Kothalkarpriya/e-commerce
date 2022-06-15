import React from "react";
import { useWishList, useCart } from "../context/context";
import { ItemInCart } from "../backend/utils/cartReducer";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

export default function AddDelBtn(defaultState) {
  const { dispatchWish } = useWishList();
  const { dispatchCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
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
          Add to <BsFillCartFill />
        </button>
      ) : (
        <button
          className="btn card-btn-items"
          onClick={() => navigate("/Cart")}
        >
          Go to <BsFillCartFill />
        </button>
      )}
      <button
        type="submit"
        className="btn card-btn-items"
        onClick={() =>
          dispatchWish({ type: "WISH_DEL", payload: defaultState.defaultState })
        }
      >
        Delete <BsFillHeartFill />
      </button>
    </>
  );
}
