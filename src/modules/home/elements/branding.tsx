import { partners } from "@/app/configs/constants"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const Branding = () => {
  return (
    <div className="border-t border-b border-[#000] py-10">
      <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">
        Created by early morning brew team
      </h3>
      <div className="w-full text-center pt-1">
        <h3 className="uppercase bg-[#cfd2fa] rounded p-2 text-xl md:text-2xl text-center text-[#3f48d1] inline-block font-medium">
          Now powering the world&apos;s top newsletters
        </h3>
      </div>
      {/* <Marquee className="w-full-flex">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image 
              src={i.url} 
              key={i.url} 
              width={200} 
              height={200}
              alt="partner" 
              className={`md:mx-8 w-[150px] md:w-[180px] mx-3`}
            />
          </>
        ))}
      </Marquee> */}
    </div>
  )
}

export default Branding