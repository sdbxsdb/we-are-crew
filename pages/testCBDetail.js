import React from "react";
import Link from "next/link";
import Head from "next/head";
import NavBarDemo from "../components/NavBarDemo";

const testCBDetail = () => {
  return (
    <>
      <Head>
        <title>Get Crew & Crew Bible | Get Crew</title>
      </Head>
      <NavBarDemo />
      <div className="flex item-center justify-center">
        <div className="flex flex-col text-center justify-center w-full max-w-[1200px] items-center py-12 px-4 gap-12">
          <div className="">
            <img
              src="/images/crewBibleLogo.png"
              width="200px"
              alt="One Tree Logo"
            />
          </div>
          <div>
            <p>
              Get Crew have proudly partnered with Crew Bible. Info on Crew Bible lorem
              ipsum dolor sit amet consectetur, adipisicing elit. <br /> Beatae,
              nam officiis ratione temporibus laboriosam, est qui in velit
              recusandae consequuntur, <br /> porro consequatur ullam inventore
              ipsum minima reprehenderit. Iusto, nobis ea?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-around items-center w-full">
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded  border-b-2 border-wearecrewBlue hoverScale gap-y-2 p-2">
              <p>Info 1 for CB</p>
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded  border-b-2 border-wearecrewBlue hoverScale gap-y-2 p-2">
              <p>Info 2 for CB</p>
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded  border-b-2 border-wearecrewBlue hoverScale gap-y-2 p-2">
              <p>Info 3 for CB</p>
            </div>
          </div>
          <div className="neumorphBoxMd cursor-pointer border-b-2 border-wearecrewBlue transform transition hover:scale-102 w-full md:max-w-max text-center rounded-md  px-4 py-2 text-2xl">
            <a href="https://www.crewbible.com" target="_blank" rel="noreferrer" className=" w-full text-center">
              <h1>Visit Crew Bible</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default testCBDetail;
