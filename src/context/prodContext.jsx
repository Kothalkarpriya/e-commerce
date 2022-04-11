import { createContext, useContext } from "react";
import { products } from "../backend/db/products";

const ProductContext = createContext(products);
function ProdContext({ children }) {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

const GetProd = () => useContext(ProductContext);

export { ProdContext, GetProd };
