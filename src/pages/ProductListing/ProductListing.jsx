import React from "react";
import { Filter, ProdCard, EmptyProd } from "../../components/component";
import { useFilters } from "../../context/filterContext";

export default function ProductListing() {
  const prodList = useFilters().filteredList;
  const prodMapping = () => {
    prodList.map((item) => {
      return (
        <ProdCard
          key={item._id}
          id={item._id}
          cardTitle={item.title}
          cardPrice={item.price}
          cardRating={item.rating}
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
