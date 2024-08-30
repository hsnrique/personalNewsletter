"use client";

import PricingCard from "@/shared/components/cards/pricing.card";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");

  return (
    <div className="w-full bg-[#cfd2fa]">
      <div className="w-[95%] m-auto py-5">
        <div className="w-full md:flex justify-between">
          <div>
            <h3 className="font-black text-center lg:text-left uppercase text-cyber-ink text-[2.75rem] md:text-7xl lg:text-[4rem] xl:text-[4.75rem] max-w-4xl">
              Pricing
            </h3>
            <p className="text-2xl">Simple. Predictable. Built for you.</p>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Button
              className={`${
                active === "Monthly"
                  ? "bg-[#3f48d1] text-white"
                  : "bg-white text-black"
              } rounded-r-[0] !p-7 text-2xl !px-16 border border-[#000]`}
              onClick={() => setActive("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={`${
                active === "Yearly"
                  ? "bg-[#3f48d1] text-white"
                  : "bg-white text-black"
              } rounded-l-[0] !p-7 text-2xl !px-16 border border-[#000]`}
              onClick={() => setActive("Yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>
      </div>
      <PricingCard active={active} />
    </div>
  );
};

export default Pricing;
