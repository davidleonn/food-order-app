import React, { Fragment } from "react";

import styles from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
}

export default Header;
