import React from "react";
import Link from "next/link";

const LargeButton = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <button className="break-normal largeBtn text-wearecrewDarkestGrey font-anton text-5xl lg:text-6xl text-center uppercase leading-relaxed border-b-2 border-wearecrewBlue neumorphBoxLg hoverScale w-full h-[200px] md:h-[40%]!important md:w-[40%]">
        <span className="min-w-max">{text}</span>
      </button>
    </Link>
  );
};

export default LargeButton;
