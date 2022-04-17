import React from "react";
import { CartCard, EmptyProd, CartCheckOut } from "../../components/component";
import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { state } = useCart();
  const Cart = state.CartItems;

  console.log(Cart);
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
    <section className="main-section">
      <div className="prod-heading upper-text">My Cart(1)</div>
      <div className="cart-container">
        {Cart.length ? CartMapping() : EmptyProd("CARTLIST")}
        <CartCheckOut />
        {console.log("Cart age")}
      </div>
    </section>
  );
}
