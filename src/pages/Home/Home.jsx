export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand upper-text">
          <a href="/home.html" className="nav-brand-link">
            Shoppers Stop
          </a>
        </div>
        <div className="nav-collapse">
          <div className="hamburger">
            <i className="fa fa-bars"></i>
            <i className="fa fa-times"></i>
          </div>
          <ul className="nav-list-group vert">
            <li className="list-ele">
              <a href="./assets/pages/signup.html" className="nav-link">
                Login
              </a>
            </li>
            <li className="list-ele">
              <a href="./assets/pages/wishlist-page.html" className="nav-link">
                <i className="fa fa-heart-o"></i>
              </a>
            </li>
            <li className="list-ele">
              <a href="./assets/pages/cart-page.html" className="nav-link">
                <i className="fa fa-shopping-cart"></i>Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <section className="main-section">
          <div className="product-cards">
            <div className="img-cards">
              <img
                src="./assets/home/image-4.jpg"
                alt="women-top"
                className="image"
              />
            </div>
            <div className="img-cards">
              <img
                src="./assets/home/image-4.jpg"
                alt="women-top"
                className="image"
              />
            </div>
            <div className="img-cards">
              <img
                src="./assets/home/image-4.jpg"
                alt="women-top"
                className="image"
              />
            </div>
            <div className="img-cards">
              <img
                src="./assets/home/image-4.jpg"
                alt="women-top"
                className="image"
              />
            </div>
            <div className="img-cards">
              <img
                src="./assets/home/image-4.jpg"
                alt="women-top"
                className="image"
              />
            </div>
          </div>
        </section>
        <section className="main-section">
          <div className="branding">
            <img src="./assets/home/image-1.webp" alt="" className="img-ad" />
          </div>
        </section>
        <section className="main-section">
          <div className="card">
            <div className="container-horizon">
              <div className="oneside">
                <div className="image">
                  <a href="./assets/pages/product.html">
                    <img
                      src="./assets/home/image-4.jpg"
                      alt="sunset-and-glass-mug"
                      className="img-horizon"
                    />
                  </a>
                </div>
                <div className="text-horizon text-align-left">
                  <div className="text-badge">New Arrival</div>
                  <h3>Summer Collection</h3>
                  Check out our Best winter collection to stay warm in style
                  this season
                </div>
              </div>
            </div>
            <div className="container-horizon">
              <div className="oneside">
                <div className="image">
                  <a href="/assets/pages/product.html">
                    <img
                      src="/assets/home/image-5.jpg"
                      alt="sunset-and-glass-mug"
                      className="img-horizon"
                    />
                  </a>
                </div>
                <div className="text-horizon text-align-left">
                  <div className="text-badge"> New Arrival</div>
                  <h3>Summer Collection</h3>
                  Check out our Best winter collection to stay warm in style
                  this season
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-align-center">
        <a
          href="https://www.linkedin.com/in/priyakothalkar/"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a
          href="https://twitter.com/PriyaKothalkar"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter-square"></i>
        </a>
        <a
          href="https://github.com/Kothalkarpriya"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github-square"></i>
        </a>
        <p>Made by Priya Kothalkar</p>
      </footer>
    </div>
  );
}
