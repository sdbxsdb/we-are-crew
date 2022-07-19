import React from "react";
import Link from 'next/link';

const LargeButton = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <a className="bg-gray-200 p-12 rounded w-[400px] h-[400px] flex justify-center items-center">
        <h1>{text}</h1>
      </a>
    </Link>
  );
};

export default LargeButton;
