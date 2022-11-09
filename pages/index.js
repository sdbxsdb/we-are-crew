import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
import LargeButton from "../components/LargeButton";
import { useUser } from "../context/user";
import places from "../places.json";
import { useState, useEffect } from "react";




export default function Home() {
  const { user } = useUser();

  const userEmail = user?.data?.user?.email;


  return (
    <div className={styles.container}>
      <Head>
        <title>Get Crew | UK & Ireland - The Only Place for Crew.</title>
      </Head>

      <div className="relative">
        <Banner />
        <div className="w-full hidden md:flex items-center justify-center absolute mt-12 font-bold text-2xl text-center  "></div>
      </div>

      <div className="mt-8 md:mt-0 h-auto md:h-[calc(100vh-210px)] flex flex-col justify-center items-center w-full ">
        
        <div className="hidden md:flex flex-col gap-x-8 gap-y-4 px-4 w-full  text-2xl font-bold justify-around max-w-[1200px] text-center pb-4">
        <hr className="w-7/12 m-auto" />
          <cite>
            <span className="">
              Productions looking for crew.  Crew looking for productions. <br />
            </span>
            <br />
            Select an option below to get started.
          </cite>
          <hr className="w-7/12 m-auto" />
        </div>

        

        
        <div className="flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-between items-center px-4 md:px-12 md:py-12 max-w-[1200px] ">
          <LargeButton text="I need crew" link="/I-need-crew/depts" />
          <LargeButton
            text={`${userEmail ? "My Profile" : "I am Crew"}`}
            link="/my-crew"
          />
        </div>
      </div>
    </div>
  );
}
