"use client"

import { SignInButton, useUser } from "@clerk/nextjs"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

const Toolbar = () => {
  const { user } = useUser()

  return (
    <>
      <Button color="primary" className="text-md md:text-lg">
        Start trial
      </Button>
      {user ? (
          <>
            <Link href={"/dashboard"}>
              <Image 
                src={user?.imageUrl} 
                alt="" 
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </>
        ) : (
          <div className="hidden md:inline">
            <SignInButton />
          </div>
        )
      }
    </>
  )
}

export default Toolbar