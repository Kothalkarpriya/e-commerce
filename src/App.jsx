import "./App.css";
import { Home, WishList, ProductListing, Cart, Login, Signup } from "./pages";
import { Navbar, Footer } from "./components/component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
