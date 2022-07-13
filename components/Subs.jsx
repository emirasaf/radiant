import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Subs.module.css";

const Pay = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section>
      <div data-aos="fade" className={styles.box}>
        <div className="col">
          <h3>
            See your subscriptions <br /> at a glance.
          </h3>
          <p className={styles.p}>
            You can view and manage your subscriptions. You can easily make a
            plan change or service cancellation.
          </p>
        </div>
        <Image
          data-aos="fade-up"
          alt=""
          src="/assets/Spotify.png"
          width={471}
          height={279.75}
        />
      </div>
      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/UI5.png"
        width={465}
        height={624}
      />
    </section>
  );
};

export default Pay;
