import React from "react";
import { useEffect } from "react";
import styles from "../styles/FirstHeading.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const FirstHeading = () => {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, []);

  return (
    <div className={styles.container}>
      <h1 data-aos="fade-up" className={styles.h1}>
        It’s Radiant. Next generation of wallet. <br /> Send money, make
        payments and more.
      </h1>
      <div className={styles.ellipse}></div>
      <a data-aos="fade-up" href="#" className={styles.explore}>
        Explore
      </a>
    </div>
  );
};

export default FirstHeading;
