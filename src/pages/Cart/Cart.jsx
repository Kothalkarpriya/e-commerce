import React from "react";
import { img4 } from "../../assets/images/image";
import { Navbar, Footer } from "../../components/component";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <main>
        <section class="main-section">
          <div class="prod-heading upper-text">My Cart(1)</div>
          <div class="cart-container">
            <article class="prod-in-cart">
              <div class="image">
                <img src={img4} alt="" />
              </div>
              <div class="prod-detail">
                <div class="text text-align-left">
                  <p class="large-text">Women Western Top</p>
                  <p class="large-text">
                    Rs.600{" "}
                    <span class="text-lin-through grey-text">Rs.1000</span>
                  </p>
                  <p class="grey-text">40% OFF</p>
                  <p class="quant">
                    <label>Quantity: </label>
                    <i class="fa fa-plus"></i>
                    <input type="number" min={0} value="1" />
                    <i class="fa fa-minus"></i>
                  </p>
                </div>
                <div class="button">
                  <button class="btns upper-text">Remove from Cart</button>
                  <button class="btns upper-text">Move to wishlist</button>
                </div>
              </div>
            </article>
            <article class="prod-price-detail">
              <div class="price-heading upper-text large-text">
                price details
              </div>
              <div class="table">
                <table>
                  <tr>
                    <td class="cl-1">Price(1 Item)</td>
                    <td class="cl-2 text-align-right">Rs. 600</td>
                  </tr>
                  <tr>
                    <td class="cl-1">Discount</td>
                    <td class="cl-2 text-align-right">RS. -400</td>
                  </tr>
                  <tr>
                    <td class="cl-1">Delivery Charges</td>
                    <td class="cl-2 text-align-right">Rs. 60</td>
                  </tr>
                </table>
                <table class="table-2">
                  <tr class="total">
                    <td class="cl-1 upper-text ">Total amount</td>
                    <td class="cl-2 text-align-right">Rs.660</td>
                  </tr>
                </table>
                <p class="note">You will save Rs. 600 on this order</p>

                <button class="btn upper-text">place order</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
