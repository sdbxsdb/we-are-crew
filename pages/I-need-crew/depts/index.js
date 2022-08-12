import React from "react";
import Head from "next/head";
import DeptCard from "../../../components/DeptCard";

const INeedCrew = () => {
  return (
    <>
      <Head>
        <title>I Need Crew | We Are Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>
      <div className="px-12 pt-12">
        <h1 className="text-black text-3xl">Depts page</h1>
        <div className= "flex justify-center w-full">
          <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <DeptCard dept="ADs" imgUrl="../../../images/icons/ads.png"/>
            <DeptCard dept="Camera" imgUrl="../../../images/icons/camera.png"/>
            <DeptCard dept="Grip" imgUrl="../../../images/icons/grip.png"/>
            <DeptCard dept="VFX" imgUrl="../../../images/icons/vfx.png"/>
            <DeptCard dept="Costume" imgUrl="../../../images/icons/costume.png"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedCrew;


