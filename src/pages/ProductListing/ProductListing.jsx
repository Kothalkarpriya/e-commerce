import React from "react";
import { Filter, ProdCard } from "../../components/component";
import { useFilters } from "../../context/filterContext";

export default function ProductListing() {
  const { filteredList } = useFilters();
  return (
    <section className="main-section">
      <div className="product-container">
        <Filter />
        <article className="products">
          <div className="prod-heading upper-text">All Products</div>
          <div className="product-card">
            <div className="card">
              {filteredList?.map((item) => {
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
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
