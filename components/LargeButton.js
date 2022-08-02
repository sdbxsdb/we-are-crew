import React from "react";
import Link from "next/link";

const LargeButton = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <button className="break-normal text-black font-anton text-6xl text-center uppercase leading-relaxed btn-1  shadow-xl">
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default LargeButton;
