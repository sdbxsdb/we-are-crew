import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full bg-opacity-25 top-0 backdrop-blur-2xl  bg-white fixed p-4 flex justify-between">
      <Link href='/'>
        <a>
          <h1>LOGO</h1>
        </a>
      </Link>
      <div className="flex gap-x-4">
        <h1>Sign In / Register</h1>
        <h1>Profile</h1>
      </div>
    </nav>
  )
}

export default NavBar