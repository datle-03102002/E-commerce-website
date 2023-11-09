import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";
import Cart from "./Pages/Cart";
import ProductDetail from "./components/Products/ProductDetails";
function App() {
  const products = useContext(ProductsContext);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
