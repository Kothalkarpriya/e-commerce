import React from "react";
import {
  img1,
  img4,
  img5,
  img10,
  imgm3,
  img14,
  img8,
  imgm5,
  imgm8,
} from "../../assests/image";
import { Link, useNavigate } from "react-router-dom";
import "../../assests/responsive.css";

export default function Home() {
  const navigate = useNavigate();

  const explore = () => {
    navigate("/ProductListing");
  };
  return (
    <main className="main">
      <section className="main-section">
        <div className="product-cards">
          <div className="img-cards" onClick={explore}>
            <img src={imgm5} alt="women-top" className="image" />
          </div>
          <div className="img-cards" onClick={explore}>
            <img src={img10} alt="women-top" className="image" />
          </div>
          <div className="img-cards" onClick={explore}>
            <img src={imgm3} alt="women-top" className="image" />
          </div>
          <div className="img-cards" onClick={explore}>
            <img src={img8} alt="women-top" className="image" />
          </div>
          <div className="img-cards" onClick={explore}>
            <img src={img14} alt="women-top" className="image" />
          </div>
          <div className="img-cards" onClick={explore}>
            <img src={imgm8} alt="women-top" className="image" />
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="branding" onClick={explore}>
          <img src={img1} alt="" className="img-ad" />
        </div>
      </section>
      <section className="main-section">
        <div className="card">
          <div className="container-horizon">
            <div className="oneside">
              <div className="image">
                <Link to="/ProductListing">
                  <img
                    src={img4}
                    alt="sunset-and-glass-mug"
                    className="img-horizon"
                  />
                </Link>
              </div>
              <div className="text-horizon text-align-left">
                <div className="text-badge">New Arrival</div>
                <h3>Explore Products</h3>
                Check out our Best winter collection to stay warm in style this
                season
              </div>
            </div>
          </div>
          <div className="container-horizon">
            <div className="oneside">
              <div className="image">
                <Link to="/ProductListing">
                  <img
                    src={img5}
                    alt="sunset-and-glass-mug"
                    className="img-horizon"
                  />
                </Link>
              </div>
              <div className="text-horizon text-align-left">
                <div className="text-badge"> New Arrival</div>
                <h3>Explore Products</h3>
                Check out our Best Summer collection to stay warm in style this
                season
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
