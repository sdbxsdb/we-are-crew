import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const PaymentCancelled = () => {
  const router = useRouter();

  // setTimeout(() => {
  //   router.push('/my-crew')
  // }, 5000)

  return (
    <>
      <Head>
        <title>Payment Cancelled | Get Crew</title>
      </Head>
      <div className="h-[calc(100vh-105px)] w-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center mb-2">CUT!</h1>
          <p>Sorry, It looks like you cancelled your payment.</p>
          <br />
          <p>
            If you have any questions about payments or or can&apos;t get a
            payment to go through we&apos;ll be happy to help.
          </p>
          <br />
          <a
            href="mailto:crew@getcrew.pro"
            className="text-wearecrewBlue underline"
            target="_blank"
            rel="noreferrer"
          >
            crew@getcrew.pro
          </a>
          <br />
          <br />
          <Link href="/my-crew">
            <a className="ml-1 text-wearecrewBlue underline">Back to My Crew</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentCancelled;
