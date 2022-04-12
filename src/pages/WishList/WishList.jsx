  import React from "react";
  import { WishCard } from "../../components/component";

  export default function WishList() {
    return (
      <main>
        <section className="main-section">
          <div className="prod-heading upper-text">My Wishlist</div>
          <div className="wishlist-container">
            <div className="card">
              <WishCard />
            </div>
          </div>
        </section>
      </main>
    );
  }
