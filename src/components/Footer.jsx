// import "./App.css";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="footer text-align-center">
        <Link
          to="/"
          className="footer-link"
          
        >
          <i className="fa fa-linkedin-square"></i>
        </Link>
        <Link
          to="/"
          className="footer-link"
          
        >
          <i className="fa fa-twitter-square"></i>
        </Link>
        <Link
          to="/"
          className="footer-link"
          
        >
          <i className="fa fa-github-square"></i>
        </Link>
        <p>Made by Priya Kothalkar</p>
      </footer>
    </div>
  );
}
