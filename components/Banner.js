import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("images/newBannerBlackfaded.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full flex justify-center overflow-hidden items-center h-auto relative px-4"
    >
      <div className="flex relative flex-col items-center px-4 py-4 md:py-6 rounded-full">
        <div className="text-center text-white z-40 font-anton tracking-wide mb-0 md:mb-2 shadow-md">
          <span className="text-2xl md:text-2xl">The only place for crew <br /></span>
          <span className="text-2xl md:text-4xl">UK & Ireland</span>
          
        </div>
        {/* <p className="text-lg text-white  bottom-0 md:bottom-12 z-50"><cite>The last place you&apos;ll need.</cite></p> */}
      </div>
      {/* <img src="/images/newBanner.png" alt="" width="100%" height="100%" className="absolute z-30 opacity-100 -top-[40px] md:-top-[110px]" /> */}
    </div>
  );
};

export default Banner;
