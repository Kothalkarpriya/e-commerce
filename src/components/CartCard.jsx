import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { BsFillCartFill } from "react-icons/bs";

export default function CartCard({ id, title, image, price, quantity }) {
  const [count, setCount] = useState(quantity);
  const { dispatchCart } = useCart();
  const cartDefault = {
    id: id,
    image: image,
    title: title,
    price: price,
    quantity: quantity,
  };

  useEffect(() => {
    count < 1 || isNaN(count) ? setCount(1) : setCount(count);
    dispatchCart({
      type: "CART_QUANTITY",
      payload: { id: id, quantity: count, price: price * count },
    });
  }, [count, dispatchCart, id, price, quantity]);

  return (
    <article className="prod-in-cart">
      <img src={image} alt={title} />
      <div className="prod-detail">
        <div className="text text-align-left">
          <p className="large-text">{title}</p>
          <p className="large-text">Rs.{price}</p>
          <p className="grey-text">40% OFF</p>
          <p className="quant">
            <label>Quantity: </label>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatchCart({
                  type: "CART_QUANTITY",
                  payload: cartDefault,
                });
                setCount(count - 1);
              }}
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
              onClick={() => {
                dispatchCart({
                  type: "CART_QUANTITY",
                  payload: cartDefault,
                });
                setCount(count + 1);
              }}
              defaultChecked
            >
              &nbsp;+&nbsp;
            </button>
          </p>
        </div>
        <div className="button card-buttons text-align-center">
          <button
            className="btns upper-text"
            onClick={() =>
              dispatchCart({
                type: "CART_DEL",
                payload: cartDefault,
              })
            }
            defaultChecked
          >
            Remove from <BsFillCartFill />
          </button>
        </div>
      </div>
    </article>
  );
}
