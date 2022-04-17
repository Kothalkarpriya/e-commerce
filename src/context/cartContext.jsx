import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../backend/utils/cartReducer";

const CartContext = createContext();

function CartContextPro({ children }) {
  const [state, dispatchCart] = useReducer(CartReducer, {
    CartItems: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
export { CartContextPro, useCart };
