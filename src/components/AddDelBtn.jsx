import React from "react";
import { useWishList } from "../context/wishListContext";

export default function AddDelBtn() {
  const { dispatchWish } = useWishList();
  return (
    <div>
      <button type="submit" className="btn card-btn-items">
        Move to Cart
      </button>
      <button
        type="submit"
        className="btn card-btn-items"
        onClick={() =>
          // eslint-disable-next-line no-undef
          dispatchWish({ type: "WISH_DEL", payload: defaultState })
        }
      >
        Delete From WishList
      </button>
    </div>
  );
}
