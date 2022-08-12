import React from "react";


const Banner = () => {

  const styling = {
    backgroundImage: `url('/images/people.png')`,
    width:"100px",
    height:"100px"
  }
  return (
    <div className="banner w-full flex justify-center overflow-hidden items-center h-[200px] relative">
      <p className="text-4xl text-white absolute z-40 font-anton tracking-widest">The UK and Irelands Crew Database</p>
      <p className=" text-white absolute bottom-12"><cite>Built by crew, for crew</cite></p>
      <img src="/images/people.png" alt="" width="1000" height="100%" className="absolute z-30 opacity-10 -top-[110px]" />
    </div>
  );
};

export default Banner;
