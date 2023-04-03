import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
