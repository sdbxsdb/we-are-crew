import React from "react";


const Banner = () => {

  return (
    <div className="banner w-full flex justify-center overflow-hidden items-center h-[100px] md:h-[200px] relative px-4">
      <p className="text-center text-2xl md:text-4xl text-white z-40 font-anton tracking-widest mb-2">The UK and Irelands Crew Database</p>
      <p className=" text-white absolute bottom-1 md:bottom-12"><cite>Built by crew, for crew</cite></p>
      <img src="/images/people.png" alt="" width="1000" height="100%" className="absolute z-30 opacity-10 -top-[110px]" />
    </div>
  );
};

export default Banner;
