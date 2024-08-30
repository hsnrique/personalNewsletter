"use client";

import { subscribe } from "@/actions/add.subscribe";
// import { useUser } from "@clerk/nextjs";
// import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  // const { user } = useUser()

  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await subscribe({ email: value, username })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You are successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div>
        {/* <Image 
          src={user?.imageUrl} 
          alt="" 
          width={40}
          height={40}
          className="rounded-full"
        /> */}
        <h1 className="text-7xl pb-8 capitalize">{username} NewsLetter</h1>
      </div>
      <form
        className="flex w-full max-w-md border rounded overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 bg-[#878fff] text-white font-bold py-4 rounded-r hover:bg-[#5561ff] focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;