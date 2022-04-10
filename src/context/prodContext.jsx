import { createContext} from "react";
import { products } from "../backend/db/products";

const ProductContext = createContext(products);
function ProdContext({ children }) {
  return (
    <ProductContext.Provider value={{ ProductContext }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProdContext, ProductContext };
