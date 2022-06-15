import React from "react";
import { CartCard, EmptyProd, CartCheckOut } from "../../components/component";
import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { state } = useCart();
  const cart = state.CartItems;

  const CartMapping = () => {
    return cart.map((item) => {
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
    <div className="sample">
      <section className="main-section ">
        <div className="prod-heading upper-text">My Cart</div>
        <article className="cart-page">
          <div className="cart-container">
            {cart.length ? CartMapping() : EmptyProd("CARTLIST")}
          </div>
          {cart?.length && <CartCheckOut />}
        </article>
      </section>
    </div>
  );
}
