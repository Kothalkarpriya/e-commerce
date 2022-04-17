/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import useAxios from "../backend/utils/axiosProd";

const ProductContext = createContext();
function ProdContext({ children }) {

  const [api, setApi] = useState("/api/products");
  const { loading, error, dataResponse } = useAxios(api);
  const products = dataResponse?.products||[];
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProd = () => useContext(ProductContext);

export { ProdContext, useProd };
