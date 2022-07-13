import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Cashbacks.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Pay = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="col">
      <div data-aos="fade" className="column">
        <h3>
          <Image
            data-aos="fade-up"
            alt=""
            src="/assets/Cashbacks.png"
            width={195}
            height={28}
          />
        </h3>
        <p className={styles.p}>
          If you have a RadiantCard you can use cashabacks. With Cashbacks, you
          get instant refunds at certain rates of your purchases.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image alt="" src="/assets/CB.png" width={202.5} height={202} />
          <a href="" className={styles.link}>
            View more on app →
          </a>
        </div>
        <Image
          data-aos="fade-up"
          alt=""
          src="/assets/UI4.png"
          width={465}
          height={411}
        />
      </div>
    </section>
  );
};

export default Pay;
