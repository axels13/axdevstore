import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter basename="/axdevstore">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
