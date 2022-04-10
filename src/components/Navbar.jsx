import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand upper-text">
        <Link to="/" className="nav-brand-link">
          Shoppers Stop
        </Link>
      </div>
      <div className="nav-collapse">
        <div className="hamburger">
          <i className="fa fa-bars"></i>
          <i className="fa fa-times"></i>
        </div>
        <ul className="nav-list-group vert">
          <li className="list-ele">
            <Link to="/Signup" className="nav-link">
              Login
            </Link>
          </li>
          <li className="list-ele">
            <Link to="/WishList" className="nav-link">
              <AiOutlineHeart/>
            </Link>
          </li>
          <li className="list-ele">
            <Link to="/Cart" className="nav-link">
              <AiOutlineShoppingCart/>Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
