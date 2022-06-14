import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "priyakothalkar@gmail.com",
    password: "priya123",
  });

  const { login } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <div>
      <main className="main">
        <section className="main-section">
          <div className="login">
            <h2 className="heading">Login</h2>
            <form
              action="#"
              className="login-form"
              id="login"
              onSubmit={submit}
            >
              <div className="input-block">
                <label htmlFor="#input-email">Email Address</label>
                <input
                  type="email"
                  id="input-email"
                  placeholder="username@email.com"
                  required
                  name="email"
                  value={user.email}
                  // eslint-disable-next-line no-undef
                  onChange={(e) => changeInputHandler(e, email)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="input-pass">Password</label>
                <input
                  type="password"
                  name="password"
                  id="input-pass"
                  className="input-password"
                  placeholder="*************"
                  value={user.password}
                  // eslint-disable-next-line no-undef
                  onChange={(e) => changeInputHandler(e, password)}
                  required
                />
              </div>
              <div className="input-block-check">
                <input type="checkbox" className="accept-ele" required />
                Remember me
                <Link to="/" className="btn-link">
                  Forgot your Password?
                </Link>
              </div>
              <div className="input-block">
                <button className="login-btn" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="input-block">
              <Link to="/Signup" className="login-to-signup">
                Create New Account
                <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
