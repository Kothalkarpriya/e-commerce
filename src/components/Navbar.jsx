import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";
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
          <button onClick={() => navigate("/WishList")} className="nav-link nav-btn">
            <BsFillHeartFill className="icon" /> Wishlist
          </button>
        </li>
        <li className="list-ele">
          <button onClick={() => navigate("/Cart")} className="nav-link nav-btn">
            <BsFillCartFill className="icon" />
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
}
