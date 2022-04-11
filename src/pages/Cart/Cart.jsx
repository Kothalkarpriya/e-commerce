import React from "react";
import { img4 } from "../../assests/image";

export default function Cart() {
  return (
    <section className="main-section">
      <div className="prod-heading upper-text">My Cart(1)</div>
      <div className="cart-container">
        <article className="prod-in-cart">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div className="prod-detail">
            <div className="text text-align-left">
              <p className="large-text">Women Western Top</p>
              <p className="large-text">
                Rs.600{" "}
                <span className="text-lin-through grey-text">Rs.1000</span>
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
        <article className="prod-price-detail">
          <div className="price-heading upper-text large-text">
            price details
          </div>
          <div className="table">
            <table>
              <tr>
                <td className="cl-1">Price(1 Item)</td>
                <td className="cl-2 text-align-right">Rs. 600</td>
              </tr>
              <tr>
                <td className="cl-1">Discount</td>
                <td className="cl-2 text-align-right">RS. -400</td>
              </tr>
              <tr>
                <td className="cl-1">Delivery Charges</td>
                <td className="cl-2 text-align-right">Rs. 60</td>
              </tr>
            </table>
            <table className="table-2">
              <tr className="total">
                <td className="cl-1 upper-text ">Total amount</td>
                <td className="cl-2 text-align-right">Rs.660</td>
              </tr>
            </table>
            <p className="note">You will save Rs. 600 on this order</p>

            <button className="btn upper-text">place order</button>
          </div>
        </article>
      </div>
    </section>
  );
}
