import React from "react";
import Link from "next/link";

const LargeButton = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <button className="break-normal largeBtn text-black font-anton text-6xl text-center uppercase leading-relaxed border-b-2 border-wearecrewBlue  shadow-md transform hover:scale-102 transition">
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default LargeButton;
