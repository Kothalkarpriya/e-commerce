import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
  FilterContextPro,
  WishListPro,
  CartContextPro,
  ProdContext,
  CategoryContextPro,
} from "./context/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProdContext>
        <CategoryContextPro>
          <CartContextPro>
            <WishListPro>
              <FilterContextPro>
                <App />
              </FilterContextPro>
            </WishListPro>
          </CartContextPro>
        </CategoryContextPro>
      </ProdContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
