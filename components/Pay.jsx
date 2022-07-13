import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Pay = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section>
      <div data-aos="fade" className="col">
        <h3>
          Make contactless payments <br /> through Radiant App
        </h3>
        <p>
          You can make contactless payments through Radiant App. Just click
          “Pay” button in home menu. Then you need to confirm your identity with
          fingerprint or face recognition. That’s it. <br />
          <br /> Also Radiant support Apple Pay and Google Pay. Apple Pay and
          Google Pay requires RadiantCard
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className="ps">
            *only on Android, iOS users can use Apple Pay.
          </span>
        </p>
      </div>
      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/UI2.png"
        width={620}
        height={832}
      />
    </section>
  );
};

export default Pay;
