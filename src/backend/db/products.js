import { v4 as uuid } from "uuid";
import { img4, img5, img6 } from "../../assets/images/image";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageUrl: { img4 },
    isLiked: false,
    rating: "4.3",
    title: "Women Western Top",
    price: "600",
    categoryName: "women-cloth",
  },
  {
    _id: uuid(),
    imageUrl: { img5 },
    isLiked: false,
    rating: "4.2",
    title: "Men Black Shirt",
    price: "800",
    categoryName: "men-cloth",
  },
  {
    _id: uuid(),
    imageUrl: { img6 },
    isLiked: false,
    rating: "4",
    title: "Kid Dungaree Set",
    price: "1000",
    categoryName: "kid-cloth",
  },
];
