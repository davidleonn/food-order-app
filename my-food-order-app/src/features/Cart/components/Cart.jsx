import React from "react";

import styles from "../styles/Cart.module.css";
import Modal from "../../UI/components/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ key: "id", id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
