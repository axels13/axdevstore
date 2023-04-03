import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../../hook/actions";
const Cart = ({ handleCloseCart }) => {
  //uso useSelector para obtener los datos del store y useDispatch para despachar las acciones de Redux.
  const items = useSelector((state) => state.cart.items);
  const dispath = useDispatch();
  console.log(items);

  const handleRemoveFromCart = (itemId) => {
    dispath(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    dispath(updateQuantity({ id: itemId, quantity }));
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <div>
      <div className="cart__wall">
        <div className="cart__container">
          <div className="cart__card">
            <h3>SHOPPING CART</h3>
            <span className="cart_close" onClick={handleCloseCart}>
              <AiOutlineClose />
              CLOSE
            </span>
            <div className="line"></div>
          </div>

          <div>
            {items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleRemoveFromCart={handleRemoveFromCart}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          <div className="cart__bottom">
            <div className="">
              <span className="cart__span_price">
                <span>SUBTOTAL: </span> <span> ${calculateSubtotal()}</span>
              </span>
            </div>
            <button className="cart__btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
