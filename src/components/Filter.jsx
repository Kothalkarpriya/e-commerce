import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useFilters } from "../context/filterContext";

export default function Filter() {
  const { state, filterDispatch } = useFilters();
  return (
    <div>
      <aside className="filter-aside">
        <div className="prod-head">
          <div className="prod-brand">Filter</div>
          <div
            className="prod-clear"
            onClick={() => filterDispatch({ type: "RESET" })}
          >
            Clear
          </div>
        </div>
        <div className="prod-price">
          <div className="filter-heading">Price</div>
          <input
            type="radio"
            value={state.maxPrice}
            name="sortby"
            min="500"
            max="2000"
            id="myRange"
            onClick={(e) =>
              filterDispatch({ type: "MAXPRICE", payload: e.target.value })
            }
          />
          <output>{state.maxPrice}</output>
        </div>
        <div className="prod-category">
          <div className="filter-heading">Category</div>
          <ul className="filter-list">
            <li className="filter-list-item">
              <input
                type="checkbox"
                name="shopping"
                value="women-cloth"
                checked={state.category.includes("women-cloth")}
                onClick={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
                id="women-cloth"
              />
              <label htmlFor="women-cloth">Women Clothing</label>
            </li>
            <li className="filter-list-item">
              <input
                type="checkbox"
                name="shopping"
                value="men-cloth"
                checked={state.category.includes("men-cloth")}
                onClick={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
                id="men-cloth"
              />
              <label htmlFor="men-cloth">Men Clothing</label>
            </li>
            <li className="filter-list-item">
              <input
                type="checkbox"
                name="shopping"
                value="kid-cloth"
                checked={state.category.includes("kid-cloth")}
                onClick={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
                id="kid-cloth"
              />
              <label htmlFor="kid-cloth">Kid Clothing</label>
            </li>
          </ul>
        </div>
        <div className="prod-rating">
          <div className="filter-heading">Rating</div>
          <ul className="filter-list">
            <li className="filter-list-item">
              <input
                type="radio"
                value="4"
                name="rating"
                id="fourStar"
                onClick={(e) =>
                  filterDispatch({ type: "RATINGS", payload: e.target.value })
                }
                checked={state.rating === "4"}
              />
              <label htmlFor="fourStar">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </label>
            </li>
            <li className="filter-list-item">
              <input
                type="radio"
                value="3"
                name="rating"
                id="threeStar"
                onClick={(e) =>
                  filterDispatch({ type: "RATINGS", payload: e.target.value })
                }
                checked={state.rating === "3"}
              />
              <label htmlFor="threeStar">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </label>
            </li>
            <li className="filter-list-item">
              <input
                type="radio"
                value="2"
                name="rating"
                id="twoStar"
                onClick={(e) =>
                  filterDispatch({ type: "RATINGS", payload: e.target.value })
                }
                checked={state.rating === "2"}
              />
              <label htmlFor="twoStar">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
                <BsStar />
              </label>
            </li>
            <li className="filter-list-item">
              <input
                type="radio"
                value="1"
                name="rating"
                id="oneStar"
                onClick={(e) =>
                  filterDispatch({ type: "RATINGS", payload: e.target.value })
                }
                checked={state.rating === "1"}
              />
              <label htmlFor="oneStar">
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
                <BsStar />
                <BsStar />
              </label>
            </li>
          </ul>
        </div>
        <div className="prod-sorting">
          <div className="filter-heading">Category</div>
          <ul className="filter-list">
            <li className="filter-list-item">
              <input
                name="sort"
                checked={state.sort === "PRICE_A"}
                className="mg-sm"
                type="radio"
                value="PRICE_A"
                id="sortByPrice"
                onClick={(e) =>
                  filterDispatch({ type: "SORT", payload: e.target.value })
                }
              />
              <label htmlFor="sortByPrice">Price(Low to High)</label>
            </li>
            <li className="filter-list-item">
              <input
                name="sort"
                checked={state.sort === "PRICE_D"}
                className="mg-sm"
                type="radio"
                value="PRICE_D"
                id="sortByPrice"
                onClick={(e) =>
                  filterDispatch({ type: "SORT", payload: e.target.value })
                }
              />
              <label htmlFor="sortByPrice">Price(High to Low)</label>
            </li>
            <li className="filter-list-item">
              <input
                className="mg-sm"
                type="radio"
                checked={state.sort === "RATING_A"}
                name="sort"
                value="RATING_A"
                id="sortByRating"
                onClick={(e) =>
                  filterDispatch({ type: "SORT", payload: e.target.value })
                }
              />
              <label htmlFor="sortByRating">Ratings(Low to High)</label>
            </li>
            <li className="filter-list-item">
              <input
                className="mg-sm"
                type="radio"
                checked={state.sort === "RATING_D"}
                name="sort"
                value="RATING_D"
                id="sortByRating"
                onClick={(e) =>
                  filterDispatch({ type: "SORT", payload: e.target.value })
                }
              />
              <label htmlFor="sortByRating">Ratings(High to Low)</label>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
