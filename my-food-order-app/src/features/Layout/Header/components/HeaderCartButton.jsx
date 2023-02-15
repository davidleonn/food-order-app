import React, { useContext } from "react";

import styles from "../styles/HeaderCartButton.module.css";
import CartIcon from "../../../Cart/components/CartIcon";
import CartContext from "../../../../store/cart-context";

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
