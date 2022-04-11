import React from "react";
import { Filter, ProdCard } from "../../components/component";
import { GetProd } from "../../context/prodContext";

export default function ProductListing() {
  const prodList = GetProd();
  return (
    <div>
        <section className="main-section">
          <div className="product-container">
            <Filter />
            <article className="products">
              <div className="prod-heading upper-text">All Products</div>
              <div className="product-card">
                <div className="card">
                  {prodList.map((item) => {
                    return (
                      <ProdCard
                        id={item._id}
                        cardTitle={item.title}
                        cardPrice={item.price}
                        image={item.imageUrl}
                      />
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        </section>
    </div>
  );
}
