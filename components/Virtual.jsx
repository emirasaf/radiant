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
        <h3 className="">
          <span className="rd">Radiant</span>Virtual
        </h3>
        <p>
          You can create virtual cards in Radiant App. It’s free. It’s works as
          RadiantCard but you can use it only online. Also, you can’t use
          Cashbacks and NFC Payments with RadiantVirtual.
        </p>
      </div>
      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/Virtual.png"
        width={460.5}
        height={655.5}
      />
    </section>
  );
};

export default Pay;
