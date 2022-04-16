import {
  sortProd,
  ratingFun,
  CategoryHandler,
  priceFun,
} from "../backend/utils/filterComp";
import filterReducer from "../backend/utils/filterReducer";
import { useProd } from "./prodContext";
import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const filter =
  (state, ...allFilters) =>
  (data) => {
    return allFilters.reduce((acc, currentVal) => {
      return currentVal(state, acc);
    }, data);
  };

const FilterContextPro = ({ children }) => {
  const products = useProd();

  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    rating: 1,
    category: [],
    maxPrice: 2000,
  });

  const filteredList = filter(
    state,
    sortProd,
    ratingFun,
    CategoryHandler,
    priceFun
  )(products);

  return (
    <FilterContext.Provider value={{ state, filterDispatch, filteredList }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => useContext(FilterContext);

export { useFilters, FilterContextPro };
