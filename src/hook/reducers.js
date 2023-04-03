import { createReducer } from "@reduxjs/toolkit";

import { addToCart, removeFromCart, updateQuantity } from "./actions";

const initialState = {
  items: [],
};

const cartReducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      state.items.push(item);
    }
  },
  [removeFromCart]: (state, action) => {
    const itemId = action.payload;
    state.items = state.items.filter((i) => i.id !== itemId);
  },

  [updateQuantity]: (state, action) => {
    const { id, quantity } = action.payload;
    const item = state.items.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
    }
  },
});

export default cartReducer;
