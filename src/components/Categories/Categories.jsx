import React, { useEffect, useState } from "react";
import cat0 from "../../assets/category/all.jpg";
import cat1 from "../../assets/category/cat-1.jpg";
import cat2 from "../../assets/category/cat-2.jpg";
import cat3 from "../../assets/category/cat-3.jpg";
import cat4 from "../../assets/category/cat-4.jpg";
import "./Categories.css";
import products from "../../products";
import Product from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
const Categories = () => {
  const [categories, setCategories] = useState("All");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (categories === "All") {
      setAllProducts(products);
    }

    if (categories === "headphone") {
      const filteredProducts = products.filter(
        (item) => item.categories === "headphone"
      );
      setAllProducts(filteredProducts);
    }

    if (categories === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.categories === "wireless"
      );
      setAllProducts(filteredProducts);
    }

    if (categories === "watches") {
      const filteredProducts = products.filter(
        (item) => item.categories === "watches"
      );
      setAllProducts(filteredProducts);
    }

    if (categories === "spekers") {
      const filteredProducts = products.filter(
        (item) => item.categories === "spekers"
      );
      setAllProducts(filteredProducts);
    }
  }, [categories]);

  return (
    <aside>
      <div className="categories__container">
        <div onClick={() => setCategories("All")}>
          <h5 className="title__all">ALL COMPONENTS</h5>
          <img src={cat0} alt="" className="all" />
        </div>
        <div onClick={() => setCategories("headphone")}>
          <img src={cat1} alt="" />
        </div>
        <div onClick={() => setCategories("spekers")}>
          <img src={cat2} alt="" />
        </div>
        <div onClick={() => setCategories("watches")}>
          <img src={cat3} alt="" />
        </div>
        <div onClick={() => setCategories("wireless")}>
          <img src={cat4} alt="" />
        </div>
      </div>

      <div className="product__container">
        {allProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </aside>
  );
};

export default Categories;
