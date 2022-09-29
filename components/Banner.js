import React from "react";


const Banner = () => {

  return (
    <div className="banner w-full flex justify-center overflow-hidden items-center h-[80px] md:h-[200px] relative px-4 ">
      <p className="text-center text-1xl md:text-4xl text-white z-40 font-anton tracking-widest mb-5 md:mb-2">The UK &amp; Ireland’s Crew Database</p>
      <p className=" text-white absolute bottom-3 md:bottom-12"><cite>The only place for crew.</cite></p>
      <img src="/images/bannerBg4.png" alt="" width="100%" height="100%" className="absolute z-30 opacity-10 -top-[40px] md:-top-[110px]" />
    </div>
  );
};

export default Banner;
