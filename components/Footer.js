import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex gap-x-4 justify-center left-1/2 py-8 absolute transfor -translate-x-1/2 bottom-0">
      <Link href="/terms-and-conditions">
        <small className="cursor-pointer">Terms & Conditions</small>
      </Link>
      <Link href="/privacy-policy">
        <small className="cursor-pointer">Privacy Policy</small>
      </Link>
      <a href="mailto:crew@getcrew.pro" className="-mt-1 p-0">
        <small>Contact</small>
      </a>
    </div>
  );
};

export default Footer;
