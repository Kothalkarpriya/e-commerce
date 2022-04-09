import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand upper-text">
        <a href="/home.html" className="nav-brand-link">
          Shoppers Stop
        </a>
      </div>
      <div className="nav-collapse">
        <div className="hamburger">
          <i className="fa fa-bars"></i>
          <i className="fa fa-times"></i>
        </div>
        <ul className="nav-list-group vert">
          <li className="list-ele">
            <a href="./assets/pages/signup.html" className="nav-link">
              Login
            </a>
          </li>
          <li className="list-ele">
            <a href="./assets/pages/wishlist-page.html" className="nav-link">
              <AiOutlineHeart/>
            </a>
          </li>
          <li className="list-ele">
            <a href="./assets/pages/cart-page.html" className="nav-link">
              <AiOutlineShoppingCart/>Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
