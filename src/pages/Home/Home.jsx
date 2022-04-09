import React from "react";
import { img1, img4, img5 } from "../../assets/images/image";

export default function Home() {
  return (
    <div>
      <main className="main">
        <section className="main-section">
          <div className="product-cards">
            <div className="img-cards">
              <img src={img4} alt="women-top" className="image" />
            </div>
            <div className="img-cards">
              <img src={img4} alt="women-top" className="image" />
            </div>
            <div className="img-cards">
              <img src={img4} alt="women-top" className="image" />
            </div>
            <div className="img-cards">
              <img src={img4} alt="women-top" className="image" />
            </div>
            <div className="img-cards">
              <img src={img4} alt="women-top" className="image" />
            </div>
          </div>
        </section>
        <section className="main-section">
          <div className="branding">
            <img src={img1} alt="" className="img-ad" />
          </div>
        </section>
        <section className="main-section">
          <div className="card">
            <div className="container-horizon">
              <div className="oneside">
                <div className="image">
                  <a href="./assets/pages/product.html">
                    <img
                      src={img4}
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
                      src={img5}
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
    </div>
  );
}
