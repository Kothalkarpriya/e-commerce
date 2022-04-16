import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { FilterContextPro } from "./context/filterContext";
import { WishListPro } from "./context/wishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishListPro>
        <FilterContextPro>
          <App />
        </FilterContextPro>
      </WishListPro>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
