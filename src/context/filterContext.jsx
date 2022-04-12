import {
  filterReducer,
  sortProd,
  ratingFun,
  CategoryHandler,
  priceFun,
} from "../components/component";
import { GetProd } from "./prodContext";
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
  const products = GetProd();

  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    rating: 5,
    category: [],
    maxPrice: 2000,
    minPrice:0,
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
