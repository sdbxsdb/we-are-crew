import React from "react";
import Link from "next/link";

const LargeButton = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <button className="break-normal largeBtn text-wearecrewDarkestGrey font-anton text-5xl lg:text-6xl text-center uppercase leading-relaxed border-b-2 border-wearecrewBlue shadow-md hoverScale w-full h-[200px] md:w-[330px] md:h-[200px] lg:w-[380px] lg:h-[250px]">
        <span className="min-w-max">{text}</span>
      </button>
    </Link>
  );
};

export default LargeButton;
