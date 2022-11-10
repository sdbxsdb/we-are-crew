import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex gap-x-4 justify-center left-1/2 py-8 absolute transfor -translate-x-1/2 bottom-0">
      <Link href="/terms-and-conditions">
        <small className="cursor-pointer hover:text-wearecrewBlue transition">Terms & Conditions</small>
      </Link>
      <Link href="/privacy-policy">
        <small className="cursor-pointer hover:text-wearecrewBlue transition">Privacy Policy</small>
      </Link>
      <a href="mailto:crew@getcrew.pro" target="_blank" rel="noopener noreferrer" className="-mt-1 p-0 hover:text-wearecrewBlue transition">
        <small>Contact</small>
      </a>
    </div>
  );
};

export default Footer;
