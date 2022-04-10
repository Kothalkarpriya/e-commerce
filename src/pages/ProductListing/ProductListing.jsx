import React from "react";
import { img4 } from "../../assets/images/image";

export default function ProductListing() {
  return (
    <div>
      <main>
        <section className="main-section">
          <div className="product-container">
            <aside className="filter-aside">
              <div className="prod-head">
                <div className="prod-brand">Filter</div>
                <div className="prod-clear">Clear</div>
              </div>
              <div className="prod-price">
                <div className="filter-heading">Price</div>
                <input
                  type="range"
                  value="35"
                  name="range-input"
                  min="500"
                  max="2000"
                  oninput="this.nextElementSibling.value = this.value"
                />
                <output>500</output>
              </div>
              <div className="prod-category">
                <div className="filter-heading">Category</div>
                <ul className="filter-list">
                  <li className="filter-list-item">
                    <label>
                      <input type="radio" name="men-cloth" />
                      Men
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label for="">
                      <input type="radio" name="women-cloth" />
                      Women
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label for="">
                      <input type="radio" name="kid-cloth" />
                      Kid
                    </label>
                  </li>
                </ul>
              </div>
              <div className="prod-rating">
                <div className="filter-heading">Rating</div>
                <ul className="filter-list">
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                </ul>
              </div>
            </aside>
            <article className="products">
              <div className="prod-heading upper-text">All Products</div>
              <div className="product-card">
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
