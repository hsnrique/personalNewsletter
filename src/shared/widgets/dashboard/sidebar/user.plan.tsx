import { manageSubscription } from "@/actions/manage.subscription";
import useGetMembership from "@/shared/hooks/useGetMembership";
import useSubscribersData from "@/shared/hooks/useSubscribersData";
import { ICONS } from '@/shared/utils/icons'
import { Slider } from '@nextui-org/react'
import { useRouter } from "next/navigation";
import React from 'react'

const UserPlan = () => {
  const { data, loading } = useSubscribersData();
  const { data: membershipData, loading: membershipLoading } = useGetMembership();
  const history = useRouter();

  const handleManage = async () => {
    await manageSubscription({
      customerId: membershipData?.stripeCustomerId,
    }).then((res: any) => {
      console.log("membership plan is:" + res)
      history.push(res);
    });
  };

  return (
    <div className='w-full my-3 p-3 bg-[#d5d7fc] rounded hover:shadow-xl cursor-pointer'>
      <div className='w-full flex items-center'>
        <h5 className='text-md font-medium'>
          {membershipLoading ? "..." : "LAUNCH" && membershipData.plan ? membershipData.plan : "LAUNCH"
          } Plan
        </h5>
        <div className='w-[95%] shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-xl bg-[#3f48d1]' onClick={handleManage}>
          <span className='text-white text-lg'>{ICONS.electric}</span>
          <span className='text-white text-sm'>Upgrade</span>
        </div>
      </div>
      <h5 className='text-[#3f48d1] text-md'>
        Total subscribers
      </h5>
      <Slider 
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={1}
        className="max-w-md"
      />
      <h6 className='text-[#3f48d1]'>
        {loading ? "..." : data?.length} of{" "}
        {membershipData?.plan === "SCALE"
          ? "1,000,000"
          : membershipData?.plan === "GROW"
          ? "10.000"
          : "2,500"
        }{" "} added
      </h6>
    </div>
  )
}

export default UserPlan