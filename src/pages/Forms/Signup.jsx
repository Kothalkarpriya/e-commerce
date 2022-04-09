import React from "react";
import { Navbar, Footer } from "../../components/component";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <main class="main">
        <section class="main-section">
          <div class="signup">
            <h2 class="heading">Signup</h2>
            <form action="" class="signup-form" id="signup">
              <div class="input-block-name">
                <div class="input-block">
                  <label for="#input-name">First Name</label>
                  <input
                    type="text"
                    id="input-name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="input-block">
                  <label for="#input-lastname">Last Name</label>
                  <input
                    type="text"
                    id="input-lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
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
              <div class="input-block">
                <label for="input-pass-again">Confirm Password</label>
                <input
                  type="password"
                  id="input-pass-again"
                  class="confirm-password"
                  placeholder="*************"
                  required
                />
                <div class="input-block-check">
                  <input type="checkbox" name="checkPass" id="check-box" />
                  Show Password
                </div>
              </div>

              <div class="input-block-check">
                <input type="checkbox" class="accept-ele" required />I accept
                all Terms & condition
              </div>
              <div class="input-block">
                <button class="signup-btn">Create New Account</button>
              </div>
            </form>

            <div class="input-block">
              <Link to="/Login" class="signup-to-login">
                Already have an account
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
