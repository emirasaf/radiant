import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className="rd">Radiant</span>
      </div>
    </header>
  );
};

export default Header;
