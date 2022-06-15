import React from "react";
import { CartCard, EmptyProd, CartCheckOut } from "../../components/component";
import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { state } = useCart();
  const Cart = state.CartItems;

  const CartMapping = () => {
    return Cart.map((item) => {
      return (
        <CartCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          image={item.imageUrl}
        />
      );
    });
  };
  return (
    <section className="main-section cart-page">
      <article>
        <div className="prod-heading upper-text">My Cart(1)</div>
        <div className="cart-container">
          {Cart.length ? CartMapping() : EmptyProd("CARTLIST")}
        </div>
      </article>
      {Cart.length && <CartCheckOut />}
    </section>
  );
}
