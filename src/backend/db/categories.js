import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "women-cloth",
    description: "Women's designer clothing to get a good look",
  },
  {
    _id: uuid(),
    categoryName: "men-cloth",
    description: "Men's trendy clothing to get a trendy look",
  },
  {
    _id: uuid(),
    categoryName: "kid-cloth",
    description: "Men's trendy clothing to get a trendy look",
  },
];
