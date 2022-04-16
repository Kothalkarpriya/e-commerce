import React from "react";

export default function EmptyProd(route) {
  function errorFind(route) {
    switch (route) {
      case "PRODUCT":
        return "You Have No products here!";
      case "WISHLIST":
        return "You have no items in WIshlist";
      case "CARTLIST":
        return "You have no items in Cart";
      default:
        break;
    }
  }

  return <h3>{errorFind(route)}</h3>;
}
