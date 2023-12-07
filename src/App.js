import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

import { useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Products/ProductDetails";

import Layout from "./View/Share/Layout";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductSearch from "./components/Products/ProductSearch";
function App() {
  const products = useContext(ProductsContext);
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:keyword" element={<ProductSearch />} />
          {/* <Route path="/cart/checkout" element={<CheckOut />} /> */}
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
