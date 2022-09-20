import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const PaymentSuccess = () => {
  const router = useRouter();


  setTimeout(() => {
    router.push('/my-crew')
  }, 5000)

  return (
    <div className="h-[calc(100vh-105px)] w-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mb-2">From Get Crew and OneTreePlanted <br /> Thank you!</h1>
        <p>Your payment has been successful and your profile will be live in a few minutes!</p>
        <br />
        <p>A reciept for your purchase will be send to your email.</p>
        <br />
        <br />
        <p>If you haven&apos;t been redirected to your profile in 10sec 
          <Link href="/my-crew">
            <a className="ml-1 text-wearecrewBlue underline">click here</a>
          </Link>
          .
          </p>
      </div>
    </div>
  )
}

export default PaymentSuccess