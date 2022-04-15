import React from "react";
import { Filter, ProdCard, EmptyProd } from "../../components/component";
import { GetProd } from "../../context/prodContext";

export default function ProductListing() {
  const prodList = GetProd();
  const prodMapping = () => {
    prodList.map((item, index) => {
      return (
        <ProdCard
        sr={index+1}
          id={item._id}
          cardTitle={item.title}
          cardPrice={item.price}
          image={item.imageUrl}
        />
      );
    });
  };
  return (
    <section className="main-section">
      <div className="product-container">
        <Filter />
        <article className="products">
          <div className="prod-heading upper-text">All Products</div>
          <div className="product-card">
            {prodList.length ? (
              <div className="card">{prodMapping()}</div>
            ) : (
              EmptyProd("PRODUCT")
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
