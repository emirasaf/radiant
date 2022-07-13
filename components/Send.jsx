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
          Send and request money <br /> from your contacts.
        </h3>
        <p>
          You can send and request money from your contacts. Sending and
          requesting money totally free. You can make lightspeed money
          transactions.
        </p>
      </div>
      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/UI3.png"
        width={620}
        height={832}
      />
    </section>
  );
};

export default Pay;
