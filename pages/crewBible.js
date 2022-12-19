import React from "react";
import Link from "next/link";
import Head from "next/head";

const crewBible = () => {
  return (
    <>
      <Head>
        <title>Get Crew & Crew Bible | Get Crew</title>
      </Head>
      
      <div className="flex item-center justify-center">
        <div className="flex flex-col justify-center w-full max-w-[1200px] items-center py-12 px-4 gap-12">
          <div className="">
            <img
              src="/images/crewBibleLogo.png"
              width="200px"
              alt="One Tree Logo"
            />
          </div>
          <div className="sm:w-2/3">
            <p>
              <span className="text-wearecrewBlue">Get Crew</span> have proudly
              partnered with Crew Bible.
              <br />
              <br />
              Crew Bible believe that everyone should have the opportunity to
              access the same resources and knowledge in order to develop their
              career in the UK&apos;s Film & TV industry. <br />
              They&apos;re passionate about helping new entrants to enhance
              their employability and get on the right path in their careers.{" "}
              <br />
              <br /> The non-profit organisation is dedicated to providing
              guidance and support, equipping crew with the knowledge, skills,
              and resources they need to succeed. <br /> Through their online
              platform, they provide guidance and advice on how to get ahead in
              this competitive industry, as well as connecting people with job
              opportunities and industry contacts. <br /> Crew Bibles goal is to
              make sure that everyone has an equal chance of succeeding in the
              world of film and TV production. All for free! No need to sign up,
              no need to pay a monthly subscription.
            </p>
          </div>
          <div className="flex text-3xl flex-col sm:flex-row gap-4 justify-around items-center sm:w-2/3 w-full">
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">Resources</h1>
              <img
                src="/images/icons/learning.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">Knowledge</h1>
              <img
                src="/images/icons/crewbible2.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <div className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md gap-y-2 p-2">
              <h1 className="text-5xl sm:text-3xl">Develop</h1>
              <img
                src="/images/icons/develop.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
          </div>

          <div className="neumorphBoxMd cursor-pointer border-b-2 border-wearecrewBlue transform transition hover:scale-102 w-full md:max-w-max text-center rounded-md  px-4 py-2 text-2xl">
            <a
              href="https://www.crewbible.com"
              target="_blank"
              rel="noreferrer"
              className=" w-full text-center"
            >
              <h1>Visit Crew Bible</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default crewBible;
