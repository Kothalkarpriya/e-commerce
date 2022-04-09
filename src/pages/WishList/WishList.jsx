import React from "react";
import { img4 } from "../../assets/images/image";
import { Navbar, Footer } from "../../components/component";

export default function WishList() {
  return (
    <div>
    <Navbar />
      <main>
        <section class="main-section">
          <div class="prod-heading upper-text">My Wishlist</div>
          <div class="wishlist-container">
            <div class="card">
              <div class="container">
                <div class="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    class="img"
                  />
                  <div class="img-badge">
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="text text-align-center">
                  <p class="small-text">Women Western Top</p>
                  <p class="large-text">Rs.600</p>
                </div>
                <div class="card-buttons">
                  <button type="submit" class="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div class="container">
                <div class="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    class="img"
                  />
                  <div class="img-badge">
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="text text-align-center">
                  <p class="small-text">Women Western Top</p>
                  <p class="large-text">Rs.600</p>
                </div>
                <div class="card-buttons">
                  <button type="submit" class="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div class="container">
                <div class="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    class="img"
                  />
                  <div class="img-badge">
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="text text-align-center">
                  <p class="small-text">Women Western Top</p>
                  <p class="large-text">Rs.600</p>
                </div>
                <div class="card-buttons">
                  <button type="submit" class="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div class="container">
                <div class="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    class="img"
                  />
                  <div class="img-badge">
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="text text-align-center">
                  <p class="small-text">Women Western Top</p>
                  <p class="large-text">Rs.600</p>
                </div>
                <div class="card-buttons">
                  <button type="submit" class="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
