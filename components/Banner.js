import React from "react";


const Banner = () => {

  return (
    <div style={{ backgroundImage: `url("images/newBannerBlackfaded.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full flex justify-center overflow-hidden items-center h-[120px] md:h-[150px] relative px-4">
      <div className="flex relative flex-col items-center p-4 rounded-full">
        <p className="text-center text-1xl md:text-4xl text-white z-40 font-anton tracking-wide mb-5 md:mb-2">The UK &amp; Ireland’s <br />Film & Television Crew Database</p>
        <p className="text-lg text-white  bottom-0 md:bottom-12 z-50"><cite>The only place for crew.</cite></p>
      </div>
      {/* <img src="/images/newBanner.png" alt="" width="100%" height="100%" className="absolute z-30 opacity-100 -top-[40px] md:-top-[110px]" /> */}
    </div>
  );
};

export default Banner;
