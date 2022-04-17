import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { useWishList } from "../context/wishListContext";
import { ItemInWishListCheck } from "../backend/utils/wishListReducer";

export default function CartCard({ id, title, img, price, quantity }) {
  const { dispatchWish } = useWishList();
  const [count, setCount] = useState(quantity);
  const { dispatchCart } = useCart();
  const cartDefault = {
    id: id,
    imageUrl: img,
    title: title,
    price: price,
    quantity: quantity,
  };

  useEffect(() => {
    count < 1 || isNaN(count) ? setCount(1) : setCount(count);
    dispatchCart({
      type: "CART_QUANTITY",
      payload: { id: id, quantity: count },
    });
  }, [count, dispatchCart, id]);

  return (
    <article className="prod-in-cart">
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="prod-detail">
        <div className="text text-align-left">
          <p className="large-text">{title}</p>
          <p className="large-text">Rs.{price * quantity}</p>
          <p className="grey-text">40% OFF</p>
          <p className="quant">
            <label>Quantity: </label>
            <button
              className="btn btn-primary"
              onClick={() => setCount(count - 1)}
              defaultChecked
            >
              &nbsp;-&nbsp;
            </button>
            <input
              type="text"
              name="cartInput"
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => setCount(count + 1)}
              defaultChecked
            >
              &nbsp;+&nbsp;
            </button>
          </p>
        </div>
        <div className="button">
          <button
            className="btns upper-text"
            onClick={() =>
              dispatchWish({
                type: "CART_REMOVE",
                payload: cartDefault,
              })
            }
            defaultChecked
          >
            Remove from Cart
          </button>
          <button
            className="btns upper-text"
            onClick={
              !ItemInWishListCheck(id)
                ? () => dispatchWish({ type: "WISH_ADD", payload: cartDefault })
                : () => {}
            }
            defaultChecked
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </article>
  );
}
