import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="w-full top-0 fixed p-4 flex justify-between bg-wearecrewLightGrey items-center">

        <Link href='/'>
          <a className='h-full w-[150px] relative flex justify-center items-center'>
            <img src='/images/logoSVG.svg' className="z-50" alt="We Are Crew logo" layout="responsive"/>
            <div className='bg-wearecrewBlue h-[58px] w-[50px] absolute -left-4 top-1/2 transform -translate-y-1/2' ></div>
          </a>
        </Link>

      <div className="flex gap-x-4">
        <p>Sign In / Register</p>
        <p>My Crew</p>
      </div>
    </nav>
  )
}

export default NavBar