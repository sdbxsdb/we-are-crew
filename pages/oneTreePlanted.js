import React from "react";
import Link from "next/link";
import Head from "next/head";

const oneTreePlanted = () => {
  return (
    <>
      <Head>
        <title>Get Crew & One Tree Planted | Get Crew</title>
      </Head>
      <div className="flex item-center justify-center">
        <div className="flex flex-col justify-center w-full max-w-[1200px] items-center py-12 px-4 gap-12">
          <div className="">
            <img
              src="/images/oneTree.png"
              width="200px"
              alt="One Tree Logo"
            />
          </div>
          <div className="sm:w-2/3">
            <p>
              <span className="text-wearecrewBlue">Get Crew</span> have proudly
              partnered with One Tree Planted.
              <br />
              <br />
              One Tree Planted want to make it simple for anyone to help the environment by planting trees. Together we can restore forests, create habitat for biodiversity, and make a positive social impact around the world.
              <br /><br />
              Since 2014, One Tree Planted have more than doubled the number of trees planted each year, and are working with partners across 47+ countries in Europe, North America, Latin America, Africa, Asia and the Pacific.
            </p>
          </div>
          <div className="flex text-3xl flex-col sm:flex-row gap-4 justify-around items-center sm:w-2/3 w-full">
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">2 trees planted per live user</h1>
              <img
                src="/images/icons/2trees.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-auto flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">Combat our carbon footprint</h1>
              <img
                src="/images/icons/carbon.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">Save the planet</h1>
              <img
                src="/images/icons/earth.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
          </div>

          <div className="neumorphBoxMd cursor-pointer border-b-2 border-wearecrewBlue transform transition hover:scale-102 w-full md:max-w-max text-center rounded-md  px-4 py-2 text-2xl">
            <a
              href="https://onetreeplanted.org/pages/about-us"
              target="_blank"
              rel="noreferrer"
              className=" w-full text-center"
            >
              <h1>Visit One Tree Planted</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default oneTreePlanted;
