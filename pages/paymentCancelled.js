import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const PaymentCancelled = () => {
  const router = useRouter();


  // setTimeout(() => {
  //   router.push('/my-crew')
  // }, 5000)

  return (
    <div className="h-[calc(100vh-105px)] w-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mb-2">Oh no...</h1>
        <p>Looks like you cancelled your payment.</p>
        <br />
        <p>If you have any questions about payment or Get Crew in general we&apos;ll be happy to help.</p>
        <br />
        <a href="mailto:crew@getcrew.pro" className="text-wearecrewBlue underline" target="_blank" rel="noreferrer">crew@getcrew.pro</a>
        <br />
        <br />
          <Link href="/my-crew">
            <a className="ml-1 text-wearecrewBlue underline">Back to My Crew</a>
          </Link>
      </div>
    </div>
  )
}

export default PaymentCancelled