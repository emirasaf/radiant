import React from "react";
import Image from "next/image";

const Eco = () => {
  return (
    <div className="column">
      <h3 className="flex">
        <Image alt="" src="/assets/Leaf.png" width={36} height={36} />
        Eco Mode
      </h3>
      <section className="mb-1r">
        <Image alt="" src="/assets/UI6.png" width={465} height={624} />
      </section>
    </div>
  );
};

export default Eco;
