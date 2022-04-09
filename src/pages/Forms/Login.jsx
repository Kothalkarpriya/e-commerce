import React from "react";
import {Link} from "react-router-dom";
import { Navbar, Footer } from "../../components/component";

export default function Login() {
  return (
    <div>
    <Navbar />
      <main class="main">
        <section class="main-section">
          <div class="login">
            <h2 class="heading">Login</h2>
            <form action="" class="login-form" id="login">
              <div class="input-block">
                <label for="#input-email">Email Address</label>
                <input
                  type="email"
                  id="input-email"
                  placeholder="username@email.com"
                  required
                />
              </div>
              <div class="input-block">
                <label for="input-pass">Password</label>
                <input
                  type="password"
                  id="input-pass"
                  class="input-password"
                  placeholder="*************"
                  required
                />
              </div>
              <div class="input-block-check">
                <input type="checkbox" class="accept-ele" required />
                Remember me
                <Link to="/" class="btn-link">
                  Forgot your Password?
                </Link>
              </div>
              <div class="input-block">
                <button class="login-btn">Login</button>
              </div>
            </form>

            <div class="input-block">
              <Link to="/Signup" class="login-to-signup">
                Create New Account
                <i class="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
