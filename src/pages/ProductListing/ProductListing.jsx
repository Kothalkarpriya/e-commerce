import React, { useContext } from "react";
import { Filter, ProdCard } from "../../components/component";
import { ProductContext } from "../../context/prodContext";

export default function ProductListing() {
  const prodList = useContext(ProductContext);
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
}
