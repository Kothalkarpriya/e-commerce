import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { FilterContextPro } from "./context/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextPro>
        <App />
      </FilterContextPro>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
