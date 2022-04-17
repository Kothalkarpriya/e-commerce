import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../backend/utils/wishListReducer";

const WishListContext = createContext();

function WishListPro({ children }) {
  const [state, dispatchWish] = useReducer(wishListReducer, {
    wishListItems: [],
  });
  return (
    <WishListContext.Provider value={{ state, dispatchWish }}>
      {children}
    </WishListContext.Provider>
  );
}

const useWishList = () => useContext(WishListContext);

export { WishListPro, useWishList };
