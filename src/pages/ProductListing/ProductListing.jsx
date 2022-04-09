import React from "react";
import { img4 } from "../../assets/images/image";
import { Navbar, Footer } from "../../components/component";

export default function ProductListing() {
  return (
    <div>
    <Navbar />
      <main>
        <section class="main-section">
          <div class="product-container">
            <aside class="filter-aside">
              <div class="prod-head">
                <div class="prod-brand">Filter</div>
                <div class="prod-clear">Clear</div>
              </div>
              <div class="prod-price">
                <div class="filter-heading">Price</div>
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
              <div class="prod-category">
                <div class="filter-heading">Category</div>
                <ul class="filter-list">
                  <li class="filter-list-item">
                    <label>
                      <input type="radio" name="men-cloth" />
                      Men
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label for="">
                      <input type="radio" name="women-cloth" />
                      Women
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label for="">
                      <input type="radio" name="kid-cloth" />
                      Kid
                    </label>
                  </li>
                </ul>
              </div>
              <div class="prod-rating">
                <div class="filter-heading">Rating</div>
                <ul class="filter-list">
                  <li class="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                      <i class="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li class="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                      <i class="fa fa-star-o"></i>
                      <i class="fa fa-star-o"></i>
                    </label>
                  </li>
                </ul>
              </div>
            </aside>
            <article class="products">
              <div class="prod-heading upper-text">All Products</div>
              <div class="product-card">
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
      <Footer />
    </div>
  );
}
