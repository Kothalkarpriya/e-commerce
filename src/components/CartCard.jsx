import React from "react";

export default function CartCard({ title, img, price }) {
  return (
    <article className="prod-in-cart">
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="prod-detail">
        <div className="text text-align-left">
          <p className="large-text">{title}</p>
          <p className="large-text">
            Rs.{price} 
            {/* <span className="text-lin-through grey-text">Rs.{price}</span> */}
          </p>
          <p className="grey-text">40% OFF</p>
          <p className="quant">
            <label>Quantity: </label>
            <i className="fa fa-plus"></i>
            <input type="number" min={0} value="1" />
            <i className="fa fa-minus"></i>
          </p>
        </div>
        <div className="button">
          <button className="btns upper-text">Remove from Cart</button>
          <button className="btns upper-text">Move to wishlist</button>
        </div>
      </div>
    </article>
  );
}
