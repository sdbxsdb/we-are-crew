import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Head from "next/head";

const PaymentSuccess = () => {
  const router = useRouter();


  // setTimeout(() => {
  //   router.push('/my-crew')
  // }, 5000)

  return (
    <>
    <Head>
        <title>Payment Successful | Get Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta name="description" content="Payment Successful." />
      </Head>
    <div className="h-[calc(100vh-105px)] w-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mb-4">From <br/> Get Crew and OneTreePlanted 
        <br /> Thank you!</h1>
        <p>Your payment has been successful and your profile will be live in a few minutes!</p>
        <br />
        <p>A receipt for your purchase will be send to your email.</p>
        <br />
        <br />

          <Link href="/my-crew">
            <a className="ml-1 text-wearecrewBlue underline">Click here to go to your profile.</a>
          </Link>

      </div>
    </div>
    </>
  )
}

export default PaymentSuccess