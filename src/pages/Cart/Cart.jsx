import React from "react";
import {CartCard} from "../../components/component";

export default function Cart() {
  return (
    <section className="main-section">
      <div className="prod-heading upper-text">My Cart(1)</div>
      <div className="cart-container">
        <CartCard />
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
