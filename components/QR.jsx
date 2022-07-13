import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/QR.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const QR = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles.section}>
      <div data-aos="fade-right" className={styles.photo}>
        <Image alt="" src="/assets/QR.png" width={200} height={200} />
      </div>
      <div data-aos="fade-right" className="col">
        <p className={styles.pr}>
          Make fast payments with QR code feature. <br />
          <br /> Use <span className="rd">Radiant</span>Business to get payments
          from your customers.
        </p>
      </div>
    </section>
  );
};

export default QR;
