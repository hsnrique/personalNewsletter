import { stripeSubscribe } from "@/actions/stripe.subscribe";
import { freePlan, growPlan, scalePlan } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";

const PricingCard = ({ active }: { active: string }) => {
  const { user } = useUser()
  const history = useRouter()

  const handleSubscription = async ({ price }: { price: string }) => {
    await stripeSubscribe({ price: price, userId: user?.id! }).then(
      (res: any) => {
        console.log(res)
        history.push(res);
      }
    )
  }

  return (
    <div className="w-full md:flex items-start justify-around py-8">
      {/* free plan */}
      <div className="md:w-[400px] bg-white rounded-3xl p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3f48d1"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-black uppercase text-cyber-ink text-3xl pb-8 border-b border-b-[#000]">
          Launch
        </h5>
        <br />
        <div className="border-b pb-8 border-[#000]">
          <h5 className="uppercase text-cyber-ink text-3xl">$0</h5>
          <p className="text-lg">No commitment</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">What&apos;s included...</p>
        </div>
        {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-4">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button color="primary" className="w-full text-xl !py-6">
          Get started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then free forever
        </p>
      </div>

      {/* grow plan */}
      <div className="md:w-[400px] bg-white rounded-3xl p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3f48d1"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-black uppercase text-cyber-ink text-3xl pb-8 border-b border-b-[#000]">
          Grow
        </h5>
        <br />
        <div className="border-b pb-8 border-[#000]">
          <h5 className="uppercase text-cyber-ink text-3xl">
            {active === "Monthly" ? "49" : "42"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">Everything in Launch, plus...</p>
        </div>
        {growPlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-4">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button
          color="primary"
          className="w-full text-xl !py-6"
          onClick={() =>
            handleSubscription({
              price:
                active === "Monthly"
                  ? "price_1PtAfIDhrgD0TxnWhkjMzTzc" // GROW
                  : "price_1PtAgUDhrgD0TxnWxMTByGCN", // GROW YEARLY
            })
          }
        >
          Get started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then ${active === "Monthly" ? "49" : "42"}
        </p>
      </div>
      
      {/* scale plan */}
      <div className="md:w-[400px] bg-white rounded-3xl p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3f48d1"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-black uppercase text-cyber-ink text-3xl pb-8 border-b border-b-[#000]">
          Scale
        </h5>
        <br />
        <div className="border-b pb-8 border-[#000]">
          <h5 className="uppercase text-cyber-ink text-3xl">
            {active === "Monthly" ? "99" : "84"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">Everything in Grow, plus...</p>
        </div>
        {scalePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-4">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
        <br />
        <Button
          color="primary"
          className="w-full text-xl !py-6"
          onClick={() => 
            handleSubscription({
              price:
                active === "Monthly"
                  ? "price_1PtAwGDhrgD0TxnWEbgTTjzF" // SCALE
                  : "price_1PtAwfDhrgD0TxnWIsp3ErIg", // SCALE YEARLY
            })}
        >
          Get started
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then ${active === "Monthly" ? "99" : "84"}
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
