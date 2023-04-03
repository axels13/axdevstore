import React, { useState } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "./Product.css";
import products from "../../products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import { addToCart } from "../../hook/actions";

const Product = () => {
  const { id } = useParams();
  const item = products.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const dispath = useDispatch();

  const handleAddToCart = () => {
    const itemToAdd = { ...item[0], quantity: quantity };
    dispath(addToCart(itemToAdd));
    setQuantity(0);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const hadnleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <section>
      <main className="product__container_page">
        <div className="product__image">
          <img src={item[0].img} alt="item-card" />
        </div>

        <div>
          <div className="product__card__id">
            <h2>{item[0].name}</h2>

            <span>${item[0].price}</span>
            <p className="product__text">{item[0].specs}</p>
            <div className="product__buttons">
              <button className="btn__one" onClick={hadnleDecrement}>
                -
              </button>
              <p className="quantity">{quantity}</p>
              <button className="btn__two" onClick={handleIncrement}>
                +
              </button>

              <button className="btn__three" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>

            <div className="product__icons">
              <span className="product__icons__category">
                Category: <span>{item[0].categories}</span>
              </span>
              <span className="product__icons__category">
                Share:{" "}
                <i>
                  <BsFacebook />
                </i>{" "}
                <i>
                  <AiOutlineTwitter />
                </i>{" "}
                <i>
                  {" "}
                  <AiOutlineInstagram />
                </i>{" "}
                <i>
                  <BsLinkedin />
                </i>
              </span>
            </div>
          </div>
        </div>
      </main>

      <aside className="product_aside">
        <h3 className="product__title">RELATED PRODUCTS</h3>

        <div>
          <div className="product__container">
            {products.slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Product;
