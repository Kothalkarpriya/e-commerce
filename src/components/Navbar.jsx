import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <nav className="navbar">
        <div className="nav-brand upper-text">
            <Link to="/home.html" className="nav-brand-link">Shoppers Stop</Link>
        </div>
        <div className="nav-collapse">
            <div className="hamburger">
                <i className="fa fa-bars"></i>
                <i className="fa fa-times"></i>
            </div>
            <ul className="nav-list-group vert">
                <li className="list-ele">
                    <Link to="./assets/pages/signup.html" className="nav-link">Login</Link>
                </li>
                <li className="list-ele">
                    <Link to="./assets/pages/wishlist-page.html" className="nav-link">
                        <i className="fa fa-heart-o"></i>
                    </Link>
                </li>
                <li className="list-ele">
                    <Link to="./assets/pages/cart-page.html" className="nav-link">
                        <i className="fa fa-shopping-cart">
                        </i>Cart</Link>
                </li>
            </ul>
        </div>
    </nav>
    </nav>
  );
}
