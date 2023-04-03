import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./header.css";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log(totalItems);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  return (
    <header>
      <nav className="header__container">
        <div>
          <ul className={`nav__menu  ${isOpen ? "nav__menu open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <span>AXDEVSTORE.</span>
        </div>

        <div>
          <ul className="ul__icons">
            <li>
              <span onClick={() => setShowCart(!showCart)}>
                <span className="cart__card_container">
                  <FaShoppingCart />
                  <span className="cart__count">{totalItems}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>

        <button className="header__button" onClick={handleMenuClick}>
          <span>{isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} </span>
        </button>
      </nav>
      {showCart && <Cart handleCloseCart={handleCloseCart} />}
    </header>
  );
};

export default Header;
