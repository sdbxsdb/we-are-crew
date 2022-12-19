import React from "react";
import Link from "next/link";
import Head from "next/head";

const oneTreePlanted = () => {
  return (
    <>
      <Head>
        <title>Get Crew & Crew Bible | Get Crew</title>
      </Head>
      
      <div className="flex item-center justify-center">
        <div className="flex flex-col justify-center w-full max-w-[1200px] items-center py-12 px-4 gap-12">
          <div className="w-full flex justify-center">
          <h1 className="text-3xl">Our Partners</h1>
          </div>
          <div className="sm:w-2/3">
            <p>
              <span className="text-wearecrewBlue">Get Crew</span> have proudly
              partnered with Crew Bible and One Tree Planted.
              <br />
              <br />
              Follow the links below to find out how together we&apos;re making the industy and the world a better place.
            </p>
            <div className="flex sm:flex-row flex-col items-center gap-12 justify-around mt-12">
            
            <Link href="/crewBible">
              <a>
                <img
                  src="/images/crewBibleLogo.png"
                  width="200px"
                  alt="One Tree Logo"
                />
              </a>
            </Link>
            <Link href="/oneTreePlanted">
              <a>
                <img
                  src="/images/oneTree.png"
                  width="200px"
                  alt="One Tree Logo"
                />
              </a>
            </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default oneTreePlanted;
