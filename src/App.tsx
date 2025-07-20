import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Products from "./Pages/Products.jsx";
import Layout from "./Layout/Layout.jsx";
function App() {
  return (
    
      <BrowserRouter>
       <Layout> <Routes>
          <Route path="/" element={<Navigate to="/Homepage" replace />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes></Layout>
      </BrowserRouter>
    
  );
}

export default App;
