import { createContext, useContext } from "react";
import useAxios from "../backend/utils/axiosProd.jsx";

const categoryContext = createContext();

function CategoryContextPro({ children }) {
  const { dataResponse, loading, error } = useAxios("/api/categories");
  const categories = dataResponse?.categories || [];
  return (
    <categoryContext.Provider value={categories}>
      {children}
    </categoryContext.Provider>
  );
}

const GetCategory = () => useContext(categoryContext);

export { CategoryContextPro, GetCategory };
