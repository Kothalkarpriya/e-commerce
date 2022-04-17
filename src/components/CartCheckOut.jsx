import React from "react";
import { useCart } from "../context/cartContext";

export default function CartCheckOut() {
  const { state } = useCart();
  const total = state.CartItems.reduce(
    (acc, currVal) => {
      let sumOfAll = currVal.price * currVal.quantity;
      acc.total = acc.total + sumOfAll;
      acc.count += currVal.quantity;
      return acc;
    },
    { total: 0, count: 0 }
  );

  let Discount = 0.2 * total.total;
  let delivery = 20 * total.count;
  return (
    <article className="prod-price-detail">
      <div className="price-heading upper-text large-text">
        Checkout details
      </div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="cl-1">Total: ({total.count}) items</td>
              <td className="cl-2 text-align-right">Rs.{total.total}</td>
            </tr>
            <tr>
              <td className="cl-1">Discount</td>
              <td className="cl-2 text-align-right">RS. {Discount}</td>
            </tr>
            <tr>
              <td className="cl-1">Delivery Charges</td>
              <td className="cl-2 text-align-right">Rs. {delivery}</td>
            </tr>
          </tbody>
        </table>
        <table className="table-2">
          <tbody>
            <tr className="total">
              <td className="cl-1 upper-text ">Total amount</td>
              <td className="cl-2 text-align-right">
                Rs. {total.total - Discount + delivery}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="note">You will save Rs. {Discount} on this order</p>

        <button className="btn upper-text">Place Order</button>
      </div>
    </article>
  );
}
