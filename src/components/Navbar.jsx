import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/context";

export default function Navbar() {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
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
            {isLoggedIn ? (
              <button
                onClick={() => {
                  navigate("/");
                  logout();
                }}
                className="nav-link"
              >
                Logout
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="nav-link">
                Login
              </button>
            )}
          </li>
          <li className="list-ele">
            <button onClick={() => navigate("/WishList")} className="nav-link">
              <BsFillHeartFill className="icon" /> Wishlist
            </button>
          </li>
          <li className="list-ele">
            <button onClick={() => navigate("/Cart")} className="nav-link">
              <BsFillCartFill className="icon" />
              Cart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
