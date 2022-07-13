import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Pay = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section>
      <div data-aos="fade" className="column">
        <h3>
          Introducing <span className="rd">Radiant</span>Card
        </h3>
        <p>
          Here’s the RadiantCard. You can use RadiantCard as debit card.
          RadiantCard powered by Mastercard. You can use RadiantCard everywhere
          where supports Mastercard. <br />
          <br /> You can use RadiantCard online too. You can confirm 3D Secure
          process with your fingerprint or face recognition. <br />
          <br />
          You can get your RadiantCard for free. Usage fee etc. does not exist.
        </p>
        <a href="" className={styles.get}>
          Get it Now
        </a>
      </div>

      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/Card.png"
        width={460.5}
        height={655.5}
      />
    </section>
  );
};

export default Pay;
