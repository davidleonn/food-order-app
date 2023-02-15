import React from "react";

import CartContext from "./cart-context";

function CartProvider(props) {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
