import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import About from "./Pages/About.js";
import Cart from "./Pages/Cart.js";
import ProductDetails from "./Pages/ProductDetails.js";
import Products from "./Pages/Products.js";
import Layout from "./Layout/Layout.js";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/fetch/fetchSlice.js";
function App() {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

  }, []);
  return (
    
      <BrowserRouter>
       <Layout> <Routes>
          <Route path="/" element={<Navigate to="/Homepage" replace />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes></Layout>
      </BrowserRouter>
    
  );
}

export default App;
