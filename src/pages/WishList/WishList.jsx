import React from "react";
import { WishCard } from "../../components/component";
import { useWishList } from "../../context/wishListContext";
import { EmptyProd } from "../../components/component";

export default function WishList() {
  const { state } = useWishList();
  const wishList = state.wishListItems;

  const wishListMapping = () => {
    wishList.map((item, index) => {
      return (
        <WishCard
          key={item.id}
          id={item.id}
          sr={index + 1}
          prodName={item.title}
          price={item.price}
          img={item.imageUrl}
          Action={"prod"}
        />
      );
    });
  };
  return (
    <main>
      <section className="main-section">
        <div className="prod-heading upper-text">My Wishlist</div>
        <div className="wishlist-container">
          <div className="card">
            {wishList.length ? (
              <WishCard
                sr={"#"}
                prodName={"Product Name"}
                unitPrice={"Unit Price"}
                img={"Image"}
                Action={"Actions"}
              />
            ) : (
              ``
            )}

            {wishList.length ? wishListMapping() : EmptyProd("WISHLIST")}
          </div>
        </div>
      </section>
    </main>
  );
}
