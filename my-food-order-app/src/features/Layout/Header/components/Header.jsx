import React from "react";

import styles from "../styles/Header.module.css";
import mealsImage from "../../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
}

export default Header;
