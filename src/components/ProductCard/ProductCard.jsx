import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product__card">
      <Link to={`/product/${product.id}`}>
        <div className="card">
          <img src={product.img} alt={product.name} className="product__img" />
          <div>
            <h4>{product.name}</h4>
            <span>${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
