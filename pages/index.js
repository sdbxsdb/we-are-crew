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
        <title>Get Crew</title>
        <meta name="description" content="Productions looking for crew.  Crew looking for productions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Banner />
      </div>

      <div className="mt-2 md:mt-0 h-[calc(100vh-305px)] flex justify-center w-full">
        <div className="flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-between items-center px-4 md:px-12 md:py-12 max-w-[1200px]">
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
