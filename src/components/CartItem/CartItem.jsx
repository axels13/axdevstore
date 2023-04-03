import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = ({ item, handleRemoveFromCart, handleQuantityChange }) => {
  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      handleQuantityChange(item.id, item.quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    handleQuantityChange(item.id, item.quantity + 1);
  };
  return (
    <div className="cart__items">
      <img src={item.img} width={100} />
      <div>
        <div className="card__titles">
          <h4>{item.name}</h4>
          <span onClick={() => handleRemoveFromCart(item.id)}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="cart__buttons">
          <button
            className="cart__buttons__left"
            onClick={handleQuantityDecrease}
          >
            -
          </button>
          <p className="cart__buttons__center">0</p>
          <button
            className="cart__buttons__rigth"
            onClick={handleQuantityIncrease}
          >
            +
          </button>
        </div>
        <span>
          {item.quantity} X ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
