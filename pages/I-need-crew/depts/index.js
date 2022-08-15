import React from "react";
import Head from "next/head";
import DeptCard from "../../../components/DeptCard";


 const searchInputHandler = (e) => {
  console.log(e.target.value);
 }


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
      <div className="px-4 md:px-12 py-12">
        <h1 className="text-3xl">Which Department are you looking for?</h1>
        <div className="w-full  flex justify-center mt-12 mb-4">
          <input type="text" onChange={searchInputHandler} className="bg-white border-b w-[400px] border-wearecrewBlue rounded-md p-4 outline-0" placeholder="Search Departments..." />
        </div>
        <div className= "flex justify-center w-full">
          <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <DeptCard dept="Action Vehicles" imgUrl="../../../images/icons/actionVeh.png"/>
            <DeptCard dept="Acting" imgUrl="../../../images/icons/acting.png"/>
            <DeptCard dept="Animals" imgUrl="../../../images/icons/animals.png"/>
            <DeptCard dept="Armoury" imgUrl="../../../images/icons/armoury.png"/>
            <DeptCard dept="Art" imgUrl="../../../images/icons/art.png"/>
            <DeptCard dept="ADs" imgUrl="../../../images/icons/ads.png"/>
            <DeptCard dept="Camera" imgUrl="../../../images/icons/camera.png"/>
            <DeptCard dept="Casting" imgUrl="../../../images/icons/casting.png"/>
            <DeptCard dept="Catering" imgUrl="../../../images/icons/catering.png"/>
            <DeptCard dept="Construction" imgUrl="../../../images/icons/construction.png"/>
            <DeptCard dept="Continuity" imgUrl="../../../images/icons/continuity.png"/>
            <DeptCard dept="Costume" imgUrl="../../../images/icons/costume.png"/>
            <DeptCard dept="Covid" imgUrl="../../../images/icons/covid.png"/>
            <DeptCard dept="Directors" imgUrl="../../../images/icons/directors.png"/>
            <DeptCard dept="Editoral & Post" imgUrl="../../../images/icons/editorial.png"/>
            <DeptCard dept="Electrical" imgUrl="../../../images/icons/electrical.png"/>
            <DeptCard dept="Grip" imgUrl="../../../images/icons/grip.png"/>
            <DeptCard dept="Hair & Make-up" imgUrl="../../../images/icons/hairMakeUp.png"/>
            <DeptCard dept="Health & Safety" imgUrl="../../../images/icons/healthSafety.png"/>
            <DeptCard dept="HR" imgUrl="../../../images/icons/hr.png"/>
            <DeptCard dept="Locations" imgUrl="../../../images/icons/locations.png"/>
            <DeptCard dept="Producers" imgUrl="../../../images/icons/producer.png"/>
            <DeptCard dept="Production" imgUrl="../../../images/icons/production.png"/>
            <DeptCard dept="Props" imgUrl="../../../images/icons/props.png"/>
            <DeptCard dept="Set Decoration" imgUrl="../../../images/icons/setDec.png"/>
            <DeptCard dept="Sound" imgUrl="../../../images/icons/sound.png"/>
            <DeptCard dept="SFX" imgUrl="../../../images/icons/sfx.png"/>
            <DeptCard dept="Stand-Bys" imgUrl="../../../images/icons/standby.png"/>
            <DeptCard dept="Stunts" imgUrl="../../../images/icons/stunts.png"/>
            <DeptCard dept="Tracking Vehicles" imgUrl="../../../images/icons/trackingVeh.png"/>
            <DeptCard dept="Transport" imgUrl="../../../images/icons/transport.png"/>
            <DeptCard dept="VFX" imgUrl="../../../images/icons/vfx.png"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedCrew;


