import React from "react";
import { img4 } from "../../assets/images/image";

export default function WishList() {
  return (
    <div>
      <main>
        <section className="main-section">
          <div className="prod-heading upper-text">My Wishlist</div>
          <div className="wishlist-container">
            <div className="card">
              <div className="container">
                <div className="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    className="img"
                  />
                  <div className="img-badge">
                    <i className="fa fa-heart"></i>
                  </div>
                </div>
                <div className="text text-align-center">
                  <p className="small-text">Women Western Top</p>
                  <p className="large-text">Rs.600</p>
                </div>
                <div className="card-buttons">
                  <button type="submit" className="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div className="container">
                <div className="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    className="img"
                  />
                  <div className="img-badge">
                    <i className="fa fa-heart"></i>
                  </div>
                </div>
                <div className="text text-align-center">
                  <p className="small-text">Women Western Top</p>
                  <p className="large-text">Rs.600</p>
                </div>
                <div className="card-buttons">
                  <button type="submit" className="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div className="container">
                <div className="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    className="img"
                  />
                  <div className="img-badge">
                    <i className="fa fa-heart"></i>
                  </div>
                </div>
                <div className="text text-align-center">
                  <p className="small-text">Women Western Top</p>
                  <p className="large-text">Rs.600</p>
                </div>
                <div className="card-buttons">
                  <button type="submit" className="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
              <div className="container">
                <div className="image">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    className="img"
                  />
                  <div className="img-badge">
                    <i className="fa fa-heart"></i>
                  </div>
                </div>
                <div className="text text-align-center">
                  <p className="small-text">Women Western Top</p>
                  <p className="large-text">Rs.600</p>
                </div>
                <div className="card-buttons">
                  <button type="submit" className="btn card-btn-items">
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
