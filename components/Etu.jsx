import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Etu = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section>
      <div data-aos="fade" className="col">
        <h3>Easy to use UI</h3>
        <p>
          Radiant has easy to use UI so, you can easily make payments, money
          transfers and more. <br /> <br /> You can add balance to your account
          using the “+” button on home menu. Make fast pay with “Pay” button.
          View transaction details and more. Simplified interface for all users.
        </p>
      </div>
      <Image
        data-aos="fade-up"
        alt=""
        src="/assets/UI1.png"
        width={620}
        height={832}
      />
    </section>
  );
};

export default Etu;
