import React from "react";
import { useEffect } from "react";
import styles from "../styles/SecondHeading.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SecondHeading = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={styles.col}>
      <h2 className={styles.h2}>
        Meet with{" "}
        <span data-aos="fade" className="rd">
          Radiant
        </span>
      </h2>
      <p className={styles.second_p}>
        Radiant is e-wallet built for security and fast transactions. You can
        create your Radiant account in seconds. It’s easy, secure and fast.
      </p>
    </section>
  );
};

export default SecondHeading;
