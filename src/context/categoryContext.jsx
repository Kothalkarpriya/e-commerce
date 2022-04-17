import { createContext, useContext } from "react";
import useAxios from "../backend/utils/axiosProd.jsx";

const CategoryContext = createContext();

function CategoryContextPro({ children }) {
  const { dataResponse } = useAxios("/api/categories");
  const categories = dataResponse?.categories || [];
  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
}

const GetCategory = () => useContext(CategoryContext);

export { CategoryContextPro, GetCategory };
