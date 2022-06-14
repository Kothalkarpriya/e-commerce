import { Routes, Route } from "react-router-dom";
import {
  Home,
  WishList,
  ProductListing,
  Cart,
  Login,
  Signup,
} from "../pages/index";
import RouteAuth from "./RouteAuth";

export default function Routespath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Cart"
        element={
          <RouteAuth>
            <Cart />
          </RouteAuth>
        }
      />
      <Route
        path="/WishList"
        element={
          <RouteAuth>
            <WishList />
          </RouteAuth>
        }
      />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ProductListing" element={<ProductListing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
