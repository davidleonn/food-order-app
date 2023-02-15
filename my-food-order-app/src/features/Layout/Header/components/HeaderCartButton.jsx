import React from "react";

import styles from "../styles/HeaderCartButton.module.css";
import CartIcon from "../../../Cart/components/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
