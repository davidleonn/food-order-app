import React, { useContext, useEffect, useState } from "react";

import styles from "../styles/HeaderCartButton.module.css";
import CartIcon from "../../../Cart/components/CartIcon";
import CartContext from "../../../../store/cart-context";

function HeaderCartButton(props) {
  const [buttonIsHighlighted, setButtonisHighlighted] = useState(false);

  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonisHighlighted(true);

    const timer = setTimeout(() => {
      setButtonisHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
